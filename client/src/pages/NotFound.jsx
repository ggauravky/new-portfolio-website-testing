import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaHome, FaSearch } from 'react-icons/fa'

const NotFound = () => {
    return (
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-8">
            <motion.div
                className="text-center max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* 404 Illustration */}
                <motion.div
                    className="mb-6 sm:mb-8 relative"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="text-7xl sm:text-8xl md:text-9xl font-bold gradient-text relative">
                        404

                        {/* Floating elements */}
                        <motion.div
                            className="absolute -top-4 -right-4 w-16 h-16 bg-accent-cyan/20 rounded-full"
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 180, 360],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />

                        <motion.div
                            className="absolute -bottom-4 -left-4 w-20 h-20 bg-accent-purple/20 rounded-full"
                            animate={{
                                y: [0, 20, 0],
                                rotate: [360, 180, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: 0.5,
                            }}
                        />
                    </div>
                </motion.div>

                {/* Message */}
                <motion.h1
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-3 sm:mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Page Not Found
                </motion.h1>

                <motion.p
                    className="text-text-secondary text-base sm:text-lg mb-6 sm:mb-8 px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    Oops! The page you're looking for doesn't exist or has been moved.
                    Let's get you back on track.
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <Link to="/" className="btn-primary inline-flex items-center justify-center">
                        <FaHome className="mr-2" />
                        Go Home
                    </Link>
                    <Link to="/projects" className="btn-secondary inline-flex items-center justify-center">
                        <FaSearch className="mr-2" />
                        Explore Projects
                    </Link>
                </motion.div>

                {/* Helpful Links */}
                <motion.div
                    className="mt-12 pt-8 border-t border-white/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <p className="text-text-muted text-sm mb-4">You might be interested in:</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/" className="text-accent-cyan hover:text-accent-purple transition-colors">
                            Home
                        </Link>
                        <Link to="/projects" className="text-accent-cyan hover:text-accent-purple transition-colors">
                            Projects
                        </Link>
                        <Link to="/blogs" className="text-accent-cyan hover:text-accent-purple transition-colors">
                            Blogs
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default NotFound
