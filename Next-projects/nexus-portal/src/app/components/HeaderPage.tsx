'use client'
import Image from "next/image"
import { motion } from "framer-motion"
import { IImages } from "../types"

interface HeaderProps {
    tiles: IImages[];
    toggleFaq: () => void;
}

export default function HeaderPage({ tiles, toggleFaq }: HeaderProps) {
    return (
        <header className="relative w-full h-[70vh] min-h-125 overflow-hidden bg-[#050505] flex flex-col items-center">
            
            {/* 1. ИНТЕРАКТИВНЫЙ ФОН */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <div className="relative w-[180%] h-[180%] -left-[40%] -top-[40%] rotate-[-15deg]">
                    <div className="grid grid-cols-6 md:grid-cols-8 gap-8 p-10">
                        {/* Размножаем массив, чтобы заполнить всё пространство */}
                        {[...tiles, ...tiles, ...tiles].map((tile, index) => (
                            <motion.div
                                key={`${tile.id}-${index}`}
                                className="flex justify-center items-center p-4 border-2 border-transparent rounded-2xl pointer-events-auto"
                                whileHover={{ 
                                    y: -15, 
                                    scale: 1.1, 
                                    borderColor: "#FFDF00", 
                                    boxShadow: "0 0 30px rgba(255, 223, 0, 0.2)",
                                    zIndex: 50
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <Image 
                                    src={tile.src} 
                                    width={70} 
                                    height={70} 
                                    alt="logo" 
                                    className="grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 2. ВЕРХНЯЯ ПАНЕЛЬ (LOGO & BUTTONS) */}
            <div className="relative z-10 w-full max-w-7xl flex justify-between items-center p-6">
                <Image 
                    width={180}
                    height={60}
                    src='/logo/nexusPortal.png'
                    alt="Nexus portal"
                    className="drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                />
                
                <div className="flex gap-4">
                    <button 
                        onClick={toggleFaq}
                        className="rounded-full w-32 h-12 hover:scale-110 px-6 py-2 font-bold border border-white/20 text-white bg-linear-120 from-yellow-500 to-rose-500 hover:bg-white/10 transition-all"
                    >
                        FAQ
                    </button>
                </div>
            </div>

            {/* 3. ЦЕНТРАЛЬНЫЙ ТЕКСТ ХЕДЕРА */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white">
                    The Nexus <span className="text-[#FFDF00]">Portal</span>
                </h1>
                <p className="mt-4 text-gray-400 max-w-xl text-sm md:text-base tracking-widest uppercase">
                    Выбери свою сторону в цифровом мире 2026
                </p>
            </div>
        </header>
    )
}