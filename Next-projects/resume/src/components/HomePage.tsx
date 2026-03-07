'use client'

import Link from "next/link"
import Image from "next/image"
import { IHeaderTitleBtns, IHeaderTiles, ILinkBtns} from "@/types"
import { BorderTrail } from "@/components/motion-primitives/border-trail"
import { motion, useScroll, useTransform } from "framer-motion"
import { useMemo, useState, useSyncExternalStore } from "react"
import HireForm from "@/components/HireForm"

interface HomePageProps {
    headerTitleBtns: IHeaderTitleBtns[];
    headerTiles: IHeaderTiles[];
    hireBtns: ILinkBtns[];
}

export default function HomePage({ headerTitleBtns, headerTiles, hireBtns } : HomePageProps) {
    const [isHireOpen, setIsHireOpen] = useState(false)

    // Use useSyncExternalStore to detect SSR vs client
    const mounted = useSyncExternalStore(
        () => () => {}, // No-op unsubscribe
        () => true, // Get client value
        () => false // Get server value
    );

    const { scrollY } = useScroll();
    
    const yLeft = useTransform(scrollY, [0, 1000], [-250, 150])
    const yRight = useTransform(scrollY, [0, 1000], [-150, -150])

    const shuffelColumns = useMemo(() => {
        return [...Array(16)].map(() => {
            return [...headerTiles, ...headerTiles, ...headerTiles, ...headerTiles, ...headerTiles, ...headerTiles].sort(() => Math.random() - 0.5)
        })
    }, [headerTiles])

    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    const titleVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
    }

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col p-2 bg-[#050505] relative overflow-hidden min-h-screen"
        >
            <motion.div
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                className="relative z-0"
            >
                <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-4 lg:grid-cols-12 rotate-[-15deg] scale-125 p-0 m-0 opacity-30 pointer-events-none w-[120vw] ">
                    {
                        mounted ? (
                            shuffelColumns.map((columnItems, colIndex) => (
                                <motion.div
                                    key={colIndex}
                                    className="flex flex-col gap-6 will-change-transform"
                                    style={{
                                        y: colIndex % 2 === 0 ? yLeft : yRight
                                    }}
                                >
                                    {columnItems.map((tile, inedx) => (
                                        <div key={`${colIndex}-${inedx}`} className="flex justify-center items-center">
                                            <Image
                                                width={60}
                                                height={60}
                                                alt={tile.alt}
                                                src={tile.src}
                                                sizes="60px"
                                                className="brightness-75 blur-[1px]"
                                            />
                                        </div>
                                    ))}
                                </motion.div>
                            ))
                        ) : (
                            null
                        )
                    }
                </div>
            </motion.div>

            <div className="flex flex-col p-2 z-10 w-auto h-full">
                <div className="p-4 md:m-6 flex flex-row justify-between items-center w-auto">
                    <div>  
                        <Link href="#">
                            <h1 className="text-2xl md:text-4xl font-mono text-gray-600">Michael<span className="text-4xl font-bold text-purple-500">.</span></h1>
                        </Link> 
                    </div>

                    <button
                        type="button"
                        className="font-mono font-bold text-lg md:text-2xl underline rounded-2xl px-4 py-1 md:w-32 hover:bg-linear-120 from-orange-400 to-rose-600/80 hover:scale-110 hover:border-none transition-all"
                        onClick={() => setIsHireOpen(true)}
                    >
                        Hire Me
                    </button>

                    {
                        isHireOpen && (
                            <div className="fixed inset-0 z-10000 flex items-center justify-center bg-[#050505] backdrop-blur-md p-4">
                                <div className="relative flex flex-col w-full max-w-2xl">
                                    <HireForm 
                                        hireBtns={hireBtns}
                                        toggleHireForm = {() => setIsHireOpen(false)}/>
                                </div>
                            </div>
                        )
                    }
                </div>

                <div className="flex-1 flex justify-center flex-col items-center md:m-24 w-auto">
                    <div>
                        <div className='relative w-48 h-48 md:w-64 md:h-64 rounded-[50%]'>
                            <Image
                                fill
                                alt="Michael K. profile photo"
                                src='/profImg.png'
                                sizes="(max-width: 768px) 192px, 256px"
                                className="rounded-[50%] object-cover"
                            />
                            <BorderTrail
                                style={{
                                  boxShadow:
                                    '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
                                }}
                                size={100}
                            />
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:m-2 p-2 w-auto z-1000 items-center">
                        <div className="text-5xl sm:text-7xl md:text-9xl lg:text-[12rem] flex justify-center items-center z-0 font-mono bg-clip-text text-transparent bg-linear-to-r from-orange-400 to-rose-600/70 w-auto leading-none text-center">
                            DEVELOPER
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-3 w-auto mt-6">
                            {
                                headerTitleBtns.map((btn:IHeaderTitleBtns) => {
                                    return (
                                        <Link href={`#${btn.id}`} key={btn.id}>
                                            <div 
                                                className="flex justify-center items-center rounded-2xl border w-28 md:w-32 h-8 hover:bg-linear-120 from-orange-400 to-rose-600 transition ease-in-out duration-300 bg-[#131212] hover:scale-110 cursor-pointer hover:border-none"
                                            >
                                                    <button
                                                        className="cursor-pointer text-xs md:text-base">
                                                        {btn.label}
                                                    </button>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}