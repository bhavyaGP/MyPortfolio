import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <div className="border-b border-neutral-700 pb-4">
            <h2 className="my-20 text-center text-4xl text-neutral-100">Experience</h2>
            <div>
                {EXPERIENCES.map(({ year, role, company, description, technologies }, index) => (
                    <motion.div 
                        key={index} 
                        className="mb-8 flex flex-wrap items-center justify-center gap-4"
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
                            <p className="mb-2 text-sm text-neutral-400">{year}</p>
                        </motion.div>
                        <motion.div 
                            className="w-full max-w-xl lg:w-3/4"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h6 className="text-2xl font-semibold text-neutral-100">
                                {role} - <span className="text-lg font-medium text-purple-400">{company}</span>
                            </h6>
                            <p className="mb-4 text-neutral-300">{description}</p>
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
