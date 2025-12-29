import { motion } from 'framer-motion'
import { ABOUT_CONTENT, LEARNING_TIMELINE } from '../../utils/constants'

const About = () => {
    return (
        <section id="about" className="section bg-bg-secondary">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto text-sm sm:text-base px-4">
                        Get to know my journey in AI, data science, and technology
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 mb-12 sm:mb-16">
                    {/* Story Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4 sm:space-y-6"
                    >
                        <div className="card">
                            <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-3 sm:mb-4">Who I Am</h3>
                            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">{ABOUT_CONTENT.intro}</p>
                        </div>

                        <div className="card">
                            <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-3 sm:mb-4">My Journey</h3>
                            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">{ABOUT_CONTENT.journey}</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4 sm:space-y-6"
                    >
                        <div className="card">
                            <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-3 sm:mb-4">My Goal</h3>
                            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">{ABOUT_CONTENT.goal}</p>
                        </div>

                        <div className="card">
                            <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-3 sm:mb-4">Skills & Expertise</h3>
                            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">{ABOUT_CONTENT.skills}</p>
                        </div>
                    </motion.div>
                </div>

                {/* Learning Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
                        <span className="gradient-text">Learning</span> Journey
                    </h3>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-purple to-accent-cyan"></div>

                        <div className="space-y-6 sm:space-y-8">
                            {LEARNING_TIMELINE.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                        } flex-row`}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent-cyan shadow-lg shadow-accent-cyan/50 transform -translate-x-1/2 z-10"></div>

                                    {/* Content */}
                                    <div className={`w-full md:w-5/12 ml-10 sm:ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                        <div className="card hover:shadow-xl hover:shadow-accent-cyan/10">
                                            <div className="text-accent-cyan font-bold text-sm sm:text-base mb-2">{item.year}</div>
                                            <h4 className="text-lg sm:text-xl font-bold text-text-primary mb-2">{item.title}</h4>
                                            <p className="text-text-secondary text-xs sm:text-sm">{item.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* GitHub Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-12 sm:mt-16 lg:mt-20"
                >
                    <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
                        <span className="gradient-text">GitHub</span> Statistics
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                        {/* GitHub Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="card flex items-center justify-center p-4 sm:p-6"
                        >
                            <img
                                src="https://github-readme-stats.vercel.app/api?username=ggauravky&show_icons=true&theme=nightowl&hide_border=true&title_color=00d9ff&icon_color=bd00ff&text_color=ffffff&bg_color=0d1117"
                                alt="GitHub Stats"
                                className="w-full h-auto rounded-lg"
                                loading="lazy"
                            />
                        </motion.div>

                        {/* GitHub Streak Stats */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="card flex items-center justify-center p-4 sm:p-6"
                        >
                            <img
                                src="https://nirzak-streak-stats.vercel.app/?user=ggauravky&theme=nightowl&hide_border=true"
                                alt="GitHub Streak"
                                className="w-full h-auto rounded-lg"
                                loading="lazy"
                            />
                        </motion.div>

                        {/* Top Languages */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="card flex items-center justify-center p-4 sm:p-6 md:col-span-2"
                        >
                            <img
                                src="https://github-readme-stats.vercel.app/api/top-langs/?username=ggauravky&layout=compact&theme=nightowl&hide_border=true&title_color=00d9ff&text_color=ffffff&bg_color=0d1117"
                                alt="Top Languages"
                                className="w-full max-w-xl h-auto rounded-lg"
                                loading="lazy"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
