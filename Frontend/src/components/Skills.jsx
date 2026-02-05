import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Cpu, Wrench } from 'lucide-react';

const Skills = () => {
    const categories = [
        {
            id: 'core',
            title: "Core Stack",
            icon: <Code2 size={24} className="text-blue-400" />,
            skills: ["Java (DSA)", "Python", "JavaScript ES6+"],
            description: "Strong foundation in object-oriented programming and algorithmic problem solving.",
            color: "from-blue-500/20 to-cyan-500/20"
        },
        {
            id: 'frontend',
            title: "Frontend",
            icon: <Layout size={24} className="text-purple-400" />,
            skills: ["React.js", "Tailwind CSS", "HTML5/CSS3", "Framer Motion"],
            description: "Building responsive, accessible, and performant user interfaces.",
            color: "from-purple-500/20 to-pink-500/20"
        },
        {
            id: 'backend',
            title: "Backend",
            icon: <Database size={24} className="text-emerald-400" />,
            skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
            description: "Designing scalable server-side architecture and database schemas.",
            color: "from-emerald-500/20 to-teal-500/20"
        },
        {
            id: 'ai',
            title: "AI & Learning",
            icon: <Cpu size={24} className="text-orange-400" />,
            skills: ["Python for AI", "NumPy & Pandas", "ML Basics", "LLM Concepts"],
            description: "Actively exploring artificial intelligence and machine learning technologies.",
            color: "from-orange-500/20 to-amber-500/20",
            highlight: true
        },
        {
            id: 'tools',
            title: "Tools & DevOps",
            icon: <Wrench size={24} className="text-slate-400" />,
            skills: ["Git & GitHub", "VS Code", "Postman", "Vercel"],
            description: "Proficient with modern development workflows and deployment platforms.",
            color: "from-slate-500/20 to-gray-500/20"
        }
    ];

    return (
        <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Section Divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            {/* Background Blooms */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:text-center max-w-2xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Expertise</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4" />
                    <p className="text-slate-400 text-lg md:text-xl">
                        A comprehensive overview of my technical skills and current learning focus.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category, index) => (
                        <SkillCard key={category.id} category={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const SkillCard = ({ category, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className={`group p-6 rounded-2xl border border-white/5 bg-slate-900/50 backdrop-blur-sm hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden`}
    >
        {/* Hover Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

        <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                    {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
                    {category.title}
                </h3>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 min-h-[40px]">
                {category.description}
            </p>

            <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                    <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 text-slate-300 border border-white/5 group-hover:bg-white/10 group-hover:text-white group-hover:border-white/20 transition-all cursor-default"
                    >
                        {skill}
                    </motion.span>
                ))}
            </div>
        </div>
    </motion.div>
);

export default Skills;
