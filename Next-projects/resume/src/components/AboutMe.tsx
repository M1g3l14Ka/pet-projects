'use client'
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const tabs = [
    { id: 'bio', label: 'BIO' },
    { id: 'stack', label: 'STACK' },
    { id: 'soft', label: 'SOFT SKILLS' },
];

const content = {
    bio: "Мне 20 лет, я из Вологды. Прошел путь от продаж в Мегафоне до победы в WorldSkills. Люблю сложный фронтенд, неон и когда код работает с первого раза. Сейчас фокусируюсь на Next.js экосистеме.",
    stack: "Core: JS (ES6+), TS\nFrontend: React, Next.js 15, Tailwind\nAnimation: Framer Motion, GSAP\nTools: Git, Figma, Vercel",
    soft: "• Умею объяснять сложные вещи простыми словами (спасибо опыту наставничества).\n• Стрессоустойчив (работа в продажах закалила).\n• Дотошен к деталям (pixel perfect)."
};

export default function AboutModal({ onClose }: { onClose: () => void }) {
    const [activeTab, setActiveTab] = useState('bio');

    return (
        <div className="fixed inset-0 z-1000 flex justify-center items-center p-4 bg-black/80 backdrop-blur-md" onClick={onClose}>
            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#0a0a0a] border border-white/20 w-full max-w-3xl rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-[0_0_50px_rgba(168,85,247,0.2)]"
            >
                {/* ЛЕВАЯ ЧАСТЬ: ФОТО */}
                <div className="w-full md:w-1/3 bg-white/5 p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/10">
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.5)] mb-4">
                        <Image src="/profImg.png" fill alt="Michael profile photo" sizes="(max-width: 768px) 128px, 160px" className="object-cover" />
                    </div>
                    <h2 className="text-xl font-bold text-white font-mono">Michael</h2>
                    <p className="text-purple-400 text-sm font-mono">Frontend Dev</p>
                </div>

                {/* ПРАВАЯ ЧАСТЬ: ТАБЫ И ТЕКСТ */}
                <div className="w-full md:w-2/3 p-6 md:p-10">
                    <div className="flex gap-4 mb-6 border-b border-white/10 pb-2 overflow-x-auto">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`pb-2 text-sm font-bold tracking-wider transition-all ${
                                    activeTab === tab.id 
                                    ? 'text-purple-500 border-b-2 border-purple-500' 
                                    : 'text-gray-500 hover:text-white'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-gray-300 font-mono text-sm leading-relaxed whitespace-pre-line min-h-37.5"
                    >
                        {content[activeTab as keyof typeof content]}
                    </motion.div>

                    <div className="mt-6 flex justify-end">
                        <button onClick={onClose} className="text-gray-500 hover:text-white text-sm hover:underline">
                            CLOSE_TERMINAL
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}