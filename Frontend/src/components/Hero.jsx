import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Mail, Star } from 'lucide-react';
import MagneticButton from './MagneticButton';

const Hero = () => {
    // Floating particles animation
    const particles = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
    }));

    const techStack = ["React 19", "Next.js 15", "Node.js", "Express", "MongoDB", "Python", "FastAPI", "Prisma", "Tailwind CSS", "Framer Motion", "Socket.io", "Gemini AI"];

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20" aria-label="Hero introduction">
            {/* Enhanced Background Gradients — decorative */}
            <div aria-hidden="true">
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
            </div>

            {/* Floating Particles — decorative */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
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

            <div className="max-w-7xl mx-auto px-6 text-center relative z-10 pt-10">
                {/* Professional Profile Avatar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                    className="relative w-36 h-36 mx-auto mb-6 group"
                >
                    {/* Animated spinning gradient border */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-[spin_4s_linear_infinite] group-hover:animate-[spin_2s_linear_infinite]" aria-hidden="true" />
                    {/* Inner hollow background */}
                    <div className="absolute inset-[3px] bg-slate-950 rounded-full" aria-hidden="true" />
                    
                    {/* Profile Image (fallback to fallback div if not found) */}
                    <img 
                        src="/profile.jpg" 
                        alt="Aditya Raj" 
                        className="absolute inset-[6px] w-[calc(100%-12px)] h-[calc(100%-12px)] rounded-full object-cover transition-all duration-500 group-hover:scale-105 z-10 contrast-125 saturate-[1.1] brightness-105 sepia-[.15] hue-rotate-[-5deg]"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextElementSibling.style.display = 'flex';
                        }}
                    />
                    
                    {/* Fallback if image not yet placed */}
                    <div className="hidden absolute inset-[6px] w-[calc(100%-12px)] h-[calc(100%-12px)] rounded-full bg-slate-800 flex-col items-center justify-center text-slate-400 text-sm font-medium z-10 text-center px-2">
                        <span>Drop<br/>profile.jpg<br/>here</span>
                    </div>

                    {/* Online animated indicator */}
                    <div className="absolute bottom-2 right-3 w-5 h-5 bg-green-500 rounded-full border-[3px] border-slate-950 shadow-[0_0_12px_rgba(34,197,94,0.6)] z-20" title="Available for work">
                        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border border-blue-500/40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-blue-300 text-sm font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all cursor-default"
                    role="status"
                    aria-label="Currently available for hire"
                >
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        aria-hidden="true"
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
                    <span className="text-white font-medium">Full Stack Developer</span>
                    <span className="mx-3 text-slate-500" aria-hidden="true">•</span>
                    <span>I ship production-grade SaaS platforms with RBAC, real-time systems & AI integrations</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row flex-wrap gap-5 justify-center items-center mb-20"
                    role="group"
                    aria-label="Primary actions"
                >
                    <MagneticButton
                        as="a"
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold transition-all shadow-xl shadow-blue-500/30 flex items-center gap-2 overflow-hidden min-w-[180px]"
                        aria-label="View my projects"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" aria-hidden="true" />
                        <span className="relative z-10">View Projects</span>
                        <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </MagneticButton>

                    <MagneticButton
                        as="a"
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group px-8 py-4 rounded-full glass hover:bg-white/10 hover:border-white/20 text-white font-semibold transition-all shadow-lg flex items-center gap-2 backdrop-blur-md min-w-[180px] border border-white/10"
                        aria-label="Download my resume (opens in new tab)"
                    >
                        <span className="relative z-10">Download Resume</span>
                        <div className="relative w-4 h-4" aria-hidden="true">
                            <motion.div
                                animate={{ y: [0, 3, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <ArrowRight size={18} className="rotate-90" />
                            </motion.div>
                        </div>
                    </MagneticButton>

                    <div className="flex gap-4 sm:ml-2">
                        <MagneticButton
                            as="a"
                            href="#contact"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="group p-4 rounded-full glass hover:bg-blue-500/20 hover:border-blue-500/30 text-white transition-all shadow-lg flex items-center justify-center backdrop-blur-md border border-white/10"
                            aria-label="Contact me"
                        >
                            <Mail size={20} className="group-hover:scale-110 transition-transform" aria-hidden="true" />
                        </MagneticButton>

                        <MagneticButton
                            as="a"
                            href="https://github.com/1tsadityaraj"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="group p-4 rounded-full glass hover:bg-purple-500/20 hover:border-purple-500/30 text-white transition-all shadow-lg flex items-center justify-center backdrop-blur-md border border-white/10"
                            aria-label="Visit my GitHub profile (opens in new tab)"
                        >
                            <Github size={20} className="group-hover:rotate-12 transition-transform" aria-hidden="true" />
                        </MagneticButton>
                    </div>
                </motion.div>

                {/* Tech Stack Marquee */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="w-full max-w-4xl mx-auto overflow-hidden relative"
                    aria-label="Technology expertise"
                    role="marquee"
                >
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10" aria-hidden="true" />
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10" aria-hidden="true" />
                    
                    <div className="flex items-center gap-4 whitespace-nowrap bg-white/5 backdrop-blur-sm py-4 px-8 rounded-2xl border border-white/5">
                        <span className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mr-8 flex-shrink-0">Tech Expertise</span>
                        <div className="flex gap-12 marquee-scroll">
                            {techStack.map((tech) => (
                                <span key={tech} className="text-slate-400 text-sm font-medium hover:text-blue-400 transition-colors cursor-default">
                                    {tech}
                                </span>
                            ))}
                            {/* Duplicate for seamless loop */}
                            {techStack.map((tech) => (
                                <span key={`${tech}-2`} className="text-slate-400 text-sm font-medium hover:text-blue-400 transition-colors cursor-default" aria-hidden="true">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer group"
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    role="button"
                    tabIndex={0}
                    aria-label="Scroll down to About section"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-6 h-10 rounded-full border-2 border-slate-600 group-hover:border-blue-400 transition-colors flex justify-center p-2"
                        aria-hidden="true"
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
                        aria-hidden="true"
                    >
                        Scroll to explore
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
