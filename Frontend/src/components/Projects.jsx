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
        <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden" aria-label="Featured projects">
            {/* Section Divider — decorative */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />
            
            {/* Background Glow — decorative */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true">
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
                        <Star className="text-blue-400 fill-blue-400" size={32} aria-hidden="true" />
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Projects</span>
                        </h2>
                        <Star className="text-purple-400 fill-purple-400" size={32} aria-hidden="true" />
                    </div>
                    <p className="text-slate-400 text-lg md:text-xl">
                        A showcase of my technical journey, built with a focus on learning and performance.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" aria-hidden="true" />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(400px,_auto)] gap-6 lg:gap-8"
                    role="list"
                    aria-label="Project cards"
                >
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            variants={itemVariants}
                            className={`group flex flex-col bg-[#111827]/70 backdrop-blur-lg border border-white/5 hover:border-cyan-500/30 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.3)] relative ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''} ${(index === 3 && projects.length > 3) ? 'lg:col-span-2' : ''}`}
                            role="listitem"
                        >
                            {/* Gradient overlay — decorative */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 pointer-events-none" aria-hidden="true" />

                            {/* Project Image — with explicit dimensions to prevent CLS */}
                            <div className={`${index === 0 ? 'h-64 md:h-80' : 'h-52'} w-full overflow-hidden relative bg-slate-800`}>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent group-hover:from-slate-900/80 group-hover:via-transparent transition-all duration-500 z-10" aria-hidden="true" />
                                <img
                                    src={project.image}
                                    alt={`Screenshot of ${project.title} — ${project.description.substring(0, 60)}...`}
                                    className="w-full h-full object-cover object-top group-hover:scale-[1.08] transition-transform duration-700"
                                    loading={index < 2 ? "eager" : "lazy"}
                                    decoding={index < 2 ? "sync" : "async"}
                                    width="600"
                                    height="340"
                                    fetchPriority={index === 0 ? "high" : undefined}
                                />
                                {/* Shimmer overlay on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20" aria-hidden="true">
                                    <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                                </div>
                                {project.featured && (
                                    <div className="absolute top-4 right-4 z-20">
                                        <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-green-300 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-green-400/40 shadow-lg">
                                            <Star size={10} className="fill-green-300" aria-hidden="true" />
                                            Featured
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="p-6 flex flex-col flex-1 relative z-10">
                                <div className="mb-4 flex-1">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 group-hover:text-slate-300 transition-colors">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="mt-auto space-y-5">
                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2" aria-label={`Technologies: ${project.tech.join(', ')}`}>
                                        {project.tech.slice(0, 4).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase rounded-md bg-white/5 text-slate-300 border border-white/10 group-hover:bg-cyan-500/10 group-hover:text-cyan-300 group-hover:border-cyan-500/20 transition-all"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.tech.length > 4 && (
                                            <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase rounded-md bg-white/5 text-slate-400 border border-white/10 group-hover:border-white/20" aria-label={`and ${project.tech.length - 4} more technologies`}>
                                                +{project.tech.length - 4}
                                            </span>
                                        )}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex items-center gap-3 pt-4 border-t border-white/10 mt-auto">
                                        {project.demo ? (
                                            <motion.a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-600 hover:from-cyan-500 hover:via-blue-400 hover:to-purple-500 text-white text-sm font-bold shadow-lg shadow-cyan-500/25 transition-all group/btn relative overflow-hidden ring-1 ring-white/10 hover:ring-white/30"
                                                aria-label={`View live demo of ${project.title} (opens in new tab)`}
                                            >
                                                {/* Shimmer Sweep — decorative */}
                                                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmerSweep_3s_infinite]" aria-hidden="true" />
                                                
                                                <ExternalLink size={14} className="relative z-10" aria-hidden="true" />
                                                <span className="relative z-10">Live Demo</span>
                                                <ArrowRight size={14} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
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
                                            aria-label={`View source code of ${project.title} on GitHub (opens in new tab)`}
                                        >
                                            <Github size={16} aria-hidden="true" />
                                            <span>Source</span>
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
