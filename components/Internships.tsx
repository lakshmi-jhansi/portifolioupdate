'use client';

import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiCheckCircle } from 'react-icons/fi';

const internships = [
    {
        id: '1',
        role: 'Web Development Intern',
        company: 'XYZ Technologies',
        duration: 'May 2024 – Aug 2024',
        type: 'Full-time Internship',
        achievements: [
            'Developed and maintained responsive web interfaces using HTML, CSS, and JavaScript',
            'Collaborated with senior developers to implement RESTful API integrations',
            'Improved page load performance by 30% through code optimization and lazy loading',
            'Participated in agile sprints and daily stand-ups, delivering features on schedule',
        ],
    },
    {
        id: '2',
        role: 'Database Intern',
        company: 'ABC Solutions Pvt Ltd',
        duration: 'Nov 2023 – Feb 2024',
        type: 'Part-time Internship',
        achievements: [
            'Designed and optimized SQL database schemas for enterprise-level applications',
            'Migrated legacy flat-file data to structured relational databases with zero data loss',
            'Wrote complex SQL queries and stored procedures to automate reporting workflows',
            'Implemented MongoDB collections for a real-time dashboard application',
        ],
    },
];

export default function Internships() {
    return (
        <section id="internships" className="relative py-24 px-6">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-600/40 to-transparent" />

            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="section-tag">Experience</span>
                    <h2 className="font-grotesk text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
                        <span className="gradient-text">Internships</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-base">
                        Real-world experience gained through industry internships and collaborative projects.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative pl-8 md:pl-12">
                    {/* Vertical line */}
                    <div className="absolute left-3 md:left-4 top-4 bottom-4 w-px bg-gradient-to-b from-violet-500 via-violet-500/40 to-transparent" />

                    <div className="space-y-10">
                        {internships.map((intern, i) => (
                            <motion.div
                                key={intern.id}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="relative"
                            >
                                {/* Timeline dot */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.15 + 0.2 }}
                                    className="absolute -left-[26px] md:-left-[34px] top-5 w-5 h-5 rounded-full bg-[#0A0A0F] border-2 border-violet-500 flex items-center justify-center"
                                >
                                    <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse-glow" />
                                </motion.div>

                                {/* Card */}
                                <div className="glass glass-hover rounded-2xl p-6 md:p-8 border border-violet-600/20 hover:border-violet-500/40 transition-all duration-300 group">
                                    {/* Header */}
                                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <FiBriefcase className="text-violet-400" size={16} />
                                                <h3 className="font-grotesk text-lg font-bold text-white">{intern.role}</h3>
                                            </div>
                                            <p className="text-violet-300 font-semibold text-base">{intern.company}</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-1">
                                                <FiCalendar size={12} />
                                                <span>{intern.duration}</span>
                                            </div>
                                            <span className="tech-badge text-xs">{intern.type}</span>
                                        </div>
                                    </div>

                                    {/* Achievements */}
                                    <ul className="space-y-2.5">
                                        {intern.achievements.map((achievement, j) => (
                                            <motion.li
                                                key={j}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: i * 0.15 + j * 0.07 + 0.3 }}
                                                className="flex items-start gap-3 text-gray-300 text-sm"
                                            >
                                                <FiCheckCircle className="text-violet-500 mt-0.5 flex-shrink-0" size={15} />
                                                <span className="leading-relaxed">{achievement}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
