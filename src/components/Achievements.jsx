import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import achivement1 from '../assets/projects/gec.jpg'
import achivement2 from '../assets/projects/cvmu.jpg'
import york from '../assets/projects/york.jpg'
import makersfest from '../assets/projects/makersfest.jpeg'
import ssip from '../assets/projects/ssip.jpeg'
import playpower from '../assets/projects/ppl.jpg'

const ITEMS = [
    {
        title: "1st Place @ HackTheSpring 2025",
        subtitle: "Won 1st place in the Open Innovation category at HackTheSpring 2025, GEC-28, Gandhinagar, competing against 78 teams from 188 participants.",
        date: "Feb 2025",
        photo: achivement1,
        rank: "1st",
        badge: "Champion",
        stat: "78 teams",
    },
    {
        title: "Runner-Up @ YORK.ie Global Hackathon 2025",
        subtitle: "Secured runner-up in the AI Automation category at YORK.ie Hackathon 2025, Ahmedabad, during a 12-hour intensive development challenge.",
        date: "May 2025",
        photo: york,
        rank: "2nd",
        badge: "Runner-Up",
        stat: "Global",
    },
    {
        title: "Runner-Up @ CVM University Hackathon 2025",
        subtitle: "Secured 1st runner-up position at CVM University Hackathon 2025, ADIT Anand, with QuickLearn AI.",
        date: "2025",
        photo: achivement2,
        rank: "2nd",
        badge: "Runner-Up",
        stat: "QuickLearnAI",
    },
    {
        title: "Winner @ Playpower Hackathon",
        subtitle: "Won the Ultimate Gamechanger Award (₹1,00,000) at the 2025 PlayPower EdSprint Hackathon among 50+ participating teams for an AI-powered educational solution.",
        date: "2025",
        photo: playpower,
        rank: "1st",
        badge: "Champion",
        stat: "Winner",
    },
    {
        title: "SSIP Grant ",
        subtitle: "Received funding and mentorship from the Gujarat government for developing QuickLearn AI.",
        date: "2025",
        photo: ssip,
        rank: "grant",
        badge: "Funded",
        stat: "Govt. Grant",
    },
    {
        title: "MakersFest 2025",
        subtitle: "Showcased innovative project at MakersFest 2025, demonstrating technical skills and product thinking to industry experts.",
        date: "2025",
        photo: makersfest,
        rank: "2nd",
        badge: "Featured",
        stat: "MakersFest",
    },
];

const BADGE_STYLES = {
    "1st":   { bg: "bg-amber-400/20 border-amber-400/40 text-amber-300",   icon: <FaTrophy className="text-amber-400 text-xs" /> },
    "grant": { bg: "bg-green-400/20 border-green-400/40 text-green-300",   icon: <FaTrophy className="text-green-400 text-xs" /> },
    "2nd":   { bg: "bg-white/10 border-white/20 text-neutral-300",          icon: <FaMedal className="text-neutral-400 text-xs" /> },
};

const RankBadge = ({ rank, badge }) => {
    const style = BADGE_STYLES[rank] ?? BADGE_STYLES["2nd"];
    return (
        <span className={`flex items-center gap-1.5 border text-xs font-bold px-2.5 py-1 rounded-full ${style.bg}`}>
            {style.icon} {badge}
        </span>
    );
};

const FeaturedCard = ({ item, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="relative rounded-3xl overflow-hidden group h-full min-h-[480px]"
    >
        <img
            src={item.photo}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

        {/* Top badge */}
        <div className="absolute top-4 left-4 z-10">
            <RankBadge rank={item.rank} badge={item.badge} />
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
            <div className="flex items-center gap-2 text-neutral-400 text-xs mb-2">
                <FaCalendarAlt className="text-[10px]" /> {item.date}
                <span className="mx-1">·</span>
                <FaUsers className="text-[10px]" /> {item.stat}
            </div>
            <h3 className="text-white text-xl font-bold leading-snug mb-2">{item.title}</h3>
            <p className="text-neutral-300 text-sm leading-relaxed line-clamp-3">{item.subtitle}</p>
        </div>
    </motion.div>
);

const SmallCard = ({ item, index }) => (
    <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.15 + index * 0.15 }}
        viewport={{ once: true }}
        className="relative rounded-3xl overflow-hidden group flex-1 min-h-[220px]"
    >
        <img
            src={item.photo}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* Top badge */}
        <div className="absolute top-3 left-3 z-10">
            <RankBadge rank={item.rank} badge={item.badge} />
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
            <div className="flex items-center gap-1.5 text-neutral-400 text-[11px] mb-1.5">
                <FaCalendarAlt className="text-[9px]" /> {item.date}
            </div>
            <h3 className="text-white text-sm font-bold leading-snug mb-1">{item.title}</h3>
            <p className="text-neutral-400 text-xs leading-relaxed line-clamp-2">{item.subtitle}</p>
        </div>
    </motion.div>
);

const Achievements = () => {
    const [feat1, feat2, ...rest] = ITEMS;

    return (
        <div className="py-12 md:py-16">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-10"
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                    Achievements
                </h2>
                <p className="text-neutral-500 text-sm">Hackathons, grants & competitions</p>
                <div className="w-16 h-1 bg-white/20 mx-auto rounded-full mt-3" />
            </motion.div>

            {/* Bento grid — top: 2 tall, bottom: 4 small */}
            <div className="flex flex-col gap-4 max-w-5xl mx-auto">
                {/* Row 1 — two featured tall cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <FeaturedCard item={feat1} index={0} />
                    <FeaturedCard item={feat2} index={1} />
                </div>

                {/* Row 2 — four small cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {rest.map((item, i) => (
                        <SmallCard key={i} item={item} index={i} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievements;
