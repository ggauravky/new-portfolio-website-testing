import { motion } from 'framer-motion'
import { EDUCATION } from '../../utils/constants'
import Card from '../common/Card'
import { FaGraduationCap, FaUniversity, FaCalendar, FaBook } from 'react-icons/fa'

const Education = () => {
    return (
        <section id="education" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Education</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto text-sm sm:text-base px-4">
                        My academic journey and qualifications
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-4xl mx-auto"
                >
                    <Card className="border-2 border-accent-cyan/30">
                        <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                            {/* Icon */}
                            <div className="flex-shrink-0 flex justify-center md:justify-start">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-ai-gradient flex items-center justify-center">
                                    <FaGraduationCap className="text-white text-3xl sm:text-4xl" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-grow text-center md:text-left">
                                <div className="mb-4">
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-primary mb-2">
                                        {EDUCATION.degree}
                                    </h3>
                                    <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 text-text-secondary text-sm">
                                        <div className="flex items-center gap-2">
                                            <FaUniversity className="text-accent-cyan" />
                                            <span>{EDUCATION.university}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaCalendar className="text-accent-purple" />
                                            <span>{EDUCATION.year}</span>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <span className="inline-block px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan text-sm font-semibold">
                                            Currently: {EDUCATION.currentYear}
                                        </span>
                                    </div>
                                </div>

                                {/* Subjects */}
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <FaBook className="text-accent-purple" />
                                        <h4 className="font-semibold text-text-primary">Relevant Subjects</h4>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {EDUCATION.subjects.map((subject, index) => (
                                            <motion.div
                                                key={subject}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                                className="flex items-center gap-2 p-2 rounded-lg bg-bg-tertiary"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-accent-cyan"></div>
                                                <span className="text-text-secondary text-sm">{subject}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}

export default Education
