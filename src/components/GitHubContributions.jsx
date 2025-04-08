import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaGithub } from 'react-icons/fa';

const GitHubContributions = () => {
    const { isDarkMode } = useTheme();
    const username = "bhavyagp"; // Replace with your GitHub username
    
    return (
        <div className="flex flex-col h-full">
            <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} text-center mb-4`}>
                GitHub
            </h3>

            <div className="w-full flex-grow flex flex-col">
                <div className={`border-b ${isDarkMode ? 'border-neutral-700' : 'border-gray-300'} pb-16 mb-8`}>
                    <h2 className={`my-20 text-center text-4xl font-bold ${isDarkMode ? 'text-neutral-100' : 'text-gray-900'}`}>
                        GitHub Contributions
                    </h2>
                    
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center"
                        >
                            <div className="flex items-center mb-6">
                                <FaGithub className={`text-3xl mr-3 ${isDarkMode ? 'text-white' : 'text-black'}`} />
                                <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                                    @{username}
                                </h3>
                            </div>
                            
                            {/* GitHub contribution calendar */}
                            <div className={`w-full overflow-hidden rounded-lg border ${isDarkMode ? 'border-gray-700 bg-slate-900' : 'border-gray-300 bg-white'} p-4`}>
                                <iframe
                                    title="GitHub Contribution Chart"
                                    src={`https://ghchart.rshah.org/${username}`}
                                    width="100%"
                                    height="120"
                                    className={`w-full ${isDarkMode ? 'filter invert-[1]' : ''}`}
                                ></iframe>
                            </div>
                            
                            {/* GitHub stats */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 w-full">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className={`overflow-hidden rounded-lg border ${isDarkMode ? 'border-gray-700 bg-slate-900' : 'border-gray-300 bg-white'} p-4`}
                                >
                                    <img 
                                        src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&count_private=true&hide_border=true&theme=${isDarkMode ? 'dark' : 'light'}`}
                                        alt="GitHub Stats"
                                        className="w-full h-auto"
                                    />
                                </motion.div>
                                
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className={`overflow-hidden rounded-lg border ${isDarkMode ? 'border-gray-700 bg-slate-900' : 'border-gray-300 bg-white'} p-4`}
                                >
                                    <img 
                                        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true&theme=${isDarkMode ? 'dark' : 'light'}`}
                                        alt="Top Languages"
                                        className="w-full h-auto"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                
                {/* Button at the bottom */}
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center px-4 py-2 rounded-full ${
                        isDarkMode ? 'bg-purple-800 hover:bg-purple-700' : 'bg-purple-100 hover:bg-purple-200'
                    } transition-colors ${isDarkMode ? 'text-white' : 'text-black-900'} mt-auto self-center`}
                    href={`https://github.com/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub className="mr-2" /> View Profile
                </motion.a>
            </div>
        </div>
    );
};

export default GitHubContributions;