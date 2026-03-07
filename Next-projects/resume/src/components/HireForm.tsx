'use client'
import { ILinkBtns } from "@/types"
import { motion } from "framer-motion";
import { BorderTrail } from "@/components/motion-primitives/border-trail";
import { sendEmail } from "@/actions/send-email";
import React, { useState } from "react";

interface HireFormProps {
    hireBtns: ILinkBtns[];
    toggleHireForm: () => void
}

export default function HireForm({ hireBtns, toggleHireForm }: HireFormProps) {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage(null);

        const formData = new FormData(e.currentTarget);
        const result = await sendEmail(formData);

        if (result.success) {
            setStatus('success');
        } else {
            setStatus('error');
            setErrorMessage(result.error || 'Something went wrong');
        }
    };
    
    
    return (
        <div
            className="fixed inset-0 z-100 flex justify-center items-center p-4 bg-black/80 backdrop-blur-sm h-screen"
            onClick={toggleHireForm}
            role="dialog"
            aria-modal="true"
            aria-labelledby="hire-form-title"
        >

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/20 rounded-3xl max-h-[85vh] flex flex-col overflow-hidden min-h-180"
                onClick={(e) => e.stopPropagation()}
                role="document"
            >
                <BorderTrail
                    style={{
                      boxShadow:
                        '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
                    }}
                    size={100}
                />
            <form onSubmit={handleSubmit} aria-label="Hire me contact form">
                <div className="
                    overflow-y-auto p-6 md:p-8 max-h-[90vh] h-full [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                    style={{
                        WebkitOverflowScrolling:"touch"
                    }}>

                    <div className="flex justify-between items-center mb-6">
                        <h1 id="hire-form-title" className="text-3xl font-bold font-mono text-white">Hire Me_</h1>
                        <button
                            type="button"
                            className="text-white/50 hover:text-white text-4xl transition-all duration-500 hover:text-[40px]"
                            onClick={toggleHireForm}
                            aria-label="Close form"
                        >
                            &times;
                        </button>
                    </div>

                    <p className="text-gray-400 font-mono mb-8 border-l-2 border-orange-500 pl-4">
                        Send me a message via email or social links.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="space-y-1">
                            <label htmlFor="name" className="text-xs font-mono text-gray-500 uppercase">Name</label>
                            <input
                                id="name"
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-orange-500 outline-none transition"
                                type="text" placeholder="Your name" name="name"
                                aria-required="false"
                            />
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="company" className="text-xs font-mono text-gray-500 uppercase">Company</label>
                            <input
                                id="company"
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-orange-500 outline-none transition"
                                type="text" placeholder="Company name" name="company"
                                aria-required="false"
                            />
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="email" className="text-xs font-mono text-gray-500 uppercase">Email</label>
                            <input
                                id="email"
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-orange-500 outline-none transition"
                                type="email" placeholder="john@doe.com" name="email"
                                aria-required="true"
                            />
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="subject" className="text-xs font-mono text-gray-500 uppercase">Subject</label>
                            <input
                                id="subject"
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-orange-500 outline-none transition"
                                type="text" placeholder="Job Offer" name="subject"
                                aria-required="false"
                            />
                        </div>
                    </div>

                    <div className="space-y-1 mb-8">
                        <label htmlFor="message" className="text-xs font-mono text-gray-500 uppercase">Message</label>
                        <textarea
                            id="message"
                            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-orange-500 outline-none transition min-h-30 resize-y [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                            placeholder="Type your project details..." name="message"
                            aria-required="true"
                        />
                    </div>

                    <button
                        disabled={status === 'loading' || status === 'success'}
                        type="submit"
                        className="w-full py-4 rounded-xl bg-linear-160 from-orange-500 to-rose-600 text-white font-bold tracking-wider hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:scale-[1.02] transition-all mb-8 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Command_'}
                    </button>

                    {status === 'error' && errorMessage && (
                        <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-mono text-center">
                            {errorMessage}
                        </div>
                    )}

                    {status === 'success' && (
                        <div className="mb-4 p-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-mono text-center">
                            Message sent successfully!
                        </div>
                    )}

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