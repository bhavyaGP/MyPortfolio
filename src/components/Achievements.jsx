import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import achivement1 from '../assets/projects/gec.jpg'
import achivement2 from '../assets/projects/cvmu.jpg'
import achivement3 from '../assets/projects/bhavya3.jpg'
import achivement4 from '../assets/projects/bhavya3.jpg'

const TimelineItem = ({ title, subtitle, date, isLeft, index, photo, isLast }) => {
    const { isDarkMode } = useTheme();
    
    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex items-center relative mb-16"
        >
            {/* Main content wrapper with proper positioning */}
            <div className={`w-full flex ${isLeft ? 'justify-end' : 'justify-start'} relative`}>
                {/* Card container - half width and properly positioned */}
                <div className={`w-[45%] ${isLeft ? 'mr-8' : 'ml-8'}`}>
                    <motion.div
                        className={`p-6 rounded-2xl relative group shadow-lg
                        ${isDarkMode 
                            ? 'bg-slate-800/70 text-white' 
                            : 'bg-white/90 text-gray-800 border border-gray-200'}`}
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Animated border */}
                        <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-purple-500/50 to-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Content */}
                        <div className="relative">
                            <motion.div
                                className="mb-4"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <img 
                                    src={photo} 
                                    alt={title}
                                    className="w-full h-48 object-cover rounded-lg shadow-md"
                                />
                            </motion.div>

                            <motion.h3
                                className={`text-xl font-bold mb-2 ${!isLeft && 'text-right'}`}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                {title}
                            </motion.h3>

                            <motion.div
                                className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm mb-2 ${!isLeft && 'text-right'}`}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                {subtitle}
                            </motion.div>

                            <motion.div
                                className={`text-purple-500 text-xs font-medium ${!isLeft && 'text-right'}`}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                {date}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Timeline dot - improved to be less annoying */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                <motion.div
                    className={`w-3.5 h-3.5 rounded-full ${isDarkMode ? 'bg-purple-400' : 'bg-purple-500'} 
                    ${isDarkMode ? 'shadow-[0_0_8px_rgba(192,132,252,0.6)]' : 'shadow-[0_0_8px_rgba(168,85,247,0.4)]'}`}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ 
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        delay: index * 0.1 + 0.2
                    }}
                />
            </div>
        </motion.div>
    );
};

const Achievements = () => {
    const { isDarkMode } = useTheme();
    
    const items = [
        {
            title: "1st Place @ HackTheSpring 2025",
            subtitle: "Won first place in the Open Innovation category, competing against 78 teams out of 188.",
            date: "Feb 2025",
            photo: achivement1
        },
        {
            title: "Runner-Up @ CVM University Hackathon 2025",
            subtitle: "Secured 1st Runner-Up position with an AI-powered project, QuickLearnAI.",
            date: "2025",
            photo: achivement2
        },
        {
            title: "Web Expert @ Club Gamma",
            subtitle: "Conducted technical & soft-skills training for 100+ students.",
            date: "Nov 2024",
            photo: "https://clubgamma.vercel.app/assets/logo-DJb3Nfol.jpeg"
        }
    ];
    
    return (
        <div className="container mx-auto px-4 py-16">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Achievements</h2>
                <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
            </motion.div>

            {/* Timeline container with single continuous line */}
            <div className="max-w-6xl mx-auto relative">
                {/* Single continuous timeline line - made thinner and more subtle */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-[1.5px] h-full 
                ${isDarkMode 
                    ? 'bg-gradient-to-b from-purple-500/40 via-purple-400/70 to-purple-500/40' 
                    : 'bg-gradient-to-b from-purple-300/50 via-purple-400/70 to-purple-300/50'}`} />
                
                {/* Timeline items */}
                <div className="relative">
                    {items.map((item, index) => (
                        <TimelineItem
                            key={index}
                            title={item.title}
                            subtitle={item.subtitle}
                            date={item.date}
                            photo={item.photo}
                            isLeft={index % 2 === 0}
                            index={index}
                            isLast={index === items.length - 1}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievements; 