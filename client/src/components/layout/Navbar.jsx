import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { NAV_LINKS } from '../../utils/constants'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false)
    }, [location])

    // Handle navigation with hash
    const handleNavClick = (path, hash) => {
        if (location.pathname !== path) {
            navigate(path)
            setTimeout(() => {
                if (hash) {
                    const element = document.querySelector(hash)
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                    }
                }
            }, 100)
        } else if (hash) {
            const element = document.querySelector(hash)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
        setIsOpen(false)
    }

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bg-secondary/95 backdrop-blur-lg shadow-lg shadow-black/20' : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 group">
                        <div className="w-10 h-10 rounded-lg bg-ai-gradient flex items-center justify-center transform group-hover:scale-110 transition-transform">
                            <span className="text-white font-bold text-xl">G</span>
                        </div>
                        <span className="text-xl font-bold gradient-text hidden sm:block">
                            Gaurav's Portfolio
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {NAV_LINKS.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleNavClick(link.path, link.hash)}
                                className={`px-4 py-2 rounded-lg transition-all duration-300 ${location.pathname === link.path && !link.hash
                                    ? 'text-accent-cyan bg-accent-cyan/10'
                                    : 'text-text-secondary hover:text-accent-cyan hover:bg-accent-cyan/5'
                                    }`}
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    {/* CTA Button (Desktop) */}
                    <div className="hidden lg:block">
                        <a
                            href="/resume.pdf"
                            download
                            className="btn-primary"
                        >
                            Download CV
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-lg text-text-primary hover:bg-accent-cyan/10 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="lg:hidden bg-bg-secondary border-t border-white/10"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="container mx-auto px-4 py-6 space-y-2">
                            {NAV_LINKS.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => handleNavClick(link.path, link.hash)}
                                    className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${location.pathname === link.path && !link.hash
                                        ? 'text-accent-cyan bg-accent-cyan/10'
                                        : 'text-text-secondary hover:text-accent-cyan hover:bg-accent-cyan/5'
                                        }`}
                                >
                                    {link.name}
                                </button>
                            ))}

                            {/* Mobile CTA */}
                            <a
                                href="/resume.pdf"
                                download
                                className="btn-primary w-full mt-4"
                            >
                                Download CV
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar
