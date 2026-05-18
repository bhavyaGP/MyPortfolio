import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import certificate1 from '../assets/TCScodevites12.png';
import certificate2 from '../assets/gsuitephoto.png';
import certificate3 from '../assets/githubclass.png';
import certificate4 from '../assets/infosysjs.png';
import certificate5 from '../assets/postmanai.png';
import certificate6 from '../assets/mongodb.png';
import '../styles/timeline.css';

const CertCard = ({ title, issuer, date, imageUrl, certificateUrl }) => {
    const { isDarkMode } = useTheme();

    return (
        <div className="flex-shrink-0 relative rounded-xl overflow-hidden mx-3" style={{ width: 300 }}>
            {/* Spinning border */}
            <div className="absolute inset-0 p-[2px] rounded-xl z-0">
                <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            </div>

            <div className={`relative z-10 rounded-xl p-4 flex flex-col h-full
                ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}
            >
                {/* Certificate image */}
                <div className={`h-44 mb-4 rounded-md overflow-hidden flex items-center justify-center
                    ${isDarkMode ? 'bg-slate-800' : 'bg-gray-100'}`}
                >
                    {imageUrl ? (
                        <img src={imageUrl} alt={title} className="w-full h-full object-contain" />
                    ) : (
                        <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>No image</span>
                    )}
                </div>

                <h3 className={`text-sm font-bold mb-1 leading-snug ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
                <p className={`text-xs mb-0.5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{issuer}</p>
                <p className="text-xs mb-3 text-neutral-400">{date}</p>

                <a
                    href={certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto inline-flex items-center gap-1.5 text-xs font-medium group
                        ${isDarkMode ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-500'}`}
                >
                    View Certificate
                    <FaExternalLinkAlt size={10} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
            </div>
        </div>
    );
};

const Certificates = () => {
    const { isDarkMode } = useTheme();

    const certificates = [
        {
            id: 1,
            title: "TCS CodeVita Season 12",
            issuer: "TCS",
            date: "April 2025",
            imageUrl: certificate1,
            certificateUrl: "https://drive.google.com/file/d/1BqPdjfhR09ihj7elEa0QrZd7A5wL-PEg/view?usp=sharing"
        },
        {
            id: 2,
            title: "Google Suite",
            issuer: "Udemy",
            date: "January 2023",
            imageUrl: certificate2,
            certificateUrl: "https://drive.google.com/file/d/1Ixpl6U_NFTLklvyP8kIukaUcJcg5MmAM/view?usp=drive_link"
        },
        {
            id: 3,
            title: "Github Session @CE Department",
            issuer: "Coursera",
            date: "March 2023",
            imageUrl: certificate3,
            certificateUrl: "https://drive.google.com/file/d/1TlZJFxVlB-JlfjOj111g8YduM3MnxWXV/view?usp=drive_link"
        },
        {
            id: 4,
            title: "JavaScript Algorithms and Data Structures",
            issuer: "freeCodeCamp",
            date: "May 2023",
            imageUrl: certificate4,
            certificateUrl: "https://drive.google.com/file/d/1hzk1Z4-1-kwFhk8iVUPB8qJjthWkDmGh/view?usp=drive_link"
        },
        {
            id: 5,
            title: "AI Text Summarizer",
            issuer: "Postman",
            date: "August 2023",
            imageUrl: certificate5,
            certificateUrl: "https://drive.google.com/file/d/15TTm6dKwvIgFyI4CkkS2Gp46NajunbOI/view?usp=drive_link"
        },
        {
            id: 6,
            title: "Introduction to MongoDB",
            issuer: "MongoDB",
            date: "September 2023",
            imageUrl: certificate6,
            certificateUrl: "https://drive.google.com/file/d/1ESiIj-XxVMiYrwAjHfeSSGCGpgIF7GbH/view?usp=drive_link"
        }
    ];

    const doubled = [...certificates, ...certificates];

    return (
        <div className="py-12 md:py-16 overflow-hidden">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-10 md:mb-14"
            >
                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    Certificates
                </h2>
                <div className="w-16 sm:w-20 md:w-24 h-1 bg-white/30 mx-auto rounded-full" />
            </motion.div>

            {/* Scroll strip */}
            <div className="certificates-wrapper relative">
                {/* Left fade */}
                <div className={`absolute left-0 top-0 bottom-0 w-20 z-20 pointer-events-none
                    ${isDarkMode ? 'bg-gradient-to-r from-neutral-950 to-transparent' : 'bg-gradient-to-r from-white to-transparent'}`} />
                {/* Right fade */}
                <div className={`absolute right-0 top-0 bottom-0 w-20 z-20 pointer-events-none
                    ${isDarkMode ? 'bg-gradient-to-l from-neutral-950 to-transparent' : 'bg-gradient-to-l from-white to-transparent'}`} />

                <div className="certificates-scroll-track flex py-4" style={{ height: 360 }}>
                    {doubled.map((cert, i) => (
                        <CertCard key={i} {...cert} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certificates;
