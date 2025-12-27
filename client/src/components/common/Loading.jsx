import { motion } from 'framer-motion'

const Loading = ({ fullScreen = false, message = 'Loading...' }) => {
    if (fullScreen) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-bg-primary">
                <LoadingContent message={message} />
            </div>
        )
    }

    return (
        <div className="flex items-center justify-center py-12">
            <LoadingContent message={message} />
        </div>
    )
}

const LoadingContent = ({ message }) => {
    return (
        <div className="text-center">
            {/* Animated loading spinner */}
            <motion.div
                className="relative w-20 h-20 mx-auto mb-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
                <div className="absolute inset-0 rounded-full border-4 border-accent-cyan/20"></div>
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-accent-cyan border-r-accent-purple"></div>
            </motion.div>

            {/* Loading message */}
            <motion.p
                className="text-text-secondary text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {message}
            </motion.p>

            {/* Animated dots */}
            <div className="flex justify-center gap-2 mt-3">
                {[0, 1, 2].map((index) => (
                    <motion.div
                        key={index}
                        className="w-2 h-2 rounded-full bg-accent-cyan"
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: index * 0.2,
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default Loading
