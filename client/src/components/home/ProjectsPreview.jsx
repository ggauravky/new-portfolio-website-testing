import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useFetch } from '../../hooks/useFetch'
import { getFeaturedProjects } from '../../services/api'
import Loading from '../common/Loading'
import Card from '../common/Card'
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'

const ProjectsPreview = () => {
    const { data: projects, loading, error } = useFetch(getFeaturedProjects, [])

    if (loading) return <div className="section"><Loading /></div>
    if (error) return <div className="section text-center text-red-500">Failed to load projects</div>

    return (
        <section id="projects" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto text-sm sm:text-base px-4">
                        A showcase of my best work in AI, data science, and web development
                    </p>
                </motion.div>

                {!projects || projects.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <p className="text-text-secondary mb-6">No featured projects yet. Check back soon!</p>
                        <Link to="/projects" className="btn-primary inline-flex items-center">
                            View All Projects
                            <FaArrowRight className="ml-2" />
                        </Link>
                    </motion.div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project._id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <Card className="h-full flex flex-col">
                                        {/* Project Image */}
                                        <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-bg-tertiary">
                                            <img
                                                src={project.imageUrl}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.target.src = 'https://via.placeholder.com/400x300/13131a/00d9ff?text=Project'
                                                }}
                                            />
                                            {/* Category Badge */}
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 rounded-full bg-accent-cyan/90 text-white text-xs font-semibold">
                                                    {project.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Project Info */}
                                        <div className="flex-grow">
                                            <h3 className="text-xl font-bold text-text-primary mb-2">{project.title}</h3>
                                            <p className="text-text-secondary text-sm mb-4">{project.shortDescription}</p>

                                            {/* Tech Stack */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.techStack.slice(0, 4).map((tech, i) => (
                                                    <span key={i} className="tag text-xs">{tech}</span>
                                                ))}
                                                {project.techStack.length > 4 && (
                                                    <span className="tag text-xs">+{project.techStack.length - 4}</span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Links */}
                                        <div className="flex gap-3 pt-4 border-t border-white/10">
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-bg-tertiary hover:bg-accent-cyan hover:text-bg-primary transition-colors text-sm font-medium"
                                            >
                                                <FaGithub />
                                                Code
                                            </a>
                                            {project.liveLink && (
                                                <a
                                                    href={project.liveLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-accent-cyan text-white hover:bg-accent-purple transition-colors text-sm font-medium"
                                                >
                                                    <FaExternalLinkAlt />
                                                    Demo
                                                </a>
                                            )}
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        {/* View All Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-center"
                        >
                            <Link to="/projects" className="btn-primary inline-flex items-center">
                                View All Projects
                                <FaArrowRight className="ml-2" />
                            </Link>
                        </motion.div>
                    </>
                )}
            </div>
        </section>
    )
}

export default ProjectsPreview
