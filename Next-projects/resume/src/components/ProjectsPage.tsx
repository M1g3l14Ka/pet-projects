'use client'

import { motion } from "framer-motion"
import { ITimelineItem } from "@/types";
import Image from "next/image";

interface ProjectsPageProps {
    petTimelineData: ITimelineItem[];
}

export default function ProjectsPage({ petTimelineData }: ProjectsPageProps) {

    return (
        <div>
            <div className="bg-[#050505] w-full">
                <div className="w-auto flex justify-center flex-wrap items-center border-b p-3">
                    <h1 className="text-4xl font-bold font-mono text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-rose-600/80">Pet-Projects Area</h1>
                </div>
                <div className="relative flex flex-col m-4 gap-12 py-10">
                    
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-orange-500 to-rose-600 -translate-x-1/2 hidden md:block opacity-30" />

                    {petTimelineData.map((item, index) => (
                        <motion.div 
                            key={item.id}
                            initial={{ opacity:0, y:50 }}
                            whileInView={{ opacity:1, y:0 }}
                            viewport={{ once:true, margin:"-100px" }}
                            transition={{
                                duration:0.5,
                                delay: index * 0.2,
                                ease: "easeOut"
                            }} 
                            className={`flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                        >
                            
                            
                            <div className="relative border border-white/20 bg-[#0a0a0a] rounded-2xl p-6 md:w-[45%] m-2 flex flex-col items-center text-center">
                                <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316] hidden md:block
                                    ${index % 2 === 0 ? '-right-[8%]' : '-left-[8%]'}`} 
                                />
                                <div>
                                    {item.isInProgress && (
                                        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center">
                                            <div className="flex justify-center flex-col absolute w-full bg-black/40">
                                                <div
                                                    className="relative bg-[repeating-linear-gradient(45deg,#eab308,#eab308_10px,#000_10px,#000_20px)] text-white font-black font-mono text-2xl py-3 -rotate-12 [text-shadow:2px_2px_0px_#000] shadow-[0_0_30px_rgba(234,179,8,0.5)] uppercase tracking-widest border-y-4 border-black underline"
                                                >
                                                    <h1>Building in Progress...</h1>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className={`${item.isInProgress ? 'blur relative pointer-events-none flex justify-center items-center flex-col' : 'flex justify-center items-center flex-col'} `}>
                                    <div>
                                        <h1>{item.title}</h1>
                                        <div className="relative w-full h-48 my-4 rounded-2xl overflow-hidden border border-white/70 group cursor-pointer">
                                            <div className="absolute indent-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10"/>
                                            <Image
                                                fill
                                                src={item.img}
                                                alt={`${item.title} project screenshot`}
                                                sizes="(max-width: 768px) 100vw, 45vw"
                                                className="object-cover group-hover:scale-105 transition-all duration-700 "
                                            />
                                        </div>
                                        <h1 className="m-2">{item.subtitle}</h1>
                                        <h1 className="m-2">{item.date}</h1>
                                        <h1 className="m-2">{item.description}</h1>    
                                    </div>
                                    
                                    <div className="flex gap-4 mt-4">
                                        <a 
                                          href={item.link} 
                                          className="inline-flex items-center justify-center border w-24 h-10 rounded-2xl hover:bg-linear-150 from-orange-400 to-rose-600 transition duration-300 hover:scale-105"
                                        >
                                          Live
                                        </a>
                                        <a 
                                          href={item.code} 
                                          className="inline-flex items-center justify-center border w-24 h-10 rounded-2xl hover:bg-linear-150 from-orange-400 to-rose-600 transition duration-300 hover:scale-105"
                                        >
                                          Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
