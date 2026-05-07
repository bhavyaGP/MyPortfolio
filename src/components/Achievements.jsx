import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import achivement1 from '../assets/projects/gec.jpg'
import achivement2 from '../assets/projects/cvmu.jpg'
import york from '../assets/projects/york.jpg'
import '../styles/timeline.css'

const CARD_W = 340; // px — card width
const CARD_GAP = 20; // px — gap between cards

const StoryCard = ({ title, subtitle, date, photo }) => (
    <div
        className="flex-shrink-0 relative rounded-2xl overflow-hidden shadow-2xl group"
        style={{ width: CARD_W, marginRight: CARD_GAP }}
    >
        {/* Full-card image */}
        {photo ? (
            <img
                src={photo}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 absolute inset-0"
            />
        ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900" />
        )}

        {/* Bottom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Content pinned to bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
            <h3 className="text-white text-base font-bold leading-snug mb-1.5">{title}</h3>
            <p className="text-gray-300 text-xs leading-relaxed line-clamp-3">{subtitle}</p>
        </div>
    </div>
);

const Achievements = () => {
    const { isDarkMode } = useTheme();

    const items = [
        {
            title: "Runner-Up @ YORK.ie Global Hackathon 2025",
            subtitle: "Secured runner-up in the AI Automation category at YORK.ie Hackathon 2025, Ahmedabad, during a 12-hour intensive development challenge.",
            date: "May 2025",
            photo: york
        },
        {
            title: "1st Place @ HackTheSpring 2025",
            subtitle: "Won 1st place in the Open Innovation category at HackTheSpring 2025, GEC-28, Gandhinagar, competing against 78 teams from 188 participants.",
            date: "Feb 2025",
            photo: achivement1
        },
        {
            title: "Runner-Up @ CVM University Hackathon 2025",
            subtitle: "Secured 1st runner-up position at CVM University Hackathon 2025, ADIT Anand, with QuickLearn AI.",
            date: "2025",
            photo: achivement2
        },
    ];

    const doubled = [...items, ...items];

    return (
        <div className="py-12 md:py-16 overflow-hidden">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    Achievements
                </h2>
                <div className="w-16 sm:w-20 md:w-24 h-1 bg-purple-500 mx-auto rounded-full" />
            </motion.div>

            {/* Scroll + timeline wrapper */}
            <div className="achievements-wrapper relative">
                {/* Left / right fades */}
                <div className={`absolute left-0 top-0 bottom-0 w-24 z-20 pointer-events-none
                    ${isDarkMode ? 'bg-gradient-to-r from-neutral-950 to-transparent' : 'bg-gradient-to-r from-white to-transparent'}`} />
                <div className={`absolute right-0 top-0 bottom-0 w-24 z-20 pointer-events-none
                    ${isDarkMode ? 'bg-gradient-to-l from-neutral-950 to-transparent' : 'bg-gradient-to-l from-white to-transparent'}`} />

                {/* ── Cards row ── */}
                <div className="achievements-scroll-track flex" style={{ height: 460 }}>
                    {doubled.map((item, i) => (
                        <StoryCard key={i} {...item} />
                    ))}
                </div>

                {/* ── Timeline row (scrolls in sync) ── */}
                <div className="relative mt-6" style={{ height: 56 }}>
                    {/* Static full-width horizontal line */}
                    <div className={`absolute top-[10px] left-0 right-0 h-[2px]
                        ${isDarkMode
                            ? 'bg-gradient-to-r from-transparent via-purple-500/70 to-transparent'
                            : 'bg-gradient-to-r from-transparent via-purple-400/70 to-transparent'}`}
                    />

                    {/* Scrolling dots + labels */}
                    <div className="achievements-timeline-track absolute top-0 left-0 flex">
                        {doubled.map((item, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 flex flex-col items-center"
                                style={{ width: CARD_W, marginRight: CARD_GAP }}
                            >
                                {/* Dot centered on the line */}
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                                    ${isDarkMode
                                        ? 'bg-slate-900 border-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.6)]'
                                        : 'bg-white border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.4)]'}`}
                                >
                                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                                </div>

                                {/* Year label */}
                                <span className={`mt-2 text-xs font-semibold tracking-wide
                                    ${isDarkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                                    {item.date}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;
