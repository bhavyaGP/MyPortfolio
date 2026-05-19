import aboutImage from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="border-b border-white/10 pb-16 mb-8">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center my-16"
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    About <span className="bg-gradient-to-r from-neutral-200 to-neutral-500 bg-clip-text text-transparent">Me</span>
                </h2>
                <p className="text-neutral-500 text-sm">Who I am & what I do</p>
                <div className="w-16 h-1 bg-white/20 mx-auto rounded-full mt-3" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden">
                        <img
                            src={aboutImage}
                            alt="Bhavya Prajapati"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-5"
                >
                    {/* Bio */}
                    <div className="liquid-glass-strong rounded-2xl p-5">
                        {ABOUT_TEXT.split('\n\n').map((para, i) => (
                            <p key={i} className={`text-neutral-400 text-sm leading-relaxed ${i > 0 ? 'mt-3' : ''}`}>
                                {para}
                            </p>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
