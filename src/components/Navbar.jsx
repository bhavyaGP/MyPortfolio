import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFileAlt, FaCertificate } from 'react-icons/fa';
import logo from '../assets/image.png';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const AnimatedButton = ({ children, className = "" }) => {
    return (
        <motion.button
            className={`relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${className}`}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                {children}
            </span>
        </motion.button>
    );
};

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <motion.div
                className="flex flex-shrink-0 items-center justify-center h-14"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileTap={{ scale: 0.97 }}
            >
                <Link to="/">
                    <div className="flex items-center">
                        <img className="mx-2 w-10" src={logo} alt="logo" style={{ borderRadius: '50%' }} />
                        <span className="text-lg font-bold">Bhavya</span>
                    </div>
                </Link>
            </motion.div>

            <div className="flex items-center gap-8">
                <motion.div
                    className="flex items-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <AnimatedButton>
                        <a href="https://drive.google.com/file/d/14O-V9dJKSNaT8MSxF9LVBRD62p22rJt0/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2">
                            <FaFileAlt className="text-lg" />
                            <span>Resume</span>
                        </a>
                    </AnimatedButton>

                    <AnimatedButton>
                        <Link to="/certificates" className="flex items-center gap-2">
                            <FaCertificate className="text-lg" />
                            <span>Certificates</span>
                        </Link>
                    </AnimatedButton>

                    <AnimatedButton>
                        <Link to="/achievements" className="flex items-center gap-2">
                            <span>Achievements</span>
                        </Link>
                    </AnimatedButton>
                </motion.div>

                {/* Social Icons Section */}
                <motion.div
                    className="flex items-center justify-center gap-4 text-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <AnimatedButton className="h-10 w-10">
                        <a href="https://www.linkedin.com/in/bhavya-prajapati-a8b001256/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </AnimatedButton>

                    <AnimatedButton className="h-10 w-10">
                        <a href="https://www.github.com/bhavyagp" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    </AnimatedButton>

                    <AnimatedButton className="h-10 w-10">
                        <a href="https://www.twitter.com/5678_bhavya" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                    </AnimatedButton>

                    <AnimatedButton className="h-10 w-10">
                        <a href="https://www.instagram.com/bhavya5.exe" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </AnimatedButton>
                </motion.div>
            </div>
        </nav>
    );
};

export default Navbar;