import { motion } from 'framer-motion'
import { useFetch } from '../../hooks/useFetch'
import { getExperiences } from '../../services/api'
import Loading from '../common/Loading'
import { FaBriefcase, FaTrophy, FaCode, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa'

const Experience = () => {
    const { data: experiences, loading, error } = useFetch(getExperiences, [])

    const iconMap = {
        internship: FaBriefcase,
        hackathon: FaTrophy,
        project: FaCode,
        other: FaBriefcase,
    }

    const formatDate = (date) => {
        if (!date) return 'Present'
        return new Date(date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    }

    if (loading) return <Loading />
    if (error) return <div className="text-center text-red-500">Failed to load experiences</div>

    return (
        <section id="experience" className="section bg-bg-secondary">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto text-sm sm:text-base px-4">
                        My professional journey and accomplishments
                    </p>
                </motion.div>

                {!experiences || experiences.length === 0 ? (
                    // No experiences - show seeking message
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl mx-auto"
                    >
                        <div className="card text-center border-2 border-accent-cyan/30 bg-accent-cyan/5">
                            <div className="mb-4">
                                <FaBriefcase className="text-6xl text-accent-cyan mx-auto mb-4" />
                            </div>
                            <h3 className="text-2xl font-bold text-text-primary mb-3">
                                Actively Seeking Opportunities
                            </h3>
                            <p className="text-text-secondary mb-6">
                                I'm currently looking for internship and research opportunities in AI, data science, and software development.
                                If you have an exciting project or opportunity, I'd love to hear from you!
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <span className="tag">AI & Machine Learning</span>
                                <span className="tag">Data Science</span>
                                <span className="tag">Python Development</span>
                                <span className="tag">Web Development</span>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    // Has experiences - show timeline
                    <div className="max-w-4xl mx-auto relative">
                        {/* Timeline line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-purple to-accent-cyan hidden md:block"></div>

                        <div className="space-y-8">
                            {experiences.map((exp, index) => {
                                const Icon = iconMap[exp.type] || FaBriefcase
                                const isEven = index % 2 === 0

                                return (
                                    <motion.div
                                        key={exp._id}
                                        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                            } flex-row`}
                                    >
                                        {/* Timeline dot (desktop) */}
                                        <div className="hidden md:flex absolute left-1/2 w-12 h-12 rounded-full bg-accent-cyan shadow-lg shadow-accent-cyan/50 transform -translate-x-1/2 z-10 items-center justify-center">
                                            <Icon className="text-white text-xl" />
                                        </div>

                                        {/* Content */}
                                        <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                                            <div className="card hover:shadow-xl hover:shadow-accent-cyan/10">
                                                {/* Icon (mobile) */}
                                                <div className="flex items-center gap-3 mb-4 md:hidden">
                                                    <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center">
                                                        <Icon className="text-accent-cyan" />
                                                    </div>
                                                    <span className="text-xs text-accent-cyan font-semibold uppercase">{exp.type}</span>
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-xl font-bold text-text-primary mb-2">{exp.title}</h3>

                                                {/* Organization & Location */}
                                                <div className="flex flex-wrap gap-3 text-text-secondary text-sm mb-3">
                                                    <span className="font-semibold">{exp.organization}</span>
                                                    {exp.location && (
                                                        <span className="flex items-center gap-1">
                                                            <FaMapMarkerAlt className="text-xs" />
                                                            {exp.location}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Date */}
                                                <div className="flex items-center gap-2 text-accent-cyan text-sm mb-4">
                                                    <FaCalendar />
                                                    <span>{formatDate(exp.startDate)} - {formatDate(exp.endDate)}</span>
                                                </div>

                                                {/* Description */}
                                                <p className="text-text-secondary mb-4">{exp.description}</p>

                                                {/* Achievements */}
                                                {exp.achievements && exp.achievements.length > 0 && (
                                                    <div className="mb-4">
                                                        <h4 className="text-sm font-semibold text-text-primary mb-2">Key Achievements:</h4>
                                                        <ul className="space-y-1">
                                                            {exp.achievements.map((achievement, i) => (
                                                                <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                                                                    <span className="text-accent-cyan mt-1">▹</span>
                                                                    <span>{achievement}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {/* Skills */}
                                                {exp.skills && exp.skills.length > 0 && (
                                                    <div className="flex flex-wrap gap-2">
                                                        {exp.skills.map((skill, i) => (
                                                            <span key={i} className="tag text-xs">{skill}</span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Experience
