'use client'
import { useState } from "react";
import { IFAQData } from "../types";
import { motion } from "framer-motion";

interface IFAQProps {
    faqData: IFAQData;
    toggleFAQ: () => void;
}

export default function Accordion({ faqData, toggleFAQ }:IFAQProps) {

    const [activeList, setActiveList] = useState('General')

    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0}}
            transition={{ duration: 0.3 }}
            animate={{ scale:1, opacity: 1 }}
            className="fixed inset-0 bg-black/70 z-50 backdrop-blur-2xl flex justify-center items-center flex-col w-auto"
            onClick={toggleFAQ}
        >
            <div 
                className="w-auto rounded-2xl p-8 border shadow-[0_0_50px_rgba(0,0,0,0.5)] sm:w-auto sm:flex-wrap"
                onClick={(e) => e.stopPropagation()}    
            >
                <div className="flex justify-between items-center text-center font-bold text-4xl w-auto">
                    <h1 className="">Возможные вопросы</h1>
                    <button
                        onClick={toggleFAQ}
                        className="hover:rotate-90 transition-transform duration-300"
                    >
                        &times;
                    </button>
                </div>
                <div className="flex flex-col justify-center items-center m-6">
                    <div className="flex justify-center items-center w-auto bg-white/10 rounded-3xl m-2">
                        {
                            Object.keys(faqData).map((key) => {
                                return (
                                    <div key={key} className="">
                                        <button
                                            key={key}
                                            className={`w-36 m-0.5 h-10 rounded-3xl hover:bg-linear-45 from-[#ffbf00] to-rose-500 hover:shadow-[0_0_15px_rgba(255,191,0,0.5)] transition ease-in-out duration-300 cursor-pointer font-bold 
                                                ${activeList === key ? 'bg-linear-30 from-[#ffbf00] to-rose-500' : ''}`}
                                            onClick={() => setActiveList(key)}    
                                        >
                                            {key}
                                        </button>
                                    </div>
                                )
                            })

                        }
                    </div>

                    <div     
                        className="m-2 p-1"
                    >
                        {
                            faqData[activeList]?.map((item) => {
                                return (
                                    <div key={item.id} className="flex justify-center flex-wrap">
                                        {item.url ? (
                                            <div className="gap-2 text-2xl m-2 font-bold w-48 h-12 text-center flex justify-center items-center hover:scale-110 transition ease-in-out cursor-pointer hover:bg-linear-45 from-[#ffbf00] to-rose-500 rounded-2xl">
                                                <a href={item.url} target="_blank" className="border-b">
                                                    {item.text}
                                                </a>
                                            </div>
                                        ) : (
                                            <div 
                                                key={item.id}
                                                className="text-xl font-bold m-2 p-1" 
                                            >
                                                <h1 className="m-4 text-2xl">{item.title}</h1>
                                                <p>{item.text}</p>
                                            </div>
                                        )}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            
        </motion.div>
    )
}