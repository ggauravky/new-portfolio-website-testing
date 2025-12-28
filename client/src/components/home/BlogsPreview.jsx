import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useFetch } from '../../hooks/useFetch'
import { getLatestBlogs } from '../../services/api'
import Loading from '../common/Loading'
import Card from '../common/Card'
import { FaArrowRight, FaClock, FaCalendar } from 'react-icons/fa'

const BlogsPreview = () => {
    const { data: blogs, loading, error } = useFetch(getLatestBlogs, [])

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        })
    }

    if (loading) return <div className="section"><Loading /></div>
    if (error) return <div className="section text-center text-red-500">Failed to load blogs</div>

    return (
        <section id="blogs" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Latest <span className="gradient-text">Blog Posts</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto text-sm sm:text-base px-4">
                        Thoughts, tutorials, and insights on AI, data science, and technology
                    </p>
                </motion.div>

                {!blogs || blogs.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <p className="text-text-secondary mb-6">No blog posts yet. Stay tuned for content!</p>
                        <Link to="/blogs" className="btn-primary inline-flex items-center">
                            View Blog
                            <FaArrowRight className="ml-2" />
                        </Link>
                    </motion.div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-10 sm:mb-12">
                            {blogs.map((blog, index) => (
                                <motion.div
                                    key={blog._id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <Link to={`/blogs/${blog.slug}`}>
                                        <Card className="h-full hover:shadow-2xl hover:shadow-accent-cyan/20">
                                            {/* Cover Image */}
                                            <div className="relative h-56 mb-4 rounded-lg overflow-hidden bg-bg-tertiary">
                                                <img
                                                    src={blog.coverImage}
                                                    alt={blog.title}
                                                    className="w-full h-full object-cover"
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
                                                    </div>
                                                )}

                                                {/* Title */}
                                                <h3 className="text-xl font-bold text-text-primary mb-2 hover:text-accent-cyan transition-colors">
                                                    {blog.title}
                                                </h3>

                                                {/* Excerpt */}
                                                <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                                                    {blog.excerpt}
                                                </p>

                                                {/* Meta Info */}
                                                <div className="flex items-center gap-4 text-text-muted text-xs">
                                                    <span className="flex items-center gap-1">
                                                        <FaCalendar />
                                                        {formatDate(blog.publishedAt || blog.createdAt)}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <FaClock />
                                                        {blog.readTime} min read
                                                    </span>
                                                </div>
                                            </div>
                                        </Card>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* View All Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-center"
                        >
                            <Link to="/blogs" className="btn-primary inline-flex items-center">
                                View All Posts
                                <FaArrowRight className="ml-2" />
                            </Link>
                        </motion.div>
                    </>
                )}
            </div>
        </section>
    )
}

export default BlogsPreview
