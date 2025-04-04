import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFileAlt, FaCertificate, FaSun, FaMoon, FaFont, FaMinus, FaPlus } from 'react-icons/fa';
import logo from '../assets/image.png';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';



const NavbarButton = ({ children, to, isExternal = false }) => {
    return (
        <motion.div
            className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl">
                {isExternal ? (
                    <a
                        href={to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center"
                    >
                        {children}
                    </a>
                ) : (
                    <Link
                        to={to}
                        className="inline-flex items-center justify-center"
                    >
                        {children}
                    </Link>
                )}
            </span>
        </motion.div>
    );
};

const SocialButton = ({ icon, to }) => {
    return (
        <motion.div
            className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none h-10 w-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 text-white backdrop-blur-3xl">
                <a
                    href={to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center"
                >
                    {icon}
                </a>
            </span>
        </motion.div>
    );
};

const ThemeToggleButton = ({ isDarkMode, toggleTheme }) => {
    return (
        <motion.div
            className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none h-10 w-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 text-white backdrop-blur-3xl">
                <button
                    onClick={toggleTheme}
                    className="inline-flex items-center justify-center"
                    aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                    {isDarkMode ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
                </button>
            </span>
        </motion.div>
    );
};

const Navbar = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <nav className="mb-20 flex items-center justify-between py-6 px-4">
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
                        <span className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Bhavya</span>
                    </div>
                </Link>
            </motion.div>

            <div className="flex items-center gap-6">
                <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <NavbarButton 
                        to="https://drive.google.com/file/d/14O-V9dJKSNaT8MSxF9LVBRD62p22rJt0/view?usp=sharing" 
                        isExternal={true}
                    >
                        <FaFileAlt className="mr-2" /> Resume
                    </NavbarButton>

                    <NavbarButton to="/certificates">
                        <FaCertificate className="mr-2" /> Certificates
                    </NavbarButton>

                    <NavbarButton to="/achievements">
                        Achievements
                    </NavbarButton>
                </motion.div>

                {/* Theme Toggle Button */}
                <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <ThemeToggleButton isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
                </motion.div>

                {/* Social Icons Section */}
                <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <SocialButton 
                        icon={<FaLinkedin className="text-lg" />} 
                        to="https://www.linkedin.com/in/bhavya-prajapati-a8b001256/" 
                    />

                    <SocialButton 
                        icon={<FaGithub className="text-lg" />}
                        to="https://www.github.com/bhavyagp"
                    />

                    <SocialButton 
                        icon={<FaTwitter className="text-lg" />}
                        to="https://www.twitter.com/5678_bhavya"
                    />

                    <SocialButton
                        icon={<FaInstagram className="text-lg" />}
                        to="https://www.instagram.com/bhavya5.exe"
                    />
                </motion.div>
            </div>
        </nav>
    );
};

export default Navbar;