import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaGithub, FaStar, FaCodeBranch, FaUsers, FaBook } from 'react-icons/fa';
import { Button } from './ui/button';

const USERNAME = "bhavyagp";

const StatTile = ({ icon, label, value, isDarkMode }) => (
    <div className={`flex flex-col items-center justify-center p-3 rounded-xl transition-colors
        bg-slate-700/60 border border-slate-600/30`}>
        <div className="text-neutral-300 mb-1">{icon}</div>
        <span className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{value ?? '—'}</span>
        <span className={`text-[11px] ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{label}</span>
    </div>
);

const GitHubContributions = () => {
    const { isDarkMode } = useTheme();
    const [profile, setProfile] = useState(null);
    const [imgErr, setImgErr] = useState(false);

    useEffect(() => {
        fetch(`https://api.github.com/users/${USERNAME}`)
            .then(r => r.json())
            .then(setProfile)
            .catch(() => {});
    }, []);

    // Reset image error on theme change so it retries
    useEffect(() => { setImgErr(false); }, [isDarkMode]);

    const statsTheme = isDarkMode ? 'dark' : 'default';
    const bgHex = isDarkMode ? '0f172a' : 'f5f3ff';
    const textHex = isDarkMode ? 'e2e8f0' : '1f2937';
    const borderHex = isDarkMode ? '334155' : 'e9d5ff';

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`rounded-2xl p-6 flex flex-col gap-5 h-full transition-colors
                ${isDarkMode
                    ? 'bg-slate-800/50 border border-slate-700/50'
                    : 'bg-slate-800/50 border border-slate-700/50'}`}
        >
            {/* Header */}
            <div className="flex items-center gap-4">
                {profile?.avatar_url ? (
                    <img src={profile.avatar_url} alt="avatar"
                        className="w-14 h-14 rounded-full ring-2 ring-white/20 object-cover" />
                ) : (
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center
                        bg-slate-700`}>
                        <FaGithub className="text-2xl text-white" />
                    </div>
                )}
                <div>
                    <p className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {profile?.name ?? 'Bhavya Prajapati'}
                    </p>
                    <a href={`https://github.com/${USERNAME}`} target="_blank" rel="noopener noreferrer"
                        className="text-neutral-400 text-sm hover:text-white transition-colors">
                        @{USERNAME}
                    </a>
                </div>
                <FaGithub className={`ml-auto text-2xl ${isDarkMode ? 'text-slate-400' : 'text-gray-400'}`} />
            </div>

            {/* Stat tiles */}
            <div className="grid grid-cols-4 gap-2">
                <StatTile icon={<FaBook size={14} />} label="Repos" value={profile?.public_repos} isDarkMode={isDarkMode} />
                <StatTile icon={<FaUsers size={14} />} label="Followers" value={profile?.followers} isDarkMode={isDarkMode} />
                <StatTile icon={<FaCodeBranch size={14} />} label="Following" value={profile?.following} isDarkMode={isDarkMode} />
                <StatTile icon={<FaStar size={14} />} label="Gists" value={profile?.public_gists} isDarkMode={isDarkMode} />
            </div>

            {/* Contribution heatmap */}
            <div className={`rounded-xl overflow-hidden p-4 transition-colors
                ${isDarkMode ? 'bg-black' : 'bg-white border border-gray-200'}`}>
                <p className={`text-xs font-semibold mb-3 ${isDarkMode ? 'text-green-400' : 'text-gray-500'}`}>
                    Contribution Heatmap
                </p>
                <img
                    key={`chart-${isDarkMode}`}
                    src={`https://ghchart.rshah.org/22c55e/${USERNAME}`}
                    alt="GitHub Contributions"
                    className="w-full h-auto"
                    style={isDarkMode
                        ? { filter: 'invert(1) hue-rotate(178deg)' }
                        : {}}
                />
            </div>

            {/* Top languages */}
            <div className={`rounded-xl overflow-hidden transition-colors
                ${isDarkMode
                    ? 'bg-slate-900/80 border border-slate-700/30'
                    : 'bg-slate-800/50 border border-slate-700/50'}`}>
                {!imgErr ? (
                    <img
                        key={`langs-${isDarkMode}`}
                        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${USERNAME}&layout=compact&hide_border=true&theme=${statsTheme}&bg_color=${bgHex}&text_color=${textHex}&title_color=a855f7&border_color=${borderHex}&langs_count=6`}
                        alt="Top Languages"
                        className="w-full h-auto"
                        onError={() => setImgErr(true)}
                    />
                ) : (
                    <div className={`p-4 text-center text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                        Language stats unavailable
                    </div>
                )}
            </div>

            {/* CTA */}
            <Button variant="glow" size="default" asChild className="mt-auto w-full">
                <a href={`https://github.com/${USERNAME}`} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> View GitHub Profile
                </a>
            </Button>
        </motion.div>
    );
};

export default GitHubContributions;
