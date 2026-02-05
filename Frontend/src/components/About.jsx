import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Brain, Target, Rocket } from 'lucide-react';

const About = () => {
    const stats = [
        { icon: <Code size={28} />, label: 'Frontend', value: 'React & Tailwind', color: 'from-blue-500/20 to-cyan-500/20', iconColor: 'text-blue-400' },
        { icon: <Server size={28} />, label: 'Backend', value: 'Node.js & Express', color: 'from-purple-500/20 to-pink-500/20', iconColor: 'text-purple-400' },
        { icon: <Database size={28} />, label: 'Database', value: 'MongoDB', color: 'from-emerald-500/20 to-teal-500/20', iconColor: 'text-emerald-400' },
        { icon: <Brain size={28} />, label: 'Learning', value: 'DSA & AI Basics', color: 'from-orange-500/20 to-amber-500/20', iconColor: 'text-orange-400' },
    ];

    const highlights = [
        { icon: <Target size={20} />, title: 'Focus', desc: 'Web Development', color: 'border-blue-500' },
        { icon: <Rocket size={20} />, title: 'Goal', desc: 'Software Engineer Role', color: 'border-purple-500' },
    ];

    return (
        <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Section Divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-white"
                    >
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
                    </motion.h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-16 items-center"
                >
                    {/* Left Column: Text */}
                    <div className="space-y-6">
                        <motion.p 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-300 text-lg md:text-xl leading-relaxed"
                        >
                            I am a passionate <span className="text-blue-400 font-semibold">MERN stack developer</span> with a strong focus on building clean, functional web applications. My journey started with a curiosity for how things work on the web, which led me to dive deep into <span className="text-purple-400 font-semibold">React</span> for frontend and <span className="text-emerald-400 font-semibold">Node.js</span> for backend development.
                        </motion.p>
                        <motion.p 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-300 text-lg md:text-xl leading-relaxed"
                        >
                            Currently, I am refining my problem-solving skills by practicing <span className="text-orange-400 font-semibold">Data Structures & Algorithms</span> in Java and Python. I'm also actively exploring <span className="text-pink-400 font-semibold">Generative AI and LLMs</span> to understand how to integrate intelligent features into my projects. I am looking for internships or entry-level roles to kickstart my career.
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-6 pt-4"
                        >
                            {highlights.map((highlight, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05, x: 5 }}
                                    className={`pl-5 border-l-4 ${highlight.color} bg-gradient-to-r from-white/5 to-transparent p-4 rounded-r-lg backdrop-blur-sm`}
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="text-blue-400">{highlight.icon}</div>
                                        <h3 className="text-xl font-bold text-white">{highlight.title}</h3>
                                    </div>
                                    <p className="text-slate-400 ml-8">{highlight.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Column: Cards/Visuals */}
                    <div className="grid grid-cols-2 gap-5">
                        {stats.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5, rotateY: 5 }}
                                className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/40 border border-white/10 hover:border-white/20 transition-all backdrop-blur-sm overflow-hidden cursor-default"
                            >
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                
                                <div className="relative z-10 flex flex-col items-center text-center gap-4">
                                    <motion.div 
                                        className={`p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 group-hover:scale-110 transition-transform ${item.iconColor}`}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        {item.icon}
                                    </motion.div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg mb-1 group-hover:text-blue-200 transition-colors">
                                            {item.label}
                                        </h4>
                                        <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                                            {item.value}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
