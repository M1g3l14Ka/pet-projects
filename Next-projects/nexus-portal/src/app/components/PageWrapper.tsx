'use client'

import { useState } from "react"
import HeaderPage from "./HeaderPage"
import MainPage from "./MainPage"
import FooterPage from "./FooterPage"
import FAQMenu from "./FAQMenu" // Твое переименованное Accordion
import { IFAQData, IImages, IMainBtns, IMainContext } from "../types"

interface PageWrapperProps {
    tiles: IImages[];
    mainBtns: IMainBtns[];
    mainContexts: IMainContext[];
    faqData: IFAQData;
}

export default function PageWrapper({ tiles, mainBtns, mainContexts, faqData }: PageWrapperProps) {
    // Состояние для модалки FAQ
    const [isFAQOpen, setIsFAQOpen] = useState(false);

    return (
        <div className="flex flex-col w-full min-h-screen">
            {/* 1. Хедер (ему даем только плитки и кнопку переключения FAQ) */}
            <HeaderPage 
                tiles={tiles} 
                toggleFaq={() => setIsFAQOpen(!isFAQOpen)} 
            />

            {/* 2. Модалка FAQ (показываем поверх всего, если true) */}
            {isFAQOpen && (
                <FAQMenu 
                    faqData={faqData} 
                    toggleFAQ={() => setIsFAQOpen(false)} 
                />
            )}

            {/* 3. Основной контент */}
            <MainPage 
                mainBtns={mainBtns} 
                mainContexts={mainContexts} 
            />

            {/* 4. Подвал */}
            <FooterPage />
        </div>
    )
}