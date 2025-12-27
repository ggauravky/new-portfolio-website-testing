import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaHeart, FaCode } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { SOCIAL_LINKS } from '../../utils/constants'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const socialIcons = [
        { icon: FaGithub, url: SOCIAL_LINKS.github, label: 'GitHub' },
        { icon: FaLinkedin, url: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
        { icon: FaInstagram, url: SOCIAL_LINKS.instagram, label: 'Instagram' },
        { icon: SiLeetcode, url: SOCIAL_LINKS.leetcode, label: 'LeetCode' },
        { icon: FaEnvelope, url: SOCIAL_LINKS.email, label: 'Email' },
    ]

    const footerLinks = {
        navigation: [
            { name: 'Home', path: '/' },
            { name: 'Projects', path: '/projects' },
            { name: 'Blogs', path: '/blogs' },
        ],
        resources: [
            { name: 'Resume', path: '/resume.pdf' },
            { name: 'GitHub', url: SOCIAL_LINKS.github },
            { name: 'LinkedIn', url: SOCIAL_LINKS.linkedin },
        ],
    }

    return (
        <footer className="bg-bg-secondary border-t border-white/10">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* About Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-ai-gradient flex items-center justify-center">
                                <span className="text-white font-bold text-xl">G</span>
                            </div>
                            <span className="text-xl font-bold gradient-text">Gaurav's Portfolio</span>
                        </div>
                        <p className="text-text-secondary mb-4 max-w-md">
                            Passionate AI & Data Science enthusiast building intelligent solutions with Python and modern web technologies. Currently seeking internship opportunities.
                        </p>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {socialIcons.map(({ icon: Icon, url, label }) => (
                                <motion.a
                                    key={label}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-bg-tertiary text-text-secondary hover:text-accent-cyan hover:bg-accent-cyan/10 transition-all duration-300"
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-text-primary mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            {footerLinks.navigation.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-text-secondary hover:text-accent-cyan transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-text-primary mb-4">Resources</h3>
                        <ul className="space-y-2">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    {link.url ? (
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-text-secondary hover:text-accent-cyan transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    ) : (
                                        <a
                                            href={link.path}
                                            download
                                            className="text-text-secondary hover:text-accent-cyan transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-text-secondary text-sm">
                            © {currentYear} Gaurav Kumar Yadav. All rights reserved.
                        </p>

                        <p className="text-text-secondary text-sm flex items-center">
                            Built with <FaHeart className="text-red-500 mx-1" /> using React & Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
