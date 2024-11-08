// import logo from '../assets/KevinRushLogo.png';
import logo from '../assets/image.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <nav className="mb-20 flex item-center justify-between py-6">
            <motion.div
                className="flex flex-shrink-0 items-center justify-center h-14"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <img className='mx-2 w-10' src={logo} alt="logo" style={{ borderRadius: '50%' }} />
            </motion.div>
            <motion.div
                className='m-8 flex items-center justify-center gap-4 text-2xl'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                    <a href="https://www.linkedin.com/in/bhavya-prajapati-a8b001256/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                    <a href="https://www.github.com/bhavyagp" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                    <a href="https://www.twitter.com/5678_bhavya" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                    <a href="https://www.instagram.com/bhavya5.exe" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </motion.div>
            </motion.div>
        </nav>
    );
}

export default Navbar;