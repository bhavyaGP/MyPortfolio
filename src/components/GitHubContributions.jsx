import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaUsers, FaBook, FaCode } from 'react-icons/fa';
import { Button } from './ui/button';

const USERNAME = "bhavyagp";

const StatTile = ({ icon, label, value }) => (
    <div className="flex flex-col items-center justify-center p-3 rounded-2xl liquid-glass gap-1">
        <span className="text-neutral-400 text-sm">{icon}</span>
        <span className="text-white font-bold text-lg leading-none">{value ?? '—'}</span>
        <span className="text-neutral-500 text-[11px]">{label}</span>
    </div>
);

const GitHubContributions = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${USERNAME}`)
            .then(r => r.json())
            .then(setProfile)
            .catch(() => {});
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl p-6 flex flex-col gap-5 h-full liquid-glass-strong"
        >
            {/* Header */}
            <div className="flex items-center gap-4">
                {profile?.avatar_url ? (
                    <img src={profile.avatar_url} alt="avatar"
                        className="w-12 h-12 rounded-full ring-2 ring-white/20 object-cover" />
                ) : (
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 border border-white/15">
                        <FaGithub className="text-xl text-white" />
                    </div>
                )}
                <div className="flex-1 min-w-0">
                    <p className="text-white font-bold text-base leading-tight truncate">
                        {profile?.name ?? 'Bhavya Prajapati'}
                    </p>
                    <a href={`https://github.com/${USERNAME}`} target="_blank" rel="noopener noreferrer"
                        className="text-neutral-400 text-xs hover:text-white transition-colors">
                        @{USERNAME}
                    </a>
                </div>
                <div className="liquid-glass-subtle rounded-xl p-2">
                    <FaGithub className="text-lg text-neutral-300" />
                </div>
            </div>

            {/* Stat tiles */}
            <div className="grid grid-cols-3 gap-2">
                <StatTile icon={<FaBook size={12} />}       label="Repos"     value={profile?.public_repos} />
                <StatTile icon={<FaUsers size={12} />}      label="Followers" value={profile?.followers} />
                <StatTile icon={<FaCodeBranch size={12} />} label="Following" value={profile?.following} />
            </div>

            {/* Contribution heatmap */}
            <div className="flex-1 rounded-2xl overflow-hidden bg-black/40 border border-white/8 p-4">
                <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    <p className="text-green-400 text-xs font-semibold tracking-wide">Contribution Activity</p>
                </div>
                <img
                    src={`https://ghchart.rshah.org/22c55e/${USERNAME}`}
                    alt="GitHub Contributions"
                    className="w-full h-auto"
                    style={{ filter: 'invert(1) hue-rotate(178deg)', display: 'block' }}
                />
            </div>

            {/* CTA */}
            <Button variant="glass" size="default" asChild className="w-full">
                <a href={`https://github.com/${USERNAME}`} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> View GitHub Profile
                </a>
            </Button>
        </motion.div>
    );
};

export default GitHubContributions;
