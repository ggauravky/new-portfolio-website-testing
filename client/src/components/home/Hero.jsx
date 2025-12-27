import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaDownload } from 'react-icons/fa'
import ParticleBackground from '../animations/ParticleBackground'

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Particle Background */}
            <ParticleBackground />

            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Text Content - Order 2 on mobile, Order 1 on desktop */}
                    <motion.div
                        className="flex-1 text-center lg:text-left order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Greeting */}
                        <motion.p
                            className="text-accent-cyan font-semibold mb-4 text-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            👋 Hello, I'm
                        </motion.p>

                        {/* Name */}
                        <motion.h1
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <span className="text-text-primary">Gaurav</span>{' '}
                            <span className="gradient-text">Kumar Yadav</span>
                        </motion.h1>

                        {/* Headline */}
                        <motion.h2
                            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-text-secondary mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            AI & Data Scientist | Python Developer | Web Engineer
                        </motion.h2>

                        {/* Short Summary */}
                        <motion.p
                            className="text-text-secondary text-lg max-w-2xl mx-auto lg:mx-0 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            Passionate BCA student specializing in AI, data science, and modern web development.
                            Building intelligent solutions that make a difference.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <Link to="/projects" className="btn-primary inline-flex items-center justify-center">
                                View Projects
                                <FaArrowRight className="ml-2" />
                            </Link>
                            <a
                                href="/resume.pdf"
                                download
                                className="btn-secondary inline-flex items-center justify-center"
                            >
                                <FaDownload className="mr-2" />
                                Download Resume
                            </a>
                        </motion.div>

                        {/* Quick Stats */}
                        <motion.div
                            className="grid grid-cols-3 gap-6 mt-12 max-w-md mx-auto lg:mx-0"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                        >
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text">50+</div>
                                <div className="text-text-muted text-sm mt-1">Projects</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text">20+</div>
                                <div className="text-text-muted text-sm mt-1">Skills</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text">3+</div>
                                <div className="text-text-muted text-sm mt-1">Years</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Profile Image - Order 1 on mobile, Order 2 on desktop */}
                    <motion.div
                        className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="relative">
                            {/* Glowing effect behind image */}
                            <div className="absolute inset-0 bg-ai-gradient opacity-20 blur-3xl rounded-full"></div>

                            {/* Profile Image Container */}
                            <motion.div
                                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-accent-cyan/30"
                                animate={{
                                    y: [0, -20, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            >
                                {/* Replace with your actual image */}
                                <img
                                    src="/images/profile.jpg"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        // Fallback if image doesn't exist
                                        e.target.src = 'https://via.placeholder.com/400x400/13131a/00d9ff?text=Your+Photo'
                                    }}
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 to-transparent"></div>
                            </motion.div>

                            {/* Floating elements */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-20 h-20 bg-accent-cyan/10 rounded-full backdrop-blur-sm border border-accent-cyan/20 flex items-center justify-center"
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [0, 5, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            >
                                <span className="text-2xl">🤖</span>
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-purple/10 rounded-full backdrop-blur-sm border border-accent-purple/20 flex items-center justify-center"
                                animate={{
                                    y: [0, 10, 0],
                                    rotate: [0, -5, 0],
                                }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: 0.5,
                                }}
                            >
                                <span className="text-xl">💡</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    opacity: { delay: 1.5 },
                    y: { duration: 1.5, repeat: Infinity },
                }}
            >
                <div className="flex flex-col items-center">
                    <span className="text-text-muted text-sm mb-2">Scroll Down</span>
                    <div className="w-6 h-10 border-2 border-accent-cyan rounded-full flex justify-center">
                        <motion.div
                            className="w-1.5 h-1.5 bg-accent-cyan rounded-full mt-2"
                            animate={{ y: [0, 16, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
