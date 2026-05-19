import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCertificate } from 'react-icons/fa';
import certificate1 from '../assets/TCScodevites12.png';
import certificate2 from '../assets/gsuitephoto.png';
import certificate3 from '../assets/githubclass.png';
import certificate4 from '../assets/infosysjs.png';
import certificate5 from '../assets/postmanai.png';
import certificate6 from '../assets/mongodb.png';

const CERTS = [
    { title: "TCS CodeVita Season 12",                  issuer: "TCS",          date: "Apr 2025",  image: certificate1, url: "https://drive.google.com/file/d/1BqPdjfhR09ihj7elEa0QrZd7A5wL-PEg/view?usp=sharing" },
    { title: "Google Workspace",                         issuer: "Udemy",        date: "Jan 2023",  image: certificate2, url: "https://drive.google.com/file/d/1Ixpl6U_NFTLklvyP8kIukaUcJcg5MmAM/view?usp=drive_link" },
    { title: "GitHub Session @ CE Dept",                 issuer: "Coursera",     date: "Mar 2023",  image: certificate3, url: "https://drive.google.com/file/d/1TlZJFxVlB-JlfjOj111g8YduM3MnxWXV/view?usp=drive_link" },
    { title: "JavaScript Algorithms & Data Structures",  issuer: "freeCodeCamp", date: "May 2023",  image: certificate4, url: "https://drive.google.com/file/d/1hzk1Z4-1-kwFhk8iVUPB8qJjthWkDmGh/view?usp=drive_link" },
    { title: "AI Text Summarizer",                       issuer: "Postman",      date: "Aug 2023",  image: certificate5, url: "https://drive.google.com/file/d/15TTm6dKwvIgFyI4CkkS2Gp46NajunbOI/view?usp=drive_link" },
    { title: "Introduction to MongoDB",                  issuer: "MongoDB",      date: "Sep 2023",  image: certificate6, url: "https://drive.google.com/file/d/1ESiIj-XxVMiYrwAjHfeSSGCGpgIF7GbH/view?usp=drive_link" },
];

const CertCard = ({ title, issuer, date, image, url }) => (
    <div className="flex-shrink-0 w-64 liquid-glass rounded-2xl overflow-hidden mx-3 group flex flex-col">
        {/* Image */}
        <div className="h-36 bg-black/40 overflow-hidden">
            <img src={image} alt={title}
                className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105" />
        </div>
        {/* Content */}
        <div className="p-4 flex flex-col justify-between gap-3 flex-1">
            <div>
                <h3 className="text-white text-sm font-bold leading-snug line-clamp-2">{title}</h3>
                <p className="text-neutral-400 text-xs mt-0.5">{issuer} · {date}</p>
            </div>
            <a href={url} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-neutral-300 hover:text-white transition-colors liquid-glass-subtle px-3 py-1.5 rounded-full self-start">
                <FaExternalLinkAlt className="text-[9px]" /> View
            </a>
        </div>
    </div>
);

const Certificates = () => {
    const doubled = [...CERTS, ...CERTS];

    return (
        <div id="certificates" className="border-b border-white/10 pb-16 mb-8 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center my-16"
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    Certifi<span className="bg-gradient-to-r from-neutral-200 to-neutral-500 bg-clip-text text-transparent">cates</span>
                </h2>
                <p className="text-neutral-500 text-sm">Courses & credentials</p>
                <div className="w-16 h-1 bg-white/20 mx-auto rounded-full mt-3" />
            </motion.div>

            {/* Scrolling strip */}
            <div className="relative marquee-wrap">
                <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent" />
                <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent" />

                <div className="flex marquee-left py-2">
                    {doubled.map((cert, i) => (
                        <CertCard key={i} {...cert} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certificates;
