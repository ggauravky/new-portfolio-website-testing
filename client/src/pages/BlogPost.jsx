import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useFetch } from '../hooks/useFetch'
import { getBlogBySlug } from '../services/api'
import Loading from '../components/common/Loading'
import { FaClock, FaCalendar, FaEye, FaArrowLeft, FaTag, FaTwitter, FaLinkedin, FaLink, FaArrowUp } from 'react-icons/fa'

const BlogPost = () => {
    const { slug } = useParams()
    const navigate = useNavigate()
    const { data: blog, loading, error } = useFetch(() => getBlogBySlug(slug), [slug])
    const [showScrollTop, setShowScrollTop] = useState(false)
    const [copied, setCopied] = useState(false)

    // Reading progress bar
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    // Show scroll to top button
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    // Copy link function
    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    // Share functions
    const shareOnTwitter = () => {
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(window.location.href)}`
        window.open(url, '_blank')
    }

    const shareOnLinkedIn = () => {
        const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`
        window.open(url, '_blank')
    }

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
        <div className="min-h-[calc(100vh-80px)] py-8 sm:py-12 md:py-16 relative">
            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-cyan origin-left z-50"
                style={{ scaleX }}
            />

            {/* Scroll to Top Button */}
            <motion.button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-accent-cyan text-white shadow-lg hover:shadow-accent-cyan/50 hover:scale-110 transition-all duration-300 flex items-center justify-center z-40"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                    opacity: showScrollTop ? 1 : 0,
                    scale: showScrollTop ? 1 : 0
                }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
            >
                <FaArrowUp />
            </motion.button>

            <div className="container max-w-4xl px-4 sm:px-6">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 sm:mb-8"
                >
                    <button
                        onClick={() => navigate('/blogs')}
                        className="group flex items-center gap-2 text-accent-cyan hover:text-accent-purple transition-colors text-sm sm:text-base"
                    >
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Blog</span>
                    </button>
                </motion.div>

                <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    {/* Cover Image with Overlay */}
                    {blog.coverImage && (
                        <div className="relative h-64 sm:h-80 md:h-96 mb-8 rounded-2xl overflow-hidden group">
                            <img
                                src={blog.coverImage}
                                alt={blog.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/1200x600/13131a/00d9ff?text=Blog+Post'
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent"></div>

                            {/* Floating Tags on Image */}
                            {blog.tags && blog.tags.length > 0 && (
                                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                                    {blog.tags.slice(0, 4).map((tag, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full bg-accent-cyan/90 backdrop-blur-sm text-white text-xs font-semibold">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Article Header */}
                    <div className="mb-8">
                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
                            {blog.title}
                        </h1>

                        {/* Author & Meta Info Card */}
                        <div className="card bg-bg-tertiary border border-accent-cyan/20 p-4 sm:p-6">
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                {/* Meta Info */}
                                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-text-secondary text-sm">
                                    <span className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-accent-cyan/20 flex items-center justify-center">
                                            <FaCalendar className="text-accent-cyan text-xs" />
                                        </div>
                                        <span>{formatDate(blog.publishedAt || blog.createdAt)}</span>
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-accent-purple/20 flex items-center justify-center">
                                            <FaClock className="text-accent-purple text-xs" />
                                        </div>
                                        <span>{blog.readTime} min read</span>
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-accent-cyan/20 flex items-center justify-center">
                                            <FaEye className="text-accent-cyan text-xs" />
                                        </div>
                                        <span>{blog.views || 0} views</span>
                                    </span>
                                </div>

                                {/* Share Buttons */}
                                <div className="flex items-center gap-2">
                                    <span className="text-text-muted text-sm mr-2">Share:</span>
                                    <motion.button
                                        onClick={shareOnTwitter}
                                        className="w-9 h-9 rounded-lg bg-bg-secondary hover:bg-blue-500 text-text-secondary hover:text-white transition-colors flex items-center justify-center"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        title="Share on Twitter"
                                    >
                                        <FaTwitter size={16} />
                                    </motion.button>
                                    <motion.button
                                        onClick={shareOnLinkedIn}
                                        className="w-9 h-9 rounded-lg bg-bg-secondary hover:bg-blue-600 text-text-secondary hover:text-white transition-colors flex items-center justify-center"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        title="Share on LinkedIn"
                                    >
                                        <FaLinkedin size={16} />
                                    </motion.button>
                                    <motion.button
                                        onClick={copyLink}
                                        className={`w-9 h-9 rounded-lg text-text-secondary transition-colors flex items-center justify-center relative ${copied ? 'bg-green-500 text-white' : 'bg-bg-secondary hover:bg-accent-cyan hover:text-white'
                                            }`}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        title="Copy link"
                                    >
                                        <FaLink size={16} />
                                        {copied && (
                                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                                                Copied!
                                            </span>
                                        )}
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content with Better Styling */}
                    <div className="relative">
                        {/* Decorative elements */}
                        <div className="absolute -left-20 top-20 w-40 h-40 bg-accent-cyan/5 rounded-full blur-3xl"></div>
                        <div className="absolute -right-20 top-40 w-40 h-40 bg-accent-purple/5 rounded-full blur-3xl"></div>

                        <div
                            className="prose prose-invert prose-lg max-w-none mb-12 relative z-10"
                            style={{
                                color: '#e0e0e0',
                            }}
                        >
                            <div
                                dangerouslySetInnerHTML={{ __html: blog.content }}
                                className="blog-content"
                            />
                        </div>
                    </div>

                    {/* CTA Section with Enhanced Design */}
                    <motion.div
                        className="card text-center bg-gradient-to-br from-bg-secondary to-bg-tertiary border-2 border-accent-cyan/30 relative overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Background decoration */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-32 h-32 bg-accent-cyan rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent-purple rounded-full blur-3xl"></div>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-2xl sm:text-3xl font-bold gradient-text mb-4">
                                Enjoyed this article?
                            </h3>
                            <p className="text-text-secondary mb-6 text-base sm:text-lg">
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
                    </motion.div>
                </motion.article>
            </div>
        </div>
    )
}

export default BlogPost
