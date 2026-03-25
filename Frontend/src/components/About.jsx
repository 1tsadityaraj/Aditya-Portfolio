import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const stack = [
        { label: 'Frontend', tech: 'React · Tailwind' },
        { label: 'Backend', tech: 'Node.js · Express' },
        { label: 'Database', tech: 'MongoDB' },
        { label: 'Currently into', tech: 'DSA · AI Integration' },
    ];

    return (
        <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Section Divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Subtle background glow — muted, not SaaS-loud */}
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-slate-800/30 rounded-full blur-[160px] -z-10" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-14"
                >
                    <p className="text-xs tracking-[0.18em] uppercase text-slate-500 mb-3">/ about</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">About</h2>
                </motion.div>

                <div className="max-w-2xl">
                    {/* Body copy — casual, first-person, honest */}
                    <div className="space-y-6 mb-10">
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="text-slate-300 text-lg leading-relaxed"
                        >
                            I didn't start with a roadmap. I just kept building things until they got good enough
                            to ship. Most of my projects began as{' '}
                            <strong className="text-white">"what if I tried to make this work"</strong> — and
                            somewhere along the way they became{' '}
                            <span className="text-slate-200 underline decoration-slate-600 underline-offset-4">
                                production apps
                            </span>{' '}
                            with real users.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15, duration: 0.5 }}
                            className="text-slate-300 text-lg leading-relaxed"
                        >
                            Right now I'm deep into systems that actually scale —{' '}
                            <span className="text-slate-200 underline decoration-slate-600 underline-offset-4">
                                multi-tenant architecture
                            </span>
                            , role-based access, org-scoped data. Not because a course told me to, but because
                            I hit those walls myself and had to figure them out.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-slate-300 text-lg leading-relaxed"
                        >
                            I've wired up{' '}
                            <span className="text-amber-400/90">Gemini AI</span> into a few real products — one
                            does resume parsing, another tracks crypto signals. It's the kind of work that makes
                            you realise the gap between "AI demo" and "AI in production" is massive.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.25, duration: 0.5 }}
                            className="text-slate-300 text-lg leading-relaxed"
                        >
                            Outside of building, I spend a lot of time with{' '}
                            <span className="text-slate-200">DSA in Java and Python</span>. Not to pass
                            interviews — though that helps — but because thinking in algorithms genuinely
                            changes how you write code.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="text-slate-400 text-lg leading-relaxed"
                        >
                            I care about owning features end-to-end. Frontend to DB, Stripe to deployment. If
                            something's broken, I'd rather trace it myself than pass it on.
                        </motion.p>
                    </div>

                    {/* Honest quote — serif italic */}
                    <motion.blockquote
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.35, duration: 0.6 }}
                        className="border-l-2 border-slate-700 pl-5 my-10"
                    >
                        <p
                            className="text-slate-500 text-base italic leading-relaxed"
                            style={{ fontFamily: "'Lora', 'Georgia', serif" }}
                        >
                            "Most of what I know, I learned by breaking something first and then
                            spending two hours figuring out why."
                        </p>
                    </motion.blockquote>

                    {/* Stack — slim horizontal strips, not icon card grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="border-t border-slate-800/60 pt-8 mt-8"
                    >
                        <div className="space-y-0">
                            {stack.map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 8 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.45 + i * 0.06, duration: 0.4 }}
                                    className="flex items-center justify-between py-3 border-b border-slate-800/40 group"
                                >
                                    <span className="text-sm text-slate-500 uppercase tracking-wider font-medium">
                                        {item.label}
                                    </span>
                                    <span className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors duration-200">
                                        {item.tech}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Stats — quiet, bottom of section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="flex gap-8 mt-10 text-sm text-slate-600"
                    >
                        <span>9+ projects shipped</span>
                        <span className="text-slate-800">·</span>
                        <span>4 full-stack SaaS apps</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
