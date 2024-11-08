import { RiReactjsLine, RiNodejsLine } from "react-icons/ri";
import { SiMongodb, SiMysql, SiPostgresql, SiGithub, SiGit, SiDocker } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { SiPostman, SiPrisma } from "react-icons/si";
import { motion } from "framer-motion";

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

const TechnologiesAndTools = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <h2 className='my-20 text-center text-4xl'>Technologies</h2>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className='text-5xl text-cyan-400' />
                </motion.div>
                <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiNodejsLine className='text-5xl text-green-400' />
                </motion.div>
                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMongodb className='text-5xl text-green-600' />
                </motion.div>
                <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMysql className='text-5xl text-blue-500' />
                </motion.div>
                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiPostgresql className='text-5xl text-blue-700' />
                </motion.div>
                <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <DiRedis className='text-5xl text-red-600' />
                </motion.div>
            </div>

            <h2 className='my-20 text-center text-4xl'>Tools</h2>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiGithub className='text-5xl text-neutral-100' />
                </motion.div>
                <motion.div variants={iconVariants(1.8)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiPostman className='text-5xl text-orange-500' />
                </motion.div>
                <motion.div variants={iconVariants(2.2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiGit className='text-5xl text-red-500' />
                </motion.div>
                <motion.div variants={iconVariants(1.7)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiDocker className='text-5xl text-blue-700' />
                </motion.div>
                <motion.div variants={iconVariants(2.2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiPrisma className='text-5xl text-white-900' />
                </motion.div>
            </div>
        </div>
    );
}

export default TechnologiesAndTools;