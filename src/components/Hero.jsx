import { HERO_CONTENT } from '../constants'
// import profilePic from '../assets/kevinRushProfile.jpg'
import profilePic from '../assets/projects/bhavya3.jpg'
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <div className="border-neutral-900 pb-4 lg:mb-35 pl-10">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="pb-16 text-4xl font-medium tracking-tight sm:text-5xl lg:mt-16 lg:text-6xl"
                        >
                            Bhavya Prajapati
                        </motion.h1>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="bg-gradient-to-r from-pink-400 via-slat-500 to-violet-500 bg-clip-text text-xl tracking-tight text-transparent sm:text-2xl"
                        >
                            Backend Developer
                        </motion.span>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="my-2 max-w-xl py-6 font-light tracking-tighter text-sm sm:text-base"
                        >
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <motion.img
                            src={profilePic}
                            alt="profile"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.5, duration: 1 }}
                            className="rounded-full object-cover"
                            style={{ height: 'auto', maxHeight: '300px', width: '100%', maxWidth: '300px', sm: { maxHeight: '450px', maxWidth: '450px' } }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero