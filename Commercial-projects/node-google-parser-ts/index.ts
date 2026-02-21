import * as fs from 'fs';
import * as path from 'path';

const INPUT_FILE = 'google.html';
const OUTPUT_FILE = 'output.csv';

interface SearchResult {
    title: string;
    link: string;
    snippet: string;
    type: 'Ads' | 'Organic';
}

const cleanText = (text: string): string => {
    return text
        .replace(/<[^>]*>/g, '')
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&nbsp;/g, ' ')
        .replace(/&middot;/g, '·')
        .replace(/\s+/g, ' ') 
        .trim();
};

// Универсальная функция для поиска результатов внутри конкретного контейнера
const parseResultsFromHtml = (htmlSection: string, type: 'Ads' | 'Organic'): SearchResult[] => {
    const results: SearchResult[] = [];
    
    // Для органики ищем по классу MjjYud, для рекламы — по data-text-ad
    const blockRegex = type === 'Organic' 
        ? /<div[^>]*class="[^"]*MjjYud[^"]*"[^>]*>([\s\S]*?)(?=<div[^>]*class="[^"]*MjjYud|<div[^>]*id="botstuff"|$)/gi
        : /<div[^>]*data-text-ad="?1"?[^>]*>([\s\S]*?)(?=<div[^>]*data-text-ad|<div[^>]*id="(?:rso|res)"|$)/gi;

    let match;
    while ((match = blockRegex.exec(htmlSection)) !== null) {
        const content = match[1];

        // Ищем ссылку (пропускаем google.com)
        const linkMatch = /<a[^>]*?href="(https?:\/\/(?!(?:www\.)?google\.com)[^"&]+)"/i.exec(content);
        
        // Ищем заголовок (h3 или role="heading")
        const titleMatch = /<h3[^>]*>([\s\S]*?)<\/h3>/i.exec(content) 
            || /<(?:div|span)[^>]*role="heading"[^>]*>([\s\S]*?)<\/(?:div|span)>/i.exec(content);

        if (!linkMatch || !titleMatch) continue;

        const cleanTitle = cleanText(titleMatch[1]);
        let snippet = "";
        
        // 1. Ищем snippet по -webkit-line-clamp (основной способ Google)
        const snippetByStyle = /<div[^>]*?style="[^"]*-webkit-line-clamp[^"]*"[^>]*>([\s\S]*?)<\/div>/i.exec(content);
        
        if (snippetByStyle) {
            snippet = cleanText(snippetByStyle[1]);
        } else {
            // 2. Ищем по классу VwiC3b (альтернативный класс для описания)
            const snippetByClass = /<div[^>]*class="[^"]*VwiC3b[^"]*"[^>]*>([\s\S]*?)<\/div>/i.exec(content);
            
            if (snippetByClass) {
                snippet = cleanText(snippetByClass[1]);
            } else {
                // 3. Фоллбэк: ищем первый длинный текст после заголовка
                const afterTitleIndex = titleMatch.index + titleMatch[0].length;
                const textAfterTitle = content.substring(afterTitleIndex, afterTitleIndex + 1000); // Ограничим поиск
                
                // Ищем текст между > и < длиннее 40 символов (не URL)
                const longTextMatch = />([^<]{40,}?)</g.exec(textAfterTitle);
                
                if (longTextMatch) {
                    const candidate = cleanText(longTextMatch[1]);
                    // Проверяем, что это не URL и не совпадает с заголовком
                    if (!candidate.startsWith('http') && candidate !== cleanTitle) {
                        snippet = candidate;
                    }
                }
            }
        }

        // Добавляем результат (даже если snippet не найден)
        results.push({
            title: cleanTitle,
            link: decodeURIComponent(linkMatch[1]).replace(/&amp;/g, '&'),
            snippet: snippet || "Описание не найдено",
            type: type
        });
    }
    
    return results;
};

