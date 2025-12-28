import { motion } from 'framer-motion'
import { useFetch } from '../hooks/useFetch'
import { getBlogs } from '../services/api'
import { Link } from 'react-router-dom'
import Loading from '../components/common/Loading'
import Card from '../components/common/Card'
import { FaClock, FaCalendar, FaEye } from 'react-icons/fa'

const Blogs = () => {
    const { data: blogs, loading, error } = useFetch(() => getBlogs({ published: true }), [])

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })
    }

    if (loading) return <Loading fullScreen />
    if (error) return (
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
            <div className="text-center">
                <p className="text-red-500 mb-4">Failed to load blogs</p>
                <button onClick={() => window.location.reload()} className="btn-primary">
                    Retry
                </button>
            </div>
        </div>
    )

    return (
        <div className="min-h-[calc(100vh-80px)] py-8 sm:py-12 md:py-16">
            <div className="container px-4 sm:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 sm:mb-12"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="gradient-text">Blog</span> & Articles
                    </h1>
                    <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto px-4">
                        Insights, tutorials, and thoughts on AI, data science, programming, and technology
                    </p>
                </motion.div>

                {/* Blog Count */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center mb-8"
                >
                    <p className="text-text-muted">
                        <span className="text-accent-cyan font-semibold">{blogs?.length || 0}</span> articles published
                    </p>
                </motion.div>

                {/* Blogs Grid */}
                {!blogs || blogs.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-text-secondary text-lg mb-4">No blog posts published yet</p>
                        <p className="text-text-muted">Stay tuned for upcoming content!</p>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                    >
                        {blogs.map((blog, index) => (
                            <motion.div
                                key={blog._id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                            >
                                <Link to={`/blogs/${blog.slug}`}>
                                    <Card className="h-full hover:shadow-2xl hover:shadow-accent-cyan/20 group">
                                        {/* Cover Image */}
                                        <div className="relative h-56 mb-4 rounded-lg overflow-hidden bg-bg-tertiary">
                                            <img
                                                src={blog.coverImage}
                                                alt={blog.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                onError={(e) => {
                                                    e.target.src = 'https://via.placeholder.com/600x400/13131a/00d9ff?text=Blog+Post'
                                                }}
                                            />
                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent"></div>
                                        </div>

                                        {/* Blog Info */}
                                        <div>
                                            {/* Tags */}
                                            {blog.tags && blog.tags.length > 0 && (
                                                <div className="flex flex-wrap gap-2 mb-3">
                                                    {blog.tags.slice(0, 3).map((tag, i) => (
                                                        <span key={i} className="tag text-xs">{tag}</span>
                                                    ))}
                                                    {blog.tags.length > 3 && (
                                                        <span className="tag text-xs">+{blog.tags.length - 3}</span>
                                                    )}
                                                </div>
                                            )}

                                            {/* Title */}
                                            <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent-cyan transition-colors">
                                                {blog.title}
                                            </h3>

                                            {/* Excerpt */}
                                            <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                                                {blog.excerpt}
                                            </p>

                                            {/* Meta Info */}
                                            <div className="flex flex-wrap items-center gap-4 text-text-muted text-xs pt-4 border-t border-white/10">
                                                <span className="flex items-center gap-1">
                                                    <FaCalendar />
                                                    {formatDate(blog.publishedAt || blog.createdAt)}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <FaClock />
                                                    {blog.readTime} min
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <FaEye />
                                                    {blog.views || 0} views
                                                </span>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default Blogs
