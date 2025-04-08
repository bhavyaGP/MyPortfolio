import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaCode } from 'react-icons/fa';

const LeetCodeStats = () => {
    const { isDarkMode } = useTheme();
    const username = "bhavya5_exe"; // Your LeetCode username

    // Get LeetCard URL with appropriate theme
    const leetCardUrl = `https://leetcard.jacoblin.cool/${username}?theme=${isDarkMode ? 'dark' : 'light'}&font=DM%20Mono&ext=heatmap`;

    return (
        <div className="flex flex-col h-full">
            <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} text-center mb-4`}>
                LeetCode
            </h3>

            <div className="w-full flex-grow flex flex-col">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center h-full"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <FaCode className={`text-2xl ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                        <h4 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                            @{username}
                        </h4>
                    </div>

                    {/* LeetCard Integration */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full flex-grow mb-4"
                    >
                        <div className={`overflow-hidden rounded-lg ${isDarkMode ? 'bg-slate-900' : 'bg-white'} p-2 h-full flex items-center justify-center`}>
                            <img
                                src={leetCardUrl}
                                alt="LeetCode Stats"
                                className="w-full h-auto rounded"
                            />
                        </div>
                    </motion.div>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`inline-flex items-center px-4 py-2 rounded-full ${
                            isDarkMode ? 'bg-purple-800 hover:bg-purple-700' : 'bg-purple-100 hover:bg-purple-200'
                        } transition-colors ${isDarkMode ? 'text-white' : 'text-black-900'} mt-auto`}
                        href={`https://leetcode.com/${username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaCode className="mr-2" /> View Profile
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
};

export default LeetCodeStats;
