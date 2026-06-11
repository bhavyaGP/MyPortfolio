import { EXPERIENCES } from "../constants";
import {EXPERIENCES_V2} from "../constants";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
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
                    Work <span className="bg-gradient-to-r from-neutral-200 to-neutral-500 bg-clip-text text-transparent">Experience</span>
                </h2>
                <p className="text-neutral-500 text-sm">Where I've contributed</p>
                <div className="w-16 h-1 bg-white/20 mx-auto rounded-full mt-3" />
            </motion.div>

            <div className="max-w-3xl mx-auto relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10 hidden sm:block" />

                {EXPERIENCES_V2.map(({ year, role, company, description, technologies }, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        className="relative sm:pl-16 mb-6 last:mb-0"
                    >
                        {/* Timeline dot */}
                        <div className="hidden sm:flex absolute left-0 top-6 w-12 h-12 rounded-full liquid-glass items-center justify-center">
                            <FaBriefcase className="text-neutral-300 text-sm" />
                        </div>

                        <div className="liquid-glass-strong rounded-2xl p-6">
                            {/* Header */}
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                                <div>
                                    <h3 className="text-lg font-bold text-white leading-snug">{role}</h3>
                                    <p className="text-neutral-300 text-sm font-medium mt-0.5">{company}</p>
                                </div>
                                <span className="flex items-center gap-1.5 text-neutral-400 text-xs whitespace-nowrap liquid-glass px-3 py-1.5 rounded-full self-start">
                                    <FaCalendarAlt className="text-[9px]" /> {year}
                                </span>
                            </div>

                            {/* Description */}
                            <ul className="mb-4 space-y-1.5">
                                {description.split('\n').filter(Boolean).map((line, i) => (
                                    <li key={i} className="text-neutral-400 text-sm leading-relaxed flex gap-2">
                                        {line.startsWith('-') ? (
                                            <>
                                                <span className="text-neutral-600 mt-1 shrink-0">•</span>
                                                <span>{line.slice(1).trim()}</span>
                                            </>
                                        ) : (
                                            <span>{line}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>

                            {/* Tech tags */}
                            <div className="flex flex-wrap gap-1.5">
                                {technologies.map((tech, i) => (
                                    <span key={i} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
