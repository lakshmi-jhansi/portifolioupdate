'use client';

import { motion } from 'framer-motion';
import GlassCard from './ui/GlassCard';
import { FiCode, FiDatabase, FiLayers, FiMonitor, FiCpu, FiServer } from 'react-icons/fi';

const skills = [
    { name: 'C', icon: FiCode, color: 'from-blue-500 to-cyan-400' },
    { name: 'HTML', icon: FiMonitor, color: 'from-orange-500 to-red-400' },
    { name: 'CSS', icon: FiLayers, color: 'from-blue-400 to-indigo-500' },
    { name: 'JavaScript', icon: FiCpu, color: 'from-yellow-400 to-orange-400' },
    { name: 'SQL', icon: FiDatabase, color: 'from-green-400 to-teal-500' },
    { name: 'MongoDB', icon: FiServer, color: 'from-green-500 to-emerald-400' },
];

const education = [
    {
        degree: 'Master of Computer Applications (MCA)',
        institution: 'Currently Enrolled',
        duration: '2023 – Present',
        cgpa: '9.0',
        highlight: true,
        description:
            'Specializing in Artificial Intelligence, Machine Learning, and Full Stack Development with consistent academic excellence.',
    },
    {
        degree: 'Bachelor of Science — Computer Science',
        institution: 'Graduate',
        duration: '2020 – 2023',
        cgpa: null,
        highlight: false,
        description:
            'Built strong foundations in data structures, algorithms, database systems, and software engineering principles.',
    },
];

export default function About() {
    return (
        <section id="about" className="relative py-24 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="section-tag">About Me</span>

                    <h2 className="font-grotesk text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
                        My <span className="gradient-text">Background</span>
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
                        A dedicated MCA student passionate about building intelligent,
                        scalable software solutions by combining academic rigor with
                        real-world development experience.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Left Section */}
                    <div className="space-y-8">

                        {/* Bio */}
                        <GlassCard delay={0}>
                            <h3 className="text-lg font-semibold text-violet-300 mb-3 font-grotesk">
                                Who I Am
                            </h3>

                            <p className="text-gray-300 leading-relaxed text-sm">
                                I&apos;m Lakshmi Jhansi Kadali, an MCA student with a strong
                                academic foundation in computer science and a deep interest
                                in Artificial Intelligence. I work at the intersection of
                                research and implementation — transforming complex concepts
                                into functional, user-focused applications.
                            </p>

                            <p className="text-gray-300 leading-relaxed text-sm mt-3">
                                My experience includes web development internships and AI-based
                                projects with emphasis on NLP, speech recognition, and full-stack
                                systems. I&apos;m continuously learning and building solutions
                                that create measurable impact.
                            </p>
                        </GlassCard>

                        {/* Education Timeline */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-6 font-grotesk">
                                Education
                            </h3>

                            <div className="relative pl-10 space-y-6">
                                <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-violet-500 via-violet-500/50 to-transparent" />

                                {education.map((edu, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.15 }}
                                        className="relative"
                                    >
                                        <div
                                            className={`absolute -left-[26px] top-1.5 w-4 h-4 rounded-full border-2 ${
                                                edu.highlight
                                                    ? 'bg-violet-600 border-violet-400 shadow-violet'
                                                    : 'bg-[#0A0A0F] border-violet-600/50'
                                            }`}
                                        />

                                        <div
                                            className={`glass rounded-xl p-4 ${
                                                edu.highlight ? 'border-violet-500/40' : ''
                                            }`}
                                        >
                                            <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                                                <h4 className="text-white font-semibold text-sm leading-tight">
                                                    {edu.degree}
                                                </h4>

                                                {edu.cgpa && (
                                                    <span className="px-2 py-0.5 rounded-full bg-violet-600/20 border border-violet-500/40 text-violet-300 text-xs font-bold">
                                                        CGPA {edu.cgpa}
                                                    </span>
                                                )}
                                            </div>

                                            <p className="text-violet-400 text-xs font-medium mb-1">
                                                {edu.institution}
                                            </p>

                                            <p className="text-gray-500 text-xs mb-2">
                                                {edu.duration}
                                            </p>

                                            <p className="text-gray-400 text-xs leading-relaxed">
                                                {edu.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6 font-grotesk">
                            Technical Skills
                        </h3>

                        <div className="grid grid-cols-2 gap-4">
                            {skills.map((skill, i) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.08 }}
                                    whileHover={{ scale: 1.04, y: -4 }}
                                    className="glass glass-hover rounded-xl p-5 flex items-center gap-4 group cursor-default"
                                >
                                    <div
                                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200`}
                                    >
                                        <skill.icon className="text-white" size={18} />
                                    </div>

                                    <div>
                                        <p className="text-white font-semibold text-sm">
                                            {skill.name}
                                        </p>
                                        <p className="text-gray-500 text-xs">
                                            Proficient
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Stats Card */}
                        <GlassCard className="mt-6" delay={0.4}>
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <p className="text-2xl font-bold gradient-text font-grotesk">
                                        9.0
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        CGPA
                                    </p>
                                </div>

                                <div>
                                    <p className="text-2xl font-bold gradient-text font-grotesk">
                                        2+
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Internships
                                    </p>
                                </div>

                                <div>
                                    <p className="text-2xl font-bold gradient-text font-grotesk">
                                        1+
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        AI Projects
                                    </p>
                                </div>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </section>
    );
}