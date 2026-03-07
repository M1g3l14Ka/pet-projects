'use client'

import { motion } from "framer-motion";

export default function FooterPage() {
    const currentYear = new Date().getFullYear();
    
    return (
        <motion.div
            initial={{opacity:0, y:-30}}
            animate={{opacity:1, y:0}}
            transition={{duration:1}}
            className="flex justify-center items-center flex-wrap m-2 p-2 mt-96 bg-[#050505]"
        >
            <div className="bg-[#050505]">
                <h1
                    className="text-lg font-mono text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-rose-600/80"
                >
                    © {currentYear} Kasion M.A. All materials on this website are the property of the Kasion M.A. All rights reserved.
                </h1>
            </div>
        </motion.div>
    )
}