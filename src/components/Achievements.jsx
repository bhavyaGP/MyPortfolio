import React from 'react';
import { motion } from 'framer-motion';
import achivement1 from '../assets/projects/gec.jpg'
import achivement2 from '../assets/projects/cvmu.jpg'
import achivement3 from '../assets/projects/bhavya3.jpg'
import achivement4 from '../assets/projects/bhavya3.jpg'
const TimelineItem = ({ title, subtitle, date, isLeft, index, photo, isLast }) => {
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
                        className="p-6 bg-slate-800/50 rounded-2xl relative group"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Animated border */}
                        <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-purple-500/50 to-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />

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
                                    className="w-full h-48 object-cover rounded-lg"
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
                                className={`text-gray-400 text-sm mb-2 ${!isLeft && 'text-right'}`}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                {subtitle}
                            </motion.div>

                            <motion.div
                                className={`text-purple-400 text-xs ${!isLeft && 'text-right'}`}
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

            {/* Circle dot */}
            <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full z-20 border-2 border-slate-900"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    );
};

const Achievements = () => {
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
                <h2 className="text-4xl font-bold mb-4">Achievements</h2>
                <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
            </motion.div>

            {/* Timeline container with single continuous line */}
            <div className="max-w-6xl mx-auto relative">
                {/* Single continuous timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-purple-500 z-10" />
                
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