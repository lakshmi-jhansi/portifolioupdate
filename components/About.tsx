'use client';

import { motion } from 'framer-motion';
import GlassCard from './ui/GlassCard';
import {
  FiCode,
  FiDatabase,
  FiLayers,
  FiMonitor,
  FiCpu,
  FiServer,
} from 'react-icons/fi';

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
          transition={{ duration: 0.6 }}
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

          {/* LEFT SECTION */}
          <div className="space-y-8">

            <GlassCard delay={0}>
              <h3 className="text-lg font-semibold text-violet-300 mb-3 font-grotesk">
                Who I Am
              </h3>

              <p className="text-gray-300 leading-relaxed text-sm">
                I&apos;m Lakshmi Jhansi Kadali, an MCA student with a strong
                academic foundation in computer science and a deep interest
                in Artificial Intelligence.
              </p>
            </GlassCard>

            {/* Education */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 font-grotesk">
                Education
              </h3>

              <div className="relative pl-10 space-y-6">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.15
                    }}
                  >
                    <div className="glass rounded-xl p-4">
                      <h4 className="text-white font-semibold text-sm">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-400 text-xs mt-1">
                        {edu.institution} • {edu.duration}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
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
                  transition={{
                    duration: 0.4,
                    delay: i * 0.08
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-xl p-5 flex items-center gap-4"
                >
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center`}
                  >
                    <skill.icon className="text-white" size={18} />
                  </div>

                  <p className="text-white font-semibold text-sm">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}