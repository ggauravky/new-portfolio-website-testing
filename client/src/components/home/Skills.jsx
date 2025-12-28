import { motion } from 'framer-motion'
import { SKILLS } from '../../utils/constants'
import Card from '../common/Card'
import {
    FaPython, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare,
    FaGithub, FaDatabase, FaCode, FaRobot, FaChartBar, FaChartLine, FaServer
} from 'react-icons/fa'
import {
    SiTensorflow, SiNumpy, SiPandas, SiScikitlearn, SiFlask,
    SiDjango, SiTailwindcss, SiMongodb
} from 'react-icons/si'
import { GiBrain } from 'react-icons/gi'

const Skills = () => {
    // Icon mapping
    const iconMap = {
        SiPython: FaPython,
        SiNumpy: SiNumpy,
        SiPandas: SiPandas,
        FaChartBar: FaChartBar,
        FaChartLine: FaChartLine,
        GiBrain: GiBrain,
        SiTensorflow: SiTensorflow,
        SiScikitlearn: SiScikitlearn,
        FaCode: FaCode,
        FaRobot: FaRobot,
        SiFlask: SiFlask,
        SiDjango: SiDjango,
        FaServer: FaServer,
        FaDatabase: FaDatabase,
        FaHtml5: FaHtml5,
        FaCss3Alt: FaCss3Alt,
        FaJsSquare: FaJsSquare,
        FaReact: FaReact,
        SiTailwindcss: SiTailwindcss,
        FaNodeJs: FaNodeJs,
        SiMongodb: SiMongodb,
        FaGithub: FaGithub,
    }

    const categoryColors = {
        'AI / Data Science': 'from-cyan-500 to-blue-500',
        'Python Development': 'from-yellow-500 to-green-500',
        'Web Development': 'from-purple-500 to-pink-500',
    }

    return (
        <section id="skills" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Technical <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto text-sm sm:text-base px-4">
                        My technical expertise spans across AI, data science, Python development, and modern web technologies
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {Object.entries(SKILLS).map(([category, skills], categoryIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                        >
                            <Card className={`h-full ${categoryIndex === 0 ? 'lg:col-span-1 border-2 border-accent-cyan' : ''}`}>
                                <div className="mb-4 sm:mb-6">
                                    <div className={`inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-gradient-to-r ${categoryColors[category]} text-white text-sm sm:text-base font-semibold mb-3 sm:mb-4`}>
                                        {category}
                                    </div>
                                    {categoryIndex === 0 && (
                                        <div className="text-xs text-accent-cyan font-semibold mb-2">PRIMARY FOCUS</div>
                                    )}
                                </div>

                                <div className="space-y-3 sm:space-y-4">
                                    {skills.map((skill, index) => {
                                        const Icon = iconMap[skill.icon] || FaCode
                                        return (
                                            <motion.div
                                                key={skill.name}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: categoryIndex * 0.1 + index * 0.05 }}
                                                className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg bg-bg-tertiary hover:bg-bg-tertiary/60 transition-colors group"
                                            >
                                                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-bg-secondary group-hover:bg-accent-cyan/10 transition-colors">
                                                    <Icon className="text-accent-cyan text-lg sm:text-xl" />
                                                </div>
                                                <span className="text-text-primary font-medium text-sm sm:text-base">{skill.name}</span>
                                            </motion.div>
                                        )
                                    })}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <p className="text-text-muted text-sm">
                        <span className="text-accent-cyan">⚠️ Note:</span> These skills represent my current expertise level. I'm continuously learning and expanding my knowledge.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills
