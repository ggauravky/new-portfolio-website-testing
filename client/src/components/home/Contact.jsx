import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPaperPlane } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { submitContactForm } from '../../services/api'
import { useForm } from '../../hooks/useForm'
import { SOCIAL_LINKS, VALIDATION_MESSAGES } from '../../utils/constants'
import Button from '../common/Button'

const Contact = () => {
    const [submitStatus, setSubmitStatus] = useState(null)

    // Validation function
    const validate = (values) => {
        const errors = {}

        if (!values.name || values.name.length < 2) {
            errors.name = VALIDATION_MESSAGES.name.min
        }

        if (!values.email || !/^\S+@\S+\.\S+$/.test(values.email)) {
            errors.email = VALIDATION_MESSAGES.email.invalid
        }

        if (!values.message || values.message.length < 10) {
            errors.message = VALIDATION_MESSAGES.message.min
        }

        return errors
    }

    // Submit handler
    const handleSubmit = async (formValues) => {
        try {
            await submitContactForm(formValues)
            setSubmitStatus({
                type: 'success',
                message: 'Thank you for your message! I will get back to you soon.'
            })

            // Clear success message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000)
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: error.message || 'Failed to send message. Please try again.'
            })
        }
    }

    const {
        values,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit: onSubmit
    } = useForm(
        { name: '', email: '', subject: '', message: '' },
        handleSubmit,
        validate
    )

    const socialLinks = [
        { icon: FaGithub, url: SOCIAL_LINKS.github, label: 'GitHub', color: 'hover:text-gray-400' },
        { icon: FaLinkedin, url: SOCIAL_LINKS.linkedin, label: 'LinkedIn', color: 'hover:text-blue-500' },
        { icon: FaInstagram, url: SOCIAL_LINKS.instagram, label: 'Instagram', color: 'hover:text-pink-500' },
        { icon: SiLeetcode, url: SOCIAL_LINKS.leetcode, label: 'LeetCode', color: 'hover:text-yellow-500' },
        { icon: FaEnvelope, url: SOCIAL_LINKS.email, label: 'Email', color: 'hover:text-red-500' },
    ]

    return (
        <section id="contact" className="section bg-bg-secondary">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        Have a question or want to work together? Feel free to reach out!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={onSubmit} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name">Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className={errors.name ? 'border-red-500' : ''}
                                />
                                {errors.name && <p className="error-text">{errors.name}</p>}
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    placeholder="your.email@example.com"
                                    className={errors.email ? 'border-red-500' : ''}
                                />
                                {errors.email && <p className="error-text">{errors.email}</p>}
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={values.subject}
                                    onChange={handleChange}
                                    placeholder="What's this about?"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={values.message}
                                    onChange={handleChange}
                                    rows="6"
                                    placeholder="Your message here..."
                                    className={errors.message ? 'border-red-500' : ''}
                                />
                                {errors.message && <p className="error-text">{errors.message}</p>}
                            </div>

                            {/* Submit Status */}
                            {submitStatus && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`p-4 rounded-lg ${submitStatus.type === 'success'
                                        ? 'bg-green-500/10 border border-green-500 text-green-500'
                                        : 'bg-red-500/10 border border-red-500 text-red-500'
                                        }`}
                                >
                                    {submitStatus.message}
                                </motion.div>
                            )}

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                variant="primary"
                                fullWidth
                                loading={isSubmitting}
                                disabled={isSubmitting}
                            >
                                <FaPaperPlane className="mr-2" />
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>
                        </form>
                    </motion.div>

                    {/* Contact Info & Social Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Info Card */}
                        <div className="card">
                            <h3 className="text-2xl font-bold gradient-text mb-4">Let's Connect!</h3>
                            <p className="text-text-secondary mb-6">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-accent-cyan/10">
                                        <FaEnvelope className="text-accent-cyan" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-text-primary mb-1">Email</h4>
                                        <a
                                            href={SOCIAL_LINKS.email}
                                            className="text-text-secondary hover:text-accent-cyan transition-colors"
                                        >
                                            kumar.gaurav.yadav2007@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-accent-purple/10">
                                        <FaGithub className="text-accent-purple" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-text-primary mb-1">GitHub</h4>
                                        <a
                                            href={SOCIAL_LINKS.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-text-secondary hover:text-accent-cyan transition-colors"
                                        >
                                            @ggauravky
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="card">
                            <h3 className="text-xl font-bold text-text-primary mb-4">Follow Me</h3>
                            <div className="flex flex-wrap gap-4">
                                {socialLinks.map(({ icon: Icon, url, label, color }) => (
                                    <motion.a
                                        key={label}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg bg-bg-tertiary text-text-secondary ${color} transition-all duration-300 hover:scale-105`}
                                        whileHover={{ y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Icon className="text-xl" />
                                        <span className="font-medium">{label}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Availability Status */}
                        <div className="card border-2 border-green-500/20 bg-green-500/5">
                            <div className="flex items-center space-x-3">
                                <div className="relative">
                                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                                    <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-text-primary">Available for Opportunities</h4>
                                    <p className="text-sm text-text-secondary">
                                        Open to internships and collaborations
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
