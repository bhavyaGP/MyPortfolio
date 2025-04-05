import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import certificate1 from '../assets/gsuitephoto.png';
import certificate2 from '../assets/githubclass.png';
import certificate3 from '../assets/infosysjs.png';
import certificate4 from '../assets/postmanai.png';
import certificate5 from '../assets/mongodb.png';


const Certificate = ({ title, issuer, date, imageUrl, certificateUrl, index }) => {
    const { isDarkMode } = useTheme();
    
    return (
        <motion.div 
            className="relative border border-gray-700 rounded-lg overflow-hidden"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <div className="relative">
                {/* Animated border effect */}
                <div className="absolute inset-0 p-[2px] rounded-lg">
                    <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></div>
                </div>
                
                <div className={`relative ${isDarkMode ? 'bg-slate-900' : 'bg-white'} rounded-lg p-5 h-full flex flex-col`}>
                    {/* Certificate image with proper aspect ratio */}
                    <div className={`h-48 mb-4 overflow-hidden rounded-md ${isDarkMode ? 'bg-slate-800' : 'bg-gray-200'} flex items-center justify-center`}>
                        {imageUrl ? (
                            <img 
                                src={imageUrl} 
                                alt={title} 
                                className="w-full h-full object-contain"
                            />
                        ) : (
                            <div className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>No image available</div>
                        )}
                    </div>
                    
                    <h3 className={`text-xl font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-black'}`}>{title}</h3>
                    <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>{issuer}</p>
                    <p className={`text-xs mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>{date}</p>
                    
                    <a 
                        href={certificateUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`mt-auto inline-flex items-center gap-2 text-sm group ${
                            isDarkMode ? 'text-blue-300 hover:text-blue-200' : 'text-blue-700 hover:text-blue-600'
                        }`}
                    >
                        View Certificate 
                        <FaExternalLinkAlt size={12} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const Certificates = () => {
    const { isDarkMode } = useTheme();
    
    // Replace these with your actual certificates
    const certificates = [
        {
            id: 1,
            title: "Google Suite",
            issuer: "Udemy",
            description: "I completed the Google Suite course to enhance my skills in using Google Workspace tools, including Gmail, Google Docs, Sheets, and Drive. This course provided me with a comprehensive understanding of these essential tools and their features, enabling me to effectively manage my digital documents and collaborate with others.",
            date: "January 2023",
            imageUrl: certificate1,
            certificateUrl: "https://drive.google.com/file/d/1Ixpl6U_NFTLklvyP8kIukaUcJcg5MmAM/view?usp=drive_link"
        },
        {
            id: 2,
            title: "Github Session @CE Department",
            issuer: "Coursera",
            description: "I completed the Github Session course to enhance my skills in using Github, a popular platform for version control and collaboration. This course provided me with a comprehensive understanding of Github's core concepts, including repositories, branches, and pull requests. I gained hands-on experience through practical exercises and projects, which helped me apply my knowledge to real-world applications.",
            date: "March 2023",
            imageUrl: certificate2,
            certificateUrl: "https://drive.google.com/file/d/1TlZJFxVlB-JlfjOj111g8YduM3MnxWXV/view?usp=drive_link"
        },
        {
            id: 3,
            title: "JavaScript Algorithms and Data Structures",
            issuer: "freeCodeCamp",
            description: "I completed the JavaScript Algorithms and Data Structures course to enhance my skills in using JavaScript, a popular programming language for building interactive web applications. This course provided me with a comprehensive understanding of JavaScript's core concepts, including variables, functions, objects, and arrays. I gained hands-on experience through practical exercises and projects, which helped me apply my knowledge to real-world applications.",
            date: "May 2023",
            imageUrl: certificate3,
            certificateUrl: "https://drive.google.com/file/d/1hzk1Z4-1-kwFhk8iVUPB8qJjthWkDmGh/view?usp=drive_link"
        },
        {
            id: 4,
            title: "AI text Summarizer",
            issuer: "Coursera",
            description: "I completed the AI text Summarizer course to enhance my skills in using AI, a popular programming language for building interactive web applications. This course provided me with a comprehensive understanding of AI's core concepts, including variables, functions, objects, and arrays. I gained hands-on experience through practical exercises and projects, which helped me apply my knowledge to real-world applications.",
            date: "August 2023",
            imageUrl: certificate4,
            certificateUrl: "https://drive.google.com/file/d/15TTm6dKwvIgFyI4CkkS2Gp46NajunbOI/view?usp=drive_link"
        },
        {
            id: 5,
            title: "Introduction to MongoDB",
            issuer: "Postman",
            description: "I completed the Introduction to MongoDB course to enhance my skills in using MongoDB, a popular tool for building interactive web applications. This course provided me with a comprehensive understanding of MongoDB's core concepts, including variables, functions, objects, and arrays. I gained hands-on experience through practical exercises and projects, which helped me apply my knowledge to real-world applications.",
            date: "September 2023",
            imageUrl: certificate5,
            certificateUrl: "https://drive.google.com/file/d/1ESiIj-XxVMiYrwAjHfeSSGCGpgIF7GbH/view?usp=drive_link"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <motion.h1 
                className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-black'}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>My Certificates</h2>
                <div className="w-16 sm:w-20 md:w-24 h-1 bg-purple-500 mx-auto"></div>
            </motion.h1>
            
            <div className="max-w-5xl mx-auto">
                {certificates.map((cert, index) => (
                    <div 
                        key={cert.id} 
                        className={`flex flex-col md:flex-row items-center mb-16 ${
                            index % 2 === 1 ? 'md:flex-row-reverse' : ''
                        }`}
                    >
                        <div className={`w-full md:w-2/3 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                            <Certificate 
                                title={cert.title}
                                issuer={cert.issuer}
                                date={cert.date}
                                imageUrl={cert.imageUrl}
                                certificateUrl={cert.certificateUrl}
                                index={index}
                            />
                        </div>
                        
                        <div className="w-full md:w-1/3 mt-6 md:mt-0">
                            <motion.div 
                                className="text-center md:text-left"
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h4 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-purple-300' : 'text-purple-700'}`}>{`Certificate ${index + 1}`}</h4>
                                <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                                    {cert.description}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certificates;