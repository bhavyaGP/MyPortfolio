import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { useTheme } from '../context/ThemeContext';

const Experience = () => {
    const { isDarkMode } = useTheme();
    
    return (
        <div className={`border-b ${isDarkMode ? 'border-neutral-700' : 'border-gray-300'} pb-8 mb-8`}>
            <h2 className={`my-20 text-center text-4xl font-bold ${isDarkMode ? 'text-neutral-100' : 'text-gray-900'}`}>
                Experience
            </h2>
            <div className="leading-relaxed">
                {EXPERIENCES.map(({ year, role, company, description, technologies }, index) => (
                    <motion.div 
                        key={index} 
                        className="mb-12 flex flex-wrap items-start justify-center gap-4"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <motion.div 
                            className="w-full lg:w-1/4"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <p className={`mb-2 text-sm font-medium ${isDarkMode ? 'text-neutral-400' : 'text-gray-600'}`}>
                                {year}
                            </p>
                        </motion.div>
                        <motion.div 
                            className="w-full max-w-xl lg:w-3/4"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h6 className={`text-2xl font-semibold mb-3 ${isDarkMode ? 'text-neutral-100' : 'text-gray-900'}`}>
                                {role} - <span className={`text-lg font-medium ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>{company}</span>
                            </h6>
                            <p className={`mb-5 leading-relaxed ${isDarkMode ? 'text-neutral-300' : 'text-gray-700'}`}>
                                {description}
                            </p>
                            <div className="flex flex-wrap">
                                {technologies.map((technology, techIndex) => (
                                    <span key={techIndex} className="mr-2 mt-2 rounded bg-black-900 px-2 py-1 text-sm font-medium text-purple-800">
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
