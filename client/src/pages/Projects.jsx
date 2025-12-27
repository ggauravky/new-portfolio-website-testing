import { useState } from 'react'
import { motion } from 'framer-motion'
import { useFetch } from '../hooks/useFetch'
import { getProjects } from '../services/api'
import Loading from '../components/common/Loading'
import Card from '../components/common/Card'
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa'
import { PROJECT_CATEGORIES } from '../utils/constants'

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All')
    const { data: allProjects, loading, error } = useFetch(getProjects, [])

    // Filter projects based on active filter
    const filteredProjects = allProjects?.filter(project =>
        activeFilter === 'All' ? true : project.category === activeFilter
    )

    if (loading) return <Loading fullScreen />
    if (error) return (
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
            <div className="text-center">
                <p className="text-red-500 mb-4">Failed to load projects</p>
                <button onClick={() => window.location.reload()} className="btn-primary">
                    Retry
                </button>
            </div>
        </div>
    )

    return (
        <div className="min-h-[calc(100vh-80px)] py-16">
            <div className="container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        My <span className="gradient-text">Projects</span>
                    </h1>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        A collection of projects showcasing my skills in AI, data science, Python, and web development
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <FaFilter className="text-accent-cyan" />
                        <span className="text-text-secondary text-sm font-semibold">Filter by Category</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {PROJECT_CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${activeFilter === category
                                        ? 'bg-ai-gradient text-white shadow-lg shadow-accent-cyan/30'
                                        : 'bg-bg-secondary text-text-secondary hover:bg-bg-tertiary hover:text-accent-cyan'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Projects Count */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mb-8"
                >
                    <p className="text-text-muted">
                        Showing <span className="text-accent-cyan font-semibold">{filteredProjects?.length || 0}</span> projects
                    </p>
                </motion.div>

                {/* Projects Grid */}
                {!filteredProjects || filteredProjects.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-text-secondary text-lg mb-4">No projects found in this category</p>
                        <button
                            onClick={() => setActiveFilter('All')}
                            className="btn-secondary"
                        >
                            View All Projects
                        </button>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project._id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                            >
                                <Card className="h-full flex flex-col">
                                    {/* Project Image */}
                                    <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-bg-tertiary group">
                                        <img
                                            src={project.imageUrl}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
                                        {project.featured && (
                                            <div className="absolute top-4 right-4">
                                                <span className="px-3 py-1 rounded-full bg-accent-purple/90 text-white text-xs font-semibold">
                                                    Featured
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Project Info */}
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold text-text-primary mb-2">{project.title}</h3>
                                        <p className="text-text-secondary text-sm mb-4">{project.shortDescription}</p>

                                        {/* Full Description (expandable) */}
                                        {project.fullDescription && (
                                            <details className="mb-4">
                                                <summary className="text-accent-cyan text-sm cursor-pointer hover:underline">
                                                    Read more
                                                </summary>
                                                <p className="text-text-secondary text-sm mt-2">{project.fullDescription}</p>
                                            </details>
                                        )}

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.techStack.map((tech, i) => (
                                                <span key={i} className="tag text-xs">{tech}</span>
                                            ))}
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
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default Projects
