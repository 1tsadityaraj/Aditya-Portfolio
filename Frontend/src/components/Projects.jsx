import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
    const featured = projects.filter(p => p.featured);
    const rest = projects.filter(p => !p.featured);

    return (
        <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">

                {/* Heading — no stars, no gradient title */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5 }}
                    className="mb-14"
                >
                    <p className="text-xs tracking-[0.18em] uppercase text-slate-500 mb-3">/ work</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Projects</h2>
                    <p className="mt-3 text-slate-400 text-lg max-w-xl">
                        Things I've built — some to solve a real problem, some just to see if I could.
                    </p>
                </motion.div>

                {/* Featured — large cards */}
                <div className="space-y-6 mb-6">
                    {featured.map((project, index) => (
                        <FeaturedCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* Rest — compact 3-col grid */}
                {rest.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        {rest.map((project, index) => (
                            <SmallCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

const FeaturedCard = ({ project, index }) => {
    const reversed = index % 2 !== 0;

    return (
    <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="group grid md:grid-cols-2 gap-0 rounded-2xl border border-white/7 overflow-hidden bg-slate-900/50 hover:border-white/12 transition-colors duration-300"
    >
        {/* Image */}
        <div className={`relative h-56 md:h-auto overflow-hidden bg-slate-800 ${reversed ? 'md:order-2' : ''}`}>
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500"
                loading={index === 0 ? 'eager' : 'lazy'}
            />
            <div className={`absolute inset-0 md:block hidden ${reversed ? 'bg-gradient-to-l from-transparent to-slate-900/60' : 'bg-gradient-to-r from-transparent to-slate-900/60'}`} />
        </div>

        {/* Content */}
        <div className={`p-7 flex flex-col justify-between ${reversed ? 'md:order-1' : ''}`}>
            <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-slate-100 transition-colors">
                    {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-4">
                    {project.description}
                </p>
            </div>

            <div className="mt-6 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 5).map(tech => (
                        <span key={tech} className="px-2 py-0.5 text-[11px] uppercase tracking-wide rounded bg-white/5 text-slate-400 border border-white/8">
                            {tech}
                        </span>
                    ))}
                    {project.tech.length > 5 && (
                        <span className="px-2 py-0.5 text-[11px] uppercase tracking-wide rounded bg-white/5 text-slate-500 border border-white/8">
                            +{project.tech.length - 5}
                        </span>
                    )}
                </div>

                <div className="flex gap-3 pt-1">
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm text-white font-medium hover:text-slate-300 transition-colors"
                        >
                            <ExternalLink size={14} />
                            Live Demo
                        </a>
                    )}
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-200 transition-colors"
                    >
                        <Github size={14} />
                        Source
                    </a>
                </div>
            </div>
        </div>
    </motion.article>
    );
};

const SmallCard = ({ project, index }) => (
    <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: index * 0.07 }}
        className="group flex flex-col rounded-xl border border-white/7 overflow-hidden bg-slate-900/40 hover:border-white/12 transition-colors duration-300"
    >
        <div className="h-40 overflow-hidden bg-slate-800">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500"
                loading="lazy"
            />
        </div>

        <div className="p-5 flex flex-col flex-1">
            <h3 className="text-base font-semibold text-white mb-1.5">{project.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 flex-1">
                {project.description}
            </p>

            <div className="mt-4 space-y-3">
                <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map(tech => (
                        <span key={tech} className="px-2 py-0.5 text-[10px] uppercase tracking-wide rounded bg-white/5 text-slate-500 border border-white/8">
                            {tech}
                        </span>
                    ))}
                    {project.tech.length > 3 && (
                        <span className="px-2 py-0.5 text-[10px] uppercase tracking-wide rounded bg-white/5 text-slate-600 border border-white/8">
                            +{project.tech.length - 3}
                        </span>
                    )}
                </div>

                <div className="flex gap-4 pt-1 border-t border-white/5">
                    {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs text-slate-300 hover:text-white transition-colors">
                            <ExternalLink size={12} /> Demo
                        </a>
                    )}
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-300 transition-colors">
                        <Github size={12} /> Source
                    </a>
                </div>
            </div>
        </div>
    </motion.article>
);

export default Projects;
