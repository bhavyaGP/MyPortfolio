import { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFileAlt, FaCertificate, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/image.png';
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from '../context/ThemeContext';
import { Button } from './ui/button';

const Navbar = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { href: "https://drive.google.com/file/d/14O-V9dJKSNaT8MSxF9LVBRD62p22rJt0/view?usp=sharing", label: "Resume", icon: <FaFileAlt />, external: true },
        { href: "#certificates", label: "Certificates", icon: <FaCertificate /> },
        { href: "#achievements", label: "Achievements", icon: null },
    ];

    const socials = [
        { href: "https://www.linkedin.com/in/bhavya-prajapati-a8b001256/", icon: <FaLinkedin /> },
        { href: "https://www.github.com/bhavyagp", icon: <FaGithub /> },
        { href: "https://www.twitter.com/5678_bhavya", icon: <FaTwitter /> },
        { href: "https://www.instagram.com/bhavya5.exe", icon: <FaInstagram /> },
    ];

    return (
        <nav className="mb-10 md:mb-20 py-6 px-4 relative z-50">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#hero"
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img className="w-10 h-10 rounded-full object-cover" src={logo} alt="logo" />
                    <span className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Bhavya</span>
                </motion.a>

                {/* Desktop nav */}
                <motion.div
                    className="hidden md:flex items-center gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    {navLinks.map(({ href, label, icon, external }) => (
                        <Button key={label} variant="glow" size="default" asChild>
                            <a href={href} target={external ? '_blank' : '_self'} rel={external ? 'noopener noreferrer' : undefined}>
                                {icon} {label}
                            </a>
                        </Button>
                    ))}

                    <Button variant="glow" size="icon" onClick={toggleTheme}
                        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}>
                        {isDarkMode ? <FaSun /> : <FaMoon />}
                    </Button>

                    {socials.map(({ href, icon }) => (
                        <Button key={href} variant="glow" size="icon" asChild>
                            <a href={href} target="_blank" rel="noopener noreferrer">{icon}</a>
                        </Button>
                    ))}
                </motion.div>

                {/* Mobile: theme + hamburger */}
                <div className="flex md:hidden items-center gap-2">
                    <Button variant="glow" size="icon" onClick={toggleTheme}>
                        {isDarkMode ? <FaSun /> : <FaMoon />}
                    </Button>
                    <Button variant="glow" size="icon" onClick={() => setMenuOpen(o => !o)}>
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </Button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.2 }}
                        className={`md:hidden mt-4 rounded-2xl p-4 flex flex-col gap-3
                            ${isDarkMode ? 'bg-slate-900/95 border border-slate-700' : 'bg-white border border-gray-200'} shadow-xl`}
                    >
                        {navLinks.map(({ href, label, icon, external }) => (
                            <Button key={label} variant="glow" size="default" asChild className="w-full justify-start">
                                <a href={href} target={external ? '_blank' : '_self'} rel={external ? 'noopener noreferrer' : undefined}
                                    onClick={() => setMenuOpen(false)}>
                                    {icon} {label}
                                </a>
                            </Button>
                        ))}

                        <div className="flex gap-2 pt-1">
                            {socials.map(({ href, icon }) => (
                                <Button key={href} variant="glow" size="icon" asChild>
                                    <a href={href} target="_blank" rel="noopener noreferrer">{icon}</a>
                                </Button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
