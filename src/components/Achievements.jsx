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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex relative mb-12 md:mb-16"
        >
            {/* Main content wrapper with proper positioning */}
            <div className="w-full relative">
                {/* Card container with responsive width */}
                <div className={`w-[calc(100%-20px)] sm:w-[90%] md:w-[45%] 
                    ${isLeft ? 'md:ml-auto md:mr-8 ml-5' : 'md:mr-auto md:ml-8 ml-5'}`}>
                    <motion.div
                        className={`p-4 sm:p-5 rounded-xl relative group shadow-lg
                        ${isDarkMode 
                            ? 'bg-slate-800/80 text-white' 
                            : 'bg-white/95 text-gray-800 border border-gray-200'}`}
                        whileHover={{ scale: 1.01, y: -3 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Animated border */}
                        <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-purple-500/50 to-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Content */}
                        <div className="relative">
                            <motion.div
                                className="mb-3 md:mb-4"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <img 
                                    src={photo} 
                                    alt={title}
                                    className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg shadow-md"
                                />
                            </motion.div>

                            <motion.h3
                                className={`text-base sm:text-lg md:text-xl font-bold mb-1.5 md:mb-2`}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                {title}
                            </motion.h3>

                            <motion.div
                                className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-xs sm:text-sm mb-2`}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                {subtitle}
                            </motion.div>

                            <motion.div
                                className={`text-purple-500 text-xs font-medium`}
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

            {/* Timeline dot - positioned correctly for all screen sizes */}
            <div className="absolute left-0 md:left-1/2 top-10 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 z-20">
                <motion.div
                    className={`w-2.5 md:w-3 h-2.5 md:h-3 rounded-full ${isDarkMode ? 'bg-purple-400' : 'bg-purple-500'} 
                    ${isDarkMode ? 'shadow-[0_0_5px_rgba(192,132,252,0.5)]' : 'shadow-[0_0_5px_rgba(168,85,247,0.4)]'}`}
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
        <div className="container mx-auto px-2 sm:px-4 py-12 md:py-16">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-10 md:mb-16"
            >
                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Achievements</h2>
                <div className="w-16 sm:w-20 md:w-24 h-1 bg-purple-500 mx-auto"></div>
            </motion.div>

            {/* Timeline container with single continuous line */}
            <div className="max-w-6xl mx-auto relative">
                {/* Single continuous timeline line - repositioned for mobile */}
                <div className={`absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] md:w-[1.5px] h-full 
                ${isDarkMode 
                    ? 'bg-gradient-to-b from-purple-500/30 via-purple-400/60 to-purple-500/30' 
                    : 'bg-gradient-to-b from-purple-300/40 via-purple-400/60 to-purple-300/40'}`} />
                
                {/* Timeline items */}
                <div className="relative pl-0 md:pl-0">
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