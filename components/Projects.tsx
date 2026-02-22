'use client';

import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCpu, FiTrendingUp, FiZap } from 'react-icons/fi';

const projects = [
    {
        id: 'whisper-transcription',
        title: 'Intelligent Multimedia Transcription System',
        subtitle: 'using Whisper AI',
        description:
            'An advanced AI-powered speech-to-text system that transcribes audio and video files with high accuracy using OpenAI\'s Whisper model. The system handles multiple audio formats, reduces transcription errors through pre-processing pipelines, and provides structured output with timestamps.',
        technologies: ['Python', 'Whisper AI', 'Flask', 'FFmpeg', 'HTML/CSS/JS', 'NumPy'],
        stats: [
            { label: 'Accuracy Improvement', value: '37%', icon: FiTrendingUp },
            { label: 'Formats Supported', value: '12+', icon: FiZap },
            { label: 'AI Model', value: 'Whisper', icon: FiCpu },
        ],
        featured: true,
        githubUrl: 'https://github.com/lakshmi-jhansi',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="relative py-24 px-6">
            {/* Subtle section divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-600/40 to-transparent" />

            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="section-tag">Featured Work</span>
                    <h2 className="font-grotesk text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
                        My <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-base">
                        Real-world applications built with modern AI and web technologies.
                    </p>
                </motion.div>

                {/* Featured Project */}
                {projects.map((project, i) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: i * 0.1 }}
                        className="mb-8"
                    >
                        <div className="glass glass-hover rounded-3xl overflow-hidden border border-violet-600/20 hover:border-violet-500/50 transition-all duration-500 group">
                            {/* Top accent bar */}
                            <div className="h-1 bg-gradient-to-r from-violet-600 via-purple-500 to-violet-400" />

                            <div className="p-8 md:p-10">
                                {/* Featured badge */}
                                <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                                    <div>
                                        <span className="section-tag mb-3 inline-flex">
                                            <FiCpu size={12} />
                                            Featured AI Project
                                        </span>
                                        <h3 className="font-grotesk text-2xl md:text-3xl font-bold text-white leading-tight">
                                            {project.title}
                                        </h3>
                                        <p className="text-violet-400 text-lg font-medium mt-1">{project.subtitle}</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <motion.a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="social-icon"
                                            aria-label="GitHub"
                                        >
                                            <FiGithub size={18} />
                                        </motion.a>
                                        <motion.a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="social-icon"
                                            aria-label="View Project"
                                        >
                                            <FiExternalLink size={18} />
                                        </motion.a>
                                    </div>
                                </div>

                                <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-3xl">
                                    {project.description}
                                </p>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-4 mb-8">
                                    {project.stats.map((stat) => (
                                        <motion.div
                                            key={stat.label}
                                            whileHover={{ y: -2 }}
                                            className="glass rounded-xl p-4 text-center border border-violet-600/20"
                                        >
                                            <stat.icon className="text-violet-400 mx-auto mb-2" size={18} />
                                            <p className="text-2xl font-bold gradient-text font-grotesk">{stat.value}</p>
                                            <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Tech Stack */}
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Tech Stack</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="tech-badge">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
