import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaPaperPlane } from "react-icons/fa";

const SOCIALS = [
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/bhavya-prajapati-a8b001256/", label: "LinkedIn" },
    { icon: <FaGithub />,   href: "https://www.github.com/bhavyagp",                          label: "GitHub" },
    { icon: <FaTwitter />,  href: "https://www.twitter.com/5678_bhavya",                      label: "Twitter" },
    { icon: <FaInstagram />,href: "https://www.instagram.com/bhavya5.exe",                    label: "Instagram" },
];

const Contact = () => {
    return (
        <div className="pb-16 mb-8">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center my-16"
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    Get In <span className="bg-gradient-to-r from-neutral-200 to-neutral-500 bg-clip-text text-transparent">Touch</span>
                </h2>
                <p className="text-neutral-500 text-sm">Open to opportunities & collaborations</p>
                <div className="w-16 h-1 bg-white/20 mx-auto rounded-full mt-3" />
            </motion.div>

            <div className="max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="liquid-glass-strong rounded-3xl p-8 flex flex-col gap-6"
                >
                    {/* Info rows */}
                    <div className="flex flex-col gap-4">
                        <a href={`mailto:${CONTACT.email}`}
                            className="flex items-center gap-4 group liquid-glass rounded-2xl px-5 py-4 hover:bg-white/10 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                <FaEnvelope className="text-neutral-300 text-sm" />
                            </div>
                            <div>
                                <p className="text-neutral-500 text-[10px] uppercase tracking-widest mb-0.5">Email</p>
                                <p className="text-white text-sm font-medium group-hover:text-neutral-200">{CONTACT.email}</p>
                            </div>
                        </a>

                        <div className="flex items-center gap-4 liquid-glass rounded-2xl px-5 py-4">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                <FaPhone className="text-neutral-300 text-sm" />
                            </div>
                            <div>
                                <p className="text-neutral-500 text-[10px] uppercase tracking-widest mb-0.5">Phone</p>
                                <p className="text-white text-sm font-medium">{CONTACT.phoneNo}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 liquid-glass rounded-2xl px-5 py-4">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                <FaMapMarkerAlt className="text-neutral-300 text-sm" />
                            </div>
                            <div>
                                <p className="text-neutral-500 text-[10px] uppercase tracking-widest mb-0.5">Location</p>
                                <p className="text-white text-sm font-medium">{CONTACT.address}</p>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-white/10" />

                    {/* Socials + CTA */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex gap-2">
                            {SOCIALS.map(({ icon, href, label }) => (
                                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                                    title={label}
                                    className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
                                    {icon}
                                </a>
                            ))}
                        </div>

                        <a href={`mailto:${CONTACT.email}`}
                            className="flex items-center gap-2 px-6 py-2.5 liquid-glass text-white text-sm font-semibold rounded-full hover:bg-white/15 transition-colors">
                            <FaPaperPlane className="text-xs" /> Send Message
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
