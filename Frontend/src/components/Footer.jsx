import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 bg-slate-950 border-t border-white/10 relative overflow-hidden">
            {/* Subtle background effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-purple-500/5 to-transparent pointer-events-none" />
            
            {/* Decorative line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <motion.p 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-slate-400 text-sm md:text-base"
                    >
                        © {new Date().getFullYear()} <span className="text-white font-semibold">Aditya Raj</span>. All rights reserved.
                    </motion.p>
                    <motion.p 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-slate-500 text-sm md:text-base flex items-center gap-2"
                    >
                        <span>Built with</span>
                        <motion.span
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        >
                            <Heart size={16} className="text-red-500 fill-red-500" />
                        </motion.span>
                        <span>using</span>
                        <Code2 size={16} className="text-blue-400" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-semibold">
                            React & Tailwind CSS
                        </span>
                    </motion.p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
