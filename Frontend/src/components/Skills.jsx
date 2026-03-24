import React from 'react';
import { motion } from 'framer-motion';

const categories = [
    {
        id: 'core',
        title: 'Core Stack',
        note: 'Where I spend most of my time',
        skills: ['Java (DSA)', 'Python', 'JavaScript ES6+'],
    },
    {
        id: 'frontend',
        title: 'Frontend',
        note: 'Building what users actually see',
        skills: ['React.js', 'Tailwind CSS', 'HTML5/CSS3', 'Framer Motion'],
    },
    {
        id: 'backend',
        title: 'Backend',
        note: 'APIs, auth, and making things scale',
        skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Prisma', 'PostgreSQL'],
    },
    {
        id: 'ai',
        title: 'AI & Learning',
        note: 'Currently digging deeper into this',
        skills: ['Python for AI', 'NumPy & Pandas', 'ML Basics', 'LLM / Gemini API'],
    },
    {
        id: 'tools',
        title: 'Tools',
        note: 'Daily workflow',
        skills: ['Git & GitHub', 'VS Code', 'Postman', 'Vercel', 'Linux terminal'],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5 }}
                    className="mb-14"
                >
                    <p className="text-xs tracking-[0.18em] uppercase text-slate-500 mb-3">/ skills</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">What I work with</h2>
                    <p className="mt-3 text-slate-400 text-lg max-w-xl">
                        Not a comprehensive list — just what I actually use day to day.
                    </p>
                </motion.div>

                {/* Categories — table-style rows, clean and readable */}
                <div className="space-y-0 divide-y divide-slate-800/60">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: index * 0.07 }}
                            className="group grid md:grid-cols-[200px_1fr_auto] gap-4 md:gap-8 py-6 items-start hover:bg-white/[0.015] -mx-3 px-3 rounded-lg transition-colors duration-200"
                        >
                            {/* Category name + note */}
                            <div>
                                <h3 className="text-sm font-semibold text-white">{cat.title}</h3>
                                <p className="text-xs text-slate-600 mt-0.5 leading-snug">{cat.note}</p>
                            </div>

                            {/* Skill tags */}
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-xs rounded-md bg-slate-800/70 text-slate-300 border border-slate-700/50 group-hover:border-slate-600/60 group-hover:text-slate-200 transition-colors duration-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Honest footnote */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-10 text-slate-600 text-sm border-t border-slate-800/60 pt-6"
                >
                    Still learning. Always will be. That's kind of the point.
                </motion.p>
            </div>
        </section>
    );
};

export default Skills;
