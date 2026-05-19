import { useState, useRef, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaCertificate, FaBars, FaTimes, FaPalette } from 'react-icons/fa';
import logo from '../assets/image.png';
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, BG_VARIANTS } from '../context/ThemeContext';
import { Button } from './ui/button';

const BG_PREVIEWS = {
  'old-purple':  'bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.5),rgba(0,0,0,0))] bg-neutral-950',
  'dark-purple': 'bg-fuchsia-950',
  'blue-black':  'bg-[radial-gradient(circle_at_50%_120%,#6633ee,#000)]',
  'dot':         'bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:6px_6px] bg-[#000]',
  'lines':       'bg-black',
};

const BgPicker = () => {
    const { bgVariant, setBgVariant } = useTheme();
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    return (
        <div className="relative" ref={ref}>
            <Button variant="glass" size="icon" onClick={() => setOpen(o => !o)} aria-label="Change background">
                <FaPalette />
            </Button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 top-12 z-[200] flex flex-col gap-2 rounded-xl p-2 w-36 liquid-glass-subtle"
                    >
                        {BG_VARIANTS.map(({ id, label }) => (
                            <button
                                key={id}
                                onClick={() => { setBgVariant(id); setOpen(false); }}
                                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs font-medium transition-colors
                                    ${bgVariant === id ? 'bg-white/15 text-white' : 'text-neutral-400 hover:bg-white/10 hover:text-white'}`}
                            >
                                <span className={`w-5 h-5 rounded-sm border border-white/20 shrink-0 ${BG_PREVIEWS[id]}`} />
                                {label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { bgVariant, setBgVariant } = useTheme();

    const navLinks = [
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
        <div className="relative mx-4 mt-4 mb-10 md:mb-20 z-50">
            {/* Pill navbar — always rounded-full */}
            <nav className="py-3 px-4 rounded-full liquid-glass">
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
                        <span className="text-lg font-bold text-white">Bhavya</span>
                    </motion.a>

                    {/* Desktop nav */}
                    <motion.div
                        className="hidden md:flex items-center gap-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        {navLinks.map(({ href, label, icon, external }) => (
                            <Button key={label} variant="glass" size="default" asChild>
                                <a href={href} target={external ? '_blank' : '_self'} rel={external ? 'noopener noreferrer' : undefined}>
                                    {icon} {label}
                                </a>
                            </Button>
                        ))}

                        <BgPicker />

                        {socials.map(({ href, icon }) => (
                            <Button key={href} variant="glass" size="icon" asChild>
                                <a href={href} target="_blank" rel="noopener noreferrer">{icon}</a>
                            </Button>
                        ))}
                    </motion.div>

                    {/* Mobile: hamburger only */}
                    <div className="flex md:hidden items-center gap-2">
                        <Button variant="glass" size="icon" onClick={() => setMenuOpen(o => !o)}>
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu — outside nav, slides down below pill */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden absolute top-full left-0 right-0 mt-2 rounded-2xl p-4 flex flex-col gap-3 liquid-glass-strong"
                    >
                        {navLinks.map(({ href, label, icon, external }) => (
                            <Button key={label} variant="glass" size="default" asChild className="w-full justify-start">
                                <a href={href} target={external ? '_blank' : '_self'} rel={external ? 'noopener noreferrer' : undefined}
                                    onClick={() => setMenuOpen(false)}>
                                    {icon} {label}
                                </a>
                            </Button>
                        ))}

                        <div className="flex gap-2 pt-1">
                            {socials.map(({ href, icon }) => (
                                <Button key={href} variant="glass" size="icon" asChild>
                                    <a href={href} target="_blank" rel="noopener noreferrer">{icon}</a>
                                </Button>
                            ))}
                        </div>

                        {/* Theme swatches */}
                        <div className="pt-1 border-t border-white/10">
                            <p className="text-neutral-500 text-[10px] mb-2 flex items-center gap-1.5"><FaPalette className="text-[9px]" /> Theme</p>
                            <div className="flex gap-2 flex-wrap">
                                {BG_VARIANTS.map(({ id, label }) => (
                                    <button
                                        key={id}
                                        onClick={() => setBgVariant(id)}
                                        title={label}
                                        className={`w-7 h-7 rounded-lg border-2 transition-all ${BG_PREVIEWS[id]} ${bgVariant === id ? 'border-white scale-110' : 'border-white/20'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
