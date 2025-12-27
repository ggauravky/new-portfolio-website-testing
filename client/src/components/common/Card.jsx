import { motion } from 'framer-motion'

const Card = ({
    children,
    className = '',
    hover = true,
    glass = false,
    ...props
}) => {
    const baseClasses = `
    ${glass ? 'glass' : 'card'}
    ${className}
  `

    const hoverAnimation = hover
        ? {
            whileHover: {
                y: -8,
                transition: { duration: 0.3 },
            },
        }
        : {}

    return (
        <motion.div
            className={baseClasses}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            {...hoverAnimation}
            {...props}
        >
            {children}
        </motion.div>
    )
}

export default Card
