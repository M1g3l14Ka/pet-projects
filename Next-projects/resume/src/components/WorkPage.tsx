'use client'

import { motion } from "framer-motion"
import { ITimelineItem } from "@/types"


interface IWorkPage {
    workTimelineData: ITimelineItem[];
}

export default function WorkPage({ workTimelineData }: IWorkPage) {

    return (
        <div className="">
            <div className="bg-[#050505] w-full">
                <div className="w-auto flex justify-center flex-wrap items-center border-b p-3">
                    <h1 className="text-4xl font-bold font-mono text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-rose-600/80">Work Area</h1>
                </div>
                <div className="relative flex flex-col m-4 gap-12 py-10">
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-orange-500 to-rose-600 -translate-x-1/2 hidden md:block opacity-30" />

                    {workTimelineData.map((item, index) => (
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
                            <div className="relative border border-white/20 bg-[#0a0a0a] rounded-2xl p-6 md:w-[45%] flex flex-col items-center text-center">

                                <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316] hidden md:block
                                    ${index % 2 === 0 ? '-right-[9%]' : '-left-[9%]'}`} 
                                />
                                <div>
                                    <div>

                                    </div>
                                    <div>
                                        <h1>{item.title}</h1>
                                        <h1>{item.subtitle}</h1>
                                        <h1>{item.date}</h1>
                                        <h1>{item.description}</h1>    
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