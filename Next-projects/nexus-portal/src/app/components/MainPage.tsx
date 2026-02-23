'use client'
import { useState } from "react";
import { IMainBtns, IMainContext } from "../types"; 
import { motion } from "framer-motion"; 

interface MainPageProps {
    mainBtns: IMainBtns[];
    mainContexts: IMainContext[];
}

export default function MainPage({ mainBtns, mainContexts }: MainPageProps) {
    // Храним ID активной категории (по дефолту 1 - IDE)
    const [selectedId, setSelectedId] = useState(1);

    // Находим нужный контент для отображения
    const currentContent = mainContexts.find(c => c.id === selectedId) || mainContexts[0];

    return (
        <main className="w-full max-w-6xl mx-auto py-20 px-6 flex flex-col items-center gap-16">
            
            {/* СЕЛЕКТОР КАТЕГОРИЙ */}
            <div className="flex flex-wrap justify-center gap-4">
                {mainBtns.map((btn) => (
                    <button
                        key={btn.id}
                        onClick={() => setSelectedId(btn.id)}
                        className={`px-8 py-3 rounded-2xl font-bold text-lg transition-all duration-300
                        ${selectedId === btn.id 
                            ? 'bg-linear-to-r from-[#FFDF00] to-rose-500 text-white shadow-[0_0_20px_rgba(255,223,0,0.3)] scale-105' 
                            : 'bg-[#1A1A1A] text-gray-500 border border-white/5 hover:border-white/20'}`}
                    >
                        {btn.text}
                    </button>
                ))}
            </div>

            {/* КОНТЕНТНАЯ КАРТОЧКА */}
            <motion.div 
                key={selectedId} // Чтобы анимация срабатывала при смене контента
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full bg-[#111] border border-white/5 rounded-[40px] p-10 md:p-16 shadow-2xl"
            >
                <div className="max-w-3xl">
                    <h2 className="text-[#FFDF00] text-sm font-bold uppercase tracking-[0.3em] mb-4">
                        Фракция: {currentContent.title}
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Завладей миром через код.
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-10">
                        {currentContent.description}
                    </p>
                    
                    {/* КНОПКИ К ДОКУМЕНТАЦИИ (Пример) */}
                    <div className="flex gap-4">
                        <button className="px-6 py-3 border border-[#FFDF00] text-[#FFDF00] rounded-xl hover:bg-[#FFDF00] hover:text-black transition-all font-bold">
                            Документация
                        </button>
                        <button className="px-6 py-3 text-gray-500 hover:text-white transition-all font-bold">
                            Примеры кода
                        </button>
                    </div>
                </div>
            </motion.div>

        </main>
    )
}