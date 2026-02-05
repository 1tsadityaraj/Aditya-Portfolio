import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, Star } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Section Divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            {/* Enhanced Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div 
                    className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div 
                    className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]"
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -30, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:text-center max-w-2xl mx-auto"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Star className="text-blue-400 fill-blue-400" size={32} />
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Projects</span>
                        </h2>
                        <Star className="text-purple-400 fill-purple-400" size={32} />
                    </div>
                    <p className="text-slate-400 text-lg md:text-xl">
                        A showcase of my technical journey, built with a focus on learning and performance.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className="group flex flex-col bg-gradient-to-br from-slate-900/80 to-slate-800/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 relative"
                        >
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 pointer-events-none" />

                            {/* Project Image */}
                            <div className="h-52 w-full overflow-hidden relative bg-slate-800">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent group-hover:from-slate-900/80 group-hover:via-transparent transition-all duration-500 z-10" />
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.15 }}
                                    transition={{ duration: 0.6 }}
                                    loading="lazy"
                                />
                                {/* Shimmer overlay on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20">
                                    <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                                </div>
                                {project.featured && (
                                    <motion.div 
                                        className="absolute top-4 right-4 z-20"
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ delay: index * 0.1 + 0.3 }}
                                    >
                                        <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-green-300 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-green-400/40 shadow-lg">
                                            <Star size={10} className="fill-green-300" />
                                            Featured
                                        </span>
                                    </motion.div>
                                )}
                            </div>

                            <div className="p-6 flex flex-col flex-1 relative z-10">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 group-hover:text-slate-300 transition-colors">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="mt-auto space-y-5">
                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <motion.span
                                                key={tech}
                                                whileHover={{ scale: 1.1 }}
                                                className="px-3 py-1 text-xs font-medium rounded-lg bg-white/5 text-slate-300 border border-white/10 group-hover:bg-gradient-to-r group-hover:from-blue-500/20 group-hover:to-purple-500/20 group-hover:text-white group-hover:border-blue-400/30 transition-all"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                        {project.demo ? (
                                            <motion.a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-sm font-semibold shadow-lg shadow-blue-500/30 transition-all group/btn"
                                            >
                                                <span>Live Demo</span>
                                                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                            </motion.a>
                                        ) : (
                                            <div className="flex-1" />
                                        )}

                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`flex items-center justify-center gap-2 py-3 px-5 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-sm font-medium transition-all ${!project.demo ? 'w-full' : ''}`}
                                        >
                                            <Github size={16} />
                                            <span>Source</span>
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
