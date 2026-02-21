'use server'

import { GoogleGenerativeAI } from '@google/generative-ai';

export async function generateSeo(productName: string) {
    if (!productName) {
        return { success: false, error: 'Нет названия товара' }
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return { success: false, error: 'Не найден ключ API в .env.local' }
    }

    console.log(`Отправляем запрос в Gemini для: ${productName}...`)

    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        // Используем самую быструю и бесплатную модель
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const prompt = `
        Ты крутой SEO-специалист и маркетолог. Напиши SEO-данные для товара: "${productName}".
        Верни результат СТРОГО в формате JSON, без маркдауна, без \`\`\`json, просто голый объект.
        Структура JSON должна быть такой:
        {
            "title": "SEO заголовок (до 60 символов, с призывом купить)",
            "description": "SEO описание (до 160 символов, продающее)",
            "keywords": "5-7 ключевых слов через запятую (например: купить ${productName}, цена, отзывы)",
            "short_desc": "Краткое привлекательное описание товара для карточки (1-2 предложения)",
            "long_desc": "Подробное, красивое описание товара, почему его стоит купить (около 3-4 предложений)"
        }
        `;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        // Нейронки иногда любят оборачивать ответ в ```json ... ```, чистим это
        const cleanJson = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
        const data = JSON.parse(cleanJson);

        console.log("Успешный ответ от AI:", data);

        return { success: true, data }
    } catch (error) {
        console.error("Ошибка Gemini API:", error);
        return { success: false, error: 'Ошибка генерации. Попробуй еще раз.' }
    }
}