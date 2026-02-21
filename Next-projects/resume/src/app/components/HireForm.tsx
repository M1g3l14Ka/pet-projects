'use client'
import { ILinkBtns } from "@/types"
import { motion } from "framer-motion";
import { BorderTrail } from "../../../components/motion-primitives/border-trail";
import { sendEmail } from "@/actions/send-email";
import React, { useState } from "react";

interface HireFormProps {
    hireBtns: ILinkBtns[];
    toggleHireForm: () => void
}

export default function HireForm({ hireBtns, toggleHireForm }: HireFormProps) {
    
    const [status, setStatus] = useState<'idle' | 'loading' | 'succes' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.currentTarget);
        const result = await sendEmail(formData);

        if(result.succes) {
            setStatus('succes');
        } else {
            setStatus('error');
        }
    };
    
    
    return (
        <div 
            className="fixed inset-0 z-100 flex justify-center items-center p-4 bg-black/80 backdrop-blur-sm h-screen"
            onClick={toggleHireForm}    
        >
            
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/20 rounded-3xl max-h-[85vh] flex flex-col overflow-hidden min-h-180"
                onClick={(e) => e.stopPropagation()}
            >
                <BorderTrail
                    style={{
                      boxShadow:
                        '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
                    }}
                    size={100}
                />
            <form onSubmit={handleSubmit}>
                <div className="
                    overflow-y-auto p-6 md:p-8 max-h-[90vh] h-full [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                    style={{
                        WebkitOverflowScrolling:"touch"
                    }}>
                    
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold font-mono text-white">Hire Me_</h1>
                        <button
                            className="text-white/50 hover:text-white text-4xl transition-all duration-500 hover:text-[40px]"
                            onClick={toggleHireForm}
                        >
                            &times;
                        </button>
                    </div>

                    <p className="text-gray-400 font-mono mb-8 border-l-2 border-orange-500 pl-4">
                        Send me a message via email or social links.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="space-y-1">
                            <label className="text-xs font-mono text-gray-500 uppercase">Name</label>
                            <input 
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-orange-500 outline-none transition"
                                type="text" placeholder="Your name" name="name"
                            /> 
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-mono text-gray-500 uppercase">Company</label>
                            <input 
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-orange-500 outline-none transition"
                                type="text" placeholder="Company name" name="company"
                            /> 
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-mono text-gray-500 uppercase">Email</label>
                            <input 
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-orange-500 outline-none transition"
                                type="email" placeholder="john@doe.com" name="email"
                            /> 
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-mono text-gray-500 uppercase">Subject</label>
                            <input 
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-orange-500 outline-none transition"
                                type="text" placeholder="Job Offer" name="subject"
                            /> 
                        </div>
                    </div>

                    <div className="space-y-1 mb-8">
                        <label className="text-xs font-mono text-gray-500 uppercase">Message</label>
                        <textarea 
                            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-orange-500 outline-none transition min-h-30 resize-y [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                            placeholder="Type your project details..." name="message"
                        />
                    </div>

                    <button 
                        disabled={status === 'loading' || status==='succes'}
                        className="w-full py-4 rounded-xl bg-linear-160 from-orange-500 to-rose-600 text-white font-bold tracking-wider hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:scale-[1.02] transition-all mb-8"
                    >
                        {status === 'loading' ? 'Sending...' : status === 'succes' ? 'Sent!' : 'Send Command_'}
                    </button>

                    <div className="flex flex-wrap justify-center gap-3 pt-6 border-t border-white/10 pb-2">
                        {hireBtns.map((btn) => (
                            <a 
                                key={btn.id}
                                href={btn.url}
                                target="_blank"
                                className="px-4 py-2 rounded-lg border border-white/10 text-xs font-mono text-gray-400 hover:text-white hover:border-orange-500 hover:bg-white/5 transition-all"
                            >
                                {btn.title}
                            </a>
                        ))}
                    </div>
                </div>
            </form>
            </motion.div>
        </div>
    )
}