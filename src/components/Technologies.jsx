import { RiReactjsLine, RiNodejsLine } from "react-icons/ri";
import { SiMongodb, SiMysql, SiPostgresql, SiGithub, SiGit, SiDocker } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { SiPostman, SiPrisma } from "react-icons/si";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const iconVariants = (duration) => ({
    initial: { y: 0 },
    animate: {
        y: [-8, 8],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    }
});

const iconRotateVariants = {
    animate: { 
        rotate: [0, 10, 0, -10, 0],
        scale: [1, 1.05, 1, 1.05, 1]
    },
    transition: { 
        duration: 3, 
        ease: "easeInOut", 
        repeat: Infinity,
        repeatType: "loop"
    }
};

const TechnologiesAndTools = () => {
    const { isDarkMode } = useTheme();
    
    const borderClass = isDarkMode ? 'border-gray-700' : 'border-gray-200';
    const sectionBorderClass = isDarkMode ? 'border-gray-700' : 'border-gray-300';
    const headingClass = isDarkMode ? 'text-neutral-100' : 'text-gray-900';
    const iconContainerClass = `rounded border ${borderClass} p-4 bg-transparent hover:border-gray-500 transition-all duration-200 ease-in-out`;
    
    return (
        <div className={`border-b ${sectionBorderClass} pb-24`}>
            <h2 className={`my-20 text-center text-4xl font-bold ${headingClass}`}>Technologies</h2>
            <div className='flex flex-wrap items-center justify-center gap-5'>
                <motion.div 
                    variants={iconVariants(3.5)} 
                    initial="initial" 
                    animate="animate" 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${iconContainerClass} rounded-lg`}
                >
                    <motion.div
                        animate={iconRotateVariants.animate}
                        transition={iconRotateVariants.transition}
                    >
                        <RiReactjsLine className='text-5xl text-cyan-400' />
                    </motion.div>
                </motion.div>
                <motion.div 
                    variants={iconVariants(3.5)} 
                    initial="initial" 
                    animate="animate" 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${iconContainerClass} rounded-lg`}
                >
                    <motion.div
                        animate={iconRotateVariants.animate}
                        transition={iconRotateVariants.transition}
                    >
                        <RiNodejsLine className='text-5xl text-green-400' />
                    </motion.div>
                </motion.div>
                <motion.div 
                    variants={iconVariants(3.5)} 
                    initial="initial" 
                    animate="animate" 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${iconContainerClass} rounded-lg`}
                >
                    <motion.div
                        animate={iconRotateVariants.animate}
                        transition={iconRotateVariants.transition}
                    >
                        <SiMongodb className='text-5xl text-green-600' />
                    </motion.div>
                </motion.div>
                <motion.div 
                    variants={iconVariants(3.5)} 
                    initial="initial" 
                    animate="animate" 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${iconContainerClass} rounded-lg`}
                >
                    <motion.div
                        animate={iconRotateVariants.animate}
                        transition={iconRotateVariants.transition}
                    >
                        <SiMysql className='text-5xl text-blue-500' />
                    </motion.div>
                </motion.div>
                <motion.div 
                    variants={iconVariants(3.5)} 
                    initial="initial" 
                    animate="animate" 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${iconContainerClass} rounded-lg`}
                >
                    <motion.div
                        animate={iconRotateVariants.animate}
                        transition={iconRotateVariants.transition}
                    >
                        <SiPostgresql className='text-5xl text-blue-700' />
                    </motion.div>
                </motion.div>
                <motion.div 
                    variants={iconVariants(3.5)} 
                    initial="initial" 
                    animate="animate" 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${iconContainerClass} rounded-lg`}
                >
                    <motion.div
                        animate={iconRotateVariants.animate}
                        transition={iconRotateVariants.transition}
                    >
                        <DiRedis className='text-5xl text-red-600' />
                    </motion.div>
                </motion.div>
            </div>

            <div className={`my-16 mx-auto w-3/4 border-b ${sectionBorderClass}`}></div>

            <h2 className={`my-20 text-center text-4xl font-bold ${headingClass}`}>Tools</h2>
            <div className='flex flex-wrap items-center justify-center gap-5'>
                <motion.div 
                    variants={iconVariants(3.5)} 
                    initial="initial" 
                    animate="animate" 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${iconContainerClass} rounded-lg`}
                >
                    <motion.div
                        animate={iconRotateVariants.animate}
                        transition={iconRotateVariants.transition}
                    >
                        <SiGithub className={`text-5xl ${isDarkMode ? 'text-neutral-100' : 'text-gray-900'}`} />
                    </motion.div>
                </motion.div>
                <motion.div 
                    variants={iconVariants(3.5)} 
                    initial="initial" 
                    animate="animate" 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${iconContainerClass} rounded-lg`}
                >
                    <motion.div
                        animate={iconRotateVariants.animate}
                        transition={iconRotateVariants.transition}
                    >
                        <SiPostman className='text-5xl text-orange-500' />
                    </motion.div>
                </motion.div>
                <motion.div 
                    variants={iconVariants(3.5)} 
                    initial="initial" 
                    animate="animate" 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${iconContainerClass} rounded-lg`}
                >
                    <motion.div
                        animate={iconRotateVariants.animate}
                        transition={iconRotateVariants.transition}
                    >
                        <SiGit className='text-5xl text-red-500' />
                    </motion.div>
                </motion.div>
                <motion.div 
                    variants={iconVariants(3.5)} 
                    initial="initial" 
                    animate="animate" 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${iconContainerClass} rounded-lg`}
                >
                    <motion.div
                        animate={iconRotateVariants.animate}
                        transition={iconRotateVariants.transition}
                    >
                        <SiDocker className='text-5xl text-blue-700' />
                    </motion.div>
                </motion.div>
                <motion.div 
                    variants={iconVariants(3.5)} 
                    initial="initial" 
                    animate="animate" 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${iconContainerClass} rounded-lg`}
                >
                    <motion.div
                        animate={iconRotateVariants.animate}
                        transition={iconRotateVariants.transition}
                    >
                        <SiPrisma className='text-5xl text-purple-700' />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default TechnologiesAndTools;