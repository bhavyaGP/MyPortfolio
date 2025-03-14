import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFileAlt, FaCertificate } from 'react-icons/fa';
import logo from '../assets/image.png';
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <motion.div
                className="flex flex-shrink-0 items-center justify-center h-14"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <img className="mx-2 w-10" src={logo} alt="logo" style={{ borderRadius: '50%' }} />
            </motion.div>

            <div className="flex items-center gap-8">
                {/* Buttons Section */}
                <motion.div
                    className="flex items-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <motion.button
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ backgroundColor: 'transparent' }}
                    >
                        <FaFileAlt className="text-lg" />
                        <span>
                           <a href="https://drive.google.com/file/d/14O-V9dJKSNaT8MSxF9LVBRD62p22rJt0/view?usp=sharing" target="_blank">Resume</a>  
                            </span>
                    </motion.button>

                    <motion.button
                        className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ backgroundColor: 'transparent' }}
                    >
                        <FaCertificate className="text-lg" />
                        <span>Certificates</span>
                    </motion.button>
                </motion.div>

                {/* Social Icons Section */}
                <motion.div
                    className="flex items-center justify-center gap-4 text-2xl"
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
            </div>
        </nav>
    );
}

export default Navbar;