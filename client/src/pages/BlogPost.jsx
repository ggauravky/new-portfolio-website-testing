import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useFetch } from '../hooks/useFetch'
import { getBlogBySlug } from '../services/api'
import Loading from '../components/common/Loading'
import { FaClock, FaCalendar, FaEye, FaArrowLeft, FaTag } from 'react-icons/fa'

const BlogPost = () => {
    const { slug } = useParams()
    const navigate = useNavigate()
    const { data: blog, loading, error } = useFetch(() => getBlogBySlug(slug), [slug])

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })
    }

    if (loading) return <Loading fullScreen />

    if (error || !blog) {
        return (
            <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-text-primary mb-4">Blog Post Not Found</h2>
                    <p className="text-text-secondary mb-6">The blog post you're looking for doesn't exist.</p>
                    <Link to="/blogs" className="btn-primary inline-flex items-center">
                        <FaArrowLeft className="mr-2" />
                        Back to Blog
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-[calc(100vh-80px)] py-16">
            <div className="container max-w-4xl">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <button
                        onClick={() => navigate('/blogs')}
                        className="flex items-center gap-2 text-accent-cyan hover:text-accent-purple transition-colors"
                    >
                        <FaArrowLeft />
                        <span>Back to Blog</span>
                    </button>
                </motion.div>

                <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* Cover Image */}
                    {blog.coverImage && (
                        <div className="relative h-96 mb-8 rounded-2xl overflow-hidden bg-bg-secondary">
                            <img
                                src={blog.coverImage}
                                alt={blog.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/1200x600/13131a/00d9ff?text=Blog+Post'
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary to-transparent"></div>
                        </div>
                    )}

                    {/* Tags */}
                    {blog.tags && blog.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            <FaTag className="text-accent-cyan mt-1" />
                            {blog.tags.map((tag, i) => (
                                <span key={i} className="tag">{tag}</span>
                            ))}
                        </div>
                    )}

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                        {blog.title}
                    </h1>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-6 text-text-muted mb-8 pb-8 border-b border-white/10">
                        <span className="flex items-center gap-2">
                            <FaCalendar className="text-accent-cyan" />
                            {formatDate(blog.publishedAt || blog.createdAt)}
                        </span>
                        <span className="flex items-center gap-2">
                            <FaClock className="text-accent-purple" />
                            {blog.readTime} min read
                        </span>
                        <span className="flex items-center gap-2">
                            <FaEye className="text-accent-cyan" />
                            {blog.views || 0} views
                        </span>
                    </div>

                    {/* Content */}
                    <div
                        className="prose prose-invert prose-lg max-w-none mb-12"
                        style={{
                            color: '#e0e0e0',
                        }}
                    >
                        {/* Render blog content */}
                        {/* For Markdown: use a markdown parser like react-markdown */}
                        {/* For HTML: use dangerouslySetInnerHTML */}
                        <div
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                            className="blog-content"
                        />
                    </div>

                    {/* CTA Section */}
                    <div className="card text-center bg-bg-secondary border-2 border-accent-cyan/20">
                        <h3 className="text-2xl font-bold gradient-text mb-4">
                            Enjoyed this article?
                        </h3>
                        <p className="text-text-secondary mb-6">
                            Check out more of my blog posts or connect with me on social media
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link to="/blogs" className="btn-primary">
                                Read More Posts
                            </Link>
                            <Link to="/#contact" className="btn-secondary">
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </motion.article>
            </div>
        </div>
    )
}

export default BlogPost
