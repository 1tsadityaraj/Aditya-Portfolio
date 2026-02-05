import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Star } from 'lucide-react';

const Hero = () => {
    // Floating particles animation
    const particles = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
    }));

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Enhanced Background Gradients with Animation */}
            <motion.div 
                className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[128px] -z-10"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div 
                className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[128px] -z-10"
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -40, 0],
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[150px] -z-10 -translate-x-1/2 -translate-y-1/2" />

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
                        style={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 0.8, 0.3],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: particle.duration,
                            delay: particle.delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border border-blue-500/40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-blue-300 text-sm font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all cursor-default"
                >
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                        <Star size={14} className="text-blue-400 fill-blue-400" />
                    </motion.div>
                    Available for Hire
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight"
                >
                    <span className="block text-white mb-2">Hi, I'm</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 via-pink-500 to-blue-400 bg-[length:200%_auto] animate-[gradient_3s_ease_infinite]">
                        Aditya Raj
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-2xl lg:text-3xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
                >
                    <span className="text-white font-medium">MERN Stack Developer</span>
                    <span className="mx-3 text-slate-500">|</span>
                    <span>Building practical web applications and learning backend & AI fundamentals</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-5 justify-center items-center"
                >
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold transition-all shadow-xl shadow-blue-500/30 flex items-center gap-2 overflow-hidden"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        <span className="relative z-10">View Projects</span>
                        <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                    </motion.a>

                    <motion.a
                        href="https://github.com/1tsadityaraj"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group px-10 py-4 rounded-full glass hover:bg-white/15 hover:border-white/20 text-white font-semibold transition-all shadow-lg flex items-center gap-2 backdrop-blur-md"
                    >
                        <Github size={20} className="group-hover:rotate-12 transition-transform" />
                        <span>GitHub</span>
                    </motion.a>
                </motion.div>

                {/* Enhanced Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer group"
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-6 h-10 rounded-full border-2 border-slate-600 group-hover:border-blue-400 transition-colors flex justify-center p-2"
                    >
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-blue-300 transition-colors"
                        />
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-xs text-slate-500 mt-2 text-center whitespace-nowrap"
                    >
                        Scroll to explore
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