const main = () => {
    try {
        const filePath = path.join(process.cwd(), INPUT_FILE);
        
        if (!fs.existsSync(filePath)) {
            console.error(`Файл ${INPUT_FILE} не найден!`);
            process.exit(1);
        }
        
        const html = fs.readFileSync(filePath, 'utf-8');

        // 1. Ищем секцию рекламы (#tads или #taw)
        const adsMatch = /<div[^>]*id="(?:tads|taw)"[^>]*>([\s\S]*?)(?=<div[^>]*id="(?:rso|res|botstuff)"|$)/i.exec(html);
        const adsHtml = adsMatch ? adsMatch[1] : "";

        // 2. Ищем секцию органики (#rso или #res)
        const organicMatch = /<div[^>]*id="(?:rso|res)"[^>]*>([\s\S]*?)(?=<div[^>]*id="botstuff"|$)/i.exec(html);
        const organicHtml = organicMatch ? organicMatch[1] : "";

        // Если не нашли ни рекламу, ни органику — используем весь HTML (с предупреждением)
        if (!adsHtml && !organicHtml) {
            console.warn('Не найдены стандартные контейнеры Google (#tads, #rso). Парсим весь HTML (могут быть неточности).');
        }

        // 3. Парсим рекламу и органику
        const adsResults = adsHtml ? parseResultsFromHtml(adsHtml, 'Ads') : [];
        const organicResults = organicHtml ? parseResultsFromHtml(organicHtml, 'Organic') : parseResultsFromHtml(html, 'Organic');

        // 4. Объединяем и удаляем дубли (по ссылке)
        const allResults = [...adsResults, ...organicResults];
        const uniqueResults = allResults.filter((result, index, self) => 
            index === self.findIndex(r => r.link === result.link)
        );

        // 5. Поиск Next page (несколько вариантов)
        let nextLink = 'Не найдена';
        
        // Вариант 1: по id="pnnext"
        const nextById = /<a[^>]*?id="pnnext"[^>]*?href="([^"]*?)"/i.exec(html);
        if (nextById) {
            nextLink = 'https://www.google.com' + nextById[1].replace(/&amp;/g, '&');
        } else {
            // Вариант 2: по aria-label="Next page" или тексту "Следующая"
            const nextByAria = /<a[^>]*?(?:aria-label="Next page"|>Следующая<)[^>]*?href="([^"]*?)"/i.exec(html);
            if (nextByAria) {
                const hrefMatch = /href="([^"]*?)"/i.exec(nextByAria[0]);
                if (hrefMatch) {
                    nextLink = 'https://www.google.com' + hrefMatch[1].replace(/&amp;/g, '&');
                }
            }
        }

        // 6. Статистика
        const adsCount = uniqueResults.filter(r => r.type === 'Ads').length;
        const organicCount = uniqueResults.filter(r => r.type === 'Organic').length;
        
        console.log(`Всего найдено: ${uniqueResults.length} уникальных результатов`);
        console.log(`Реклама: ${adsCount}`);
        console.log(`Органика: ${organicCount}`);
        
        if (uniqueResults.length === 0) {
            console.warn('Результатов не найдено. Проверьте структуру HTML-файла.');
        }

        // 7. Генерация CSV
        let csv = '\uFEFF"Title","Link","Snippet","Type"\n'; 
        uniqueResults.forEach(res => {
            const escapedTitle = res.title.replace(/"/g, '""');
            const escapedLink = res.link.replace(/"/g, '""');
            const escapedSnippet = res.snippet.replace(/"/g, '""');
            csv += `"${escapedTitle}","${escapedLink}","${escapedSnippet}","${res.type}"\n`;
        });
        
        csv += `\n"Next Page Link","${nextLink.replace(/"/g, '""')}","",""`;

        fs.writeFileSync(path.join(process.cwd(), OUTPUT_FILE), csv, 'utf-8');
        console.log(`Файл ${OUTPUT_FILE} успешно создан!`);

    } catch (e) {
        console.error('Ошибка:', e);
        process.exit(1);
    }
};

main();
