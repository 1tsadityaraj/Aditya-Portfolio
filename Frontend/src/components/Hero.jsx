import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Mail } from 'lucide-react';
import MagneticButton from './MagneticButton';

const techStack = ["React 19", "Next.js 15", "Node.js", "Express", "MongoDB", "Python", "FastAPI", "Prisma", "Tailwind CSS", "Framer Motion", "Socket.io", "Gemini AI"];

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* very subtle ambient — not animated, not loud */}
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-slate-800/40 rounded-full blur-[160px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-slate-700/20 rounded-full blur-[140px] -z-10" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">

                {/* Profile + availability — left-aligned feels more personal */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-4 mb-10"
                >
                    {/* avatar — no spinning gradient ring */}
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                        <img
                            src="/profile.jpg"
                            alt="Aditya Raj"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextElementSibling.style.display = 'flex';
                            }}
                        />
                        <div className="hidden w-full h-full bg-slate-800 items-center justify-center text-slate-500 text-xs">AR</div>
                    </div>

                    <div>
                        <div className="flex items-center gap-2 mb-0.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                            <span className="text-emerald-400 text-sm">Available for internships</span>
                        </div>
                
                    </div>
                </motion.div>

                {/* Heading — no giant gradient text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    className="mb-6"
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight">
                        Aditya Raj
                    </h1>
                    <p className="mt-3 text-2xl md:text-3xl text-slate-400 font-light">
                        Full Stack Developer <span className="text-slate-600 hidden sm:inline">· 3rd Year B.Tech CSE</span>
                    </p>
                </motion.div>

                {/* Subtitle — plain, honest, no buzzword soup */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.12 }}
                    className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10 font-light"
                >
                    I build full-stack apps that actually ship — from SaaS platforms with
                    Stripe billing to AI-powered tools with Gemini. Currently deep into
                    multi-tenant systems and DSA.
                </motion.p>

                {/* CTAs — simpler, less flashy */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap items-center gap-4 mb-16"
                >
                    <MagneticButton
                        as="a"
                        href="#projects"
                        className="flex items-center gap-2 px-6 py-3 rounded-lg border border-white/15 text-slate-200 font-medium text-sm hover:bg-white/5 hover:border-white/25 transition-all"
                    >
                        View Projects
                        <ArrowRight size={16} />
                    </MagneticButton>

                    <MagneticButton
                        as="a"
                        href="/Adityaraj-resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-lg border border-white/15 text-slate-200 font-medium text-sm hover:bg-white/5 hover:border-white/25 transition-all"
                    >
                        Download Resume
                    </MagneticButton>

                    <div className="flex gap-3 ml-1">
                        <MagneticButton
                            as="a"
                            href="#contact"
                            className="p-2.5 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all"
                            aria-label="Contact"
                        >
                            <Mail size={18} />
                        </MagneticButton>
                        <MagneticButton
                            as="a"
                            href="https://github.com/1tsadityaraj"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all"
                            aria-label="GitHub"
                        >
                            <Github size={18} />
                        </MagneticButton>
                    </div>
                </motion.div>

                {/* Tech marquee — same logic, less decoration */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="w-full overflow-hidden relative"
                >
                    <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950 to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950 to-transparent z-10" />

                    <div className="flex items-center gap-3 border-t border-slate-800/60 pt-6">
                        <span className="text-slate-600 text-xs uppercase tracking-widest flex-shrink-0 mr-4">Stack</span>
                        <div className="flex gap-10 marquee-scroll">
                            {techStack.map((tech) => (
                                <span key={tech} className="text-slate-500 text-sm whitespace-nowrap hover:text-slate-300 transition-colors cursor-default">
                                    {tech}
                                </span>
                            ))}
                            {techStack.map((tech) => (
                                <span key={`${tech}-2`} className="text-slate-500 text-sm whitespace-nowrap" aria-hidden="true">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* scroll cue — minimal */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="Scroll down"
            >
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    className="w-5 h-8 rounded-full border border-slate-700 flex justify-center pt-1.5"
                >
                    <div className="w-1 h-1.5 rounded-full bg-slate-500" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
