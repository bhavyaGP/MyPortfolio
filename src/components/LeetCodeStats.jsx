import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaCode } from 'react-icons/fa';
import { Button } from './ui/button';

const USERNAME = "bhavya5_exe";

const DiffBar = ({ label, solved, total, color, trackColor, isDarkMode }) => (
    <div className="flex items-center gap-3">
        <span className={`text-xs w-14 font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{label}</span>
        <div className={`flex-1 h-2 rounded-full ${isDarkMode ? 'bg-slate-700' : trackColor}`}>
            <motion.div
                className={`h-2 rounded-full ${color}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${Math.min((solved / total) * 100, 100)}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
            />
        </div>
        <span className={`text-xs w-16 text-right font-mono ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {solved}<span className={`${isDarkMode ? 'text-gray-600' : 'text-gray-300'}`}> / {total}</span>
        </span>
    </div>
);

const CircleProgress = ({ solved, total, isDarkMode }) => {
    const r = 52;
    const circ = 2 * Math.PI * r;
    const pct = Math.min(solved / total, 1);

    return (
        <div className="relative flex items-center justify-center">
            <svg width="128" height="128" className="-rotate-90">
                <circle cx="64" cy="64" r={r} fill="none"
                    stroke={isDarkMode ? '#1e293b' : '#ede9fe'}
                    strokeWidth="10" />
                <motion.circle
                    cx="64" cy="64" r={r} fill="none"
                    stroke="url(#lcGrad)" strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={circ}
                    initial={{ strokeDashoffset: circ }}
                    whileInView={{ strokeDashoffset: circ - pct * circ }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                />
                <defs>
                    <linearGradient id="lcGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="absolute flex flex-col items-center">
                <span className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{solved}</span>
                <span className={`text-[11px] ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>solved</span>
            </div>
        </div>
    );
};

const LeetCodeStats = () => {
    const { isDarkMode } = useTheme();
    const [data, setData] = useState(null);
    const [err, setErr] = useState(false);

    useEffect(() => {
        setErr(false);
        fetch(`https://leetcode-stats-api.herokuapp.com/${USERNAME}`)
            .then(r => r.json())
            .then(d => d.status === 'success' ? setData(d) : setErr(true))
            .catch(() => setErr(true));
    }, []);

    const leetCardUrl = `https://leetcard.jacoblin.cool/${USERNAME}?theme=${isDarkMode ? 'dark' : 'light'}&font=DM%20Mono&ext=heatmap`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`rounded-2xl p-6 flex flex-col gap-5 h-full transition-colors
                ${isDarkMode
                    ? 'bg-slate-800/50 border border-slate-700/50'
                    : 'bg-white border border-yellow-100 shadow-sm'}`}
        >
            {/* Header */}
            <div className="flex items-center gap-3">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center
                    ${isDarkMode ? 'bg-yellow-500/10 border border-yellow-500/30' : 'bg-yellow-50 border border-yellow-200'}`}>
                    <FaCode className={`text-2xl ${isDarkMode ? 'text-yellow-400' : 'text-yellow-500'}`} />
                </div>
                <div>
                    <p className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>LeetCode</p>
                    <a href={`https://leetcode.com/${USERNAME}`} target="_blank" rel="noopener noreferrer"
                        className={`text-sm hover:underline transition-colors
                            ${isDarkMode ? 'text-yellow-400 hover:text-yellow-300' : 'text-yellow-600 hover:text-yellow-500'}`}>
                        @{USERNAME}
                    </a>
                </div>
            </div>

            {data ? (
                <>
                    {/* Circle + rank */}
                    <div className="flex items-center gap-6">
                        <CircleProgress solved={data.totalSolved} total={data.totalQuestions} isDarkMode={isDarkMode} />
                        <div className="flex flex-col gap-2">
                            <div>
                                <p className={`text-xs mb-0.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Global Rank</p>
                                <p className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                    #{data.ranking?.toLocaleString() ?? '—'}
                                </p>
                            </div>
                            <div>
                                <p className={`text-xs mb-0.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Acceptance</p>
                                <p className={`text-lg font-semibold ${isDarkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                                    {data.acceptanceRate ?? '—'}%
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Difficulty bars */}
                    <div className={`flex flex-col gap-3 p-4 rounded-xl transition-colors
                        ${isDarkMode
                            ? 'bg-slate-900/60 border border-slate-700/30'
                            : 'bg-yellow-50 border border-yellow-100'}`}>
                        <DiffBar label="Easy" solved={data.easySolved} total={data.totalEasy}
                            color="bg-green-500" trackColor="bg-green-100" isDarkMode={isDarkMode} />
                        <DiffBar label="Medium" solved={data.mediumSolved} total={data.totalMedium}
                            color="bg-yellow-500" trackColor="bg-yellow-100" isDarkMode={isDarkMode} />
                        <DiffBar label="Hard" solved={data.hardSolved} total={data.totalHard}
                            color="bg-red-500" trackColor="bg-red-100" isDarkMode={isDarkMode} />
                    </div>

                    {/* Heatmap */}
                    <div className="rounded-xl overflow-hidden">
                        <img
                            key={`lc-heat-${isDarkMode}`}
                            src={
                                isDarkMode
                                    ? `https://leetcard.jacoblin.cool/${USERNAME}?theme=dark&bg=000000&border=000000&ring=22c55e&name=22c55e&label=ffffff&icon=22c55e&activity=22c55e&font=DM%20Mono&ext=heatmap&hide=ranking,solved,contest`
                                    : `https://leetcard.jacoblin.cool/${USERNAME}?theme=light&font=DM%20Mono&ext=heatmap&hide=ranking,solved,contest`
                            }
                            alt="LeetCode Heatmap"
                            className="w-full h-auto rounded-xl"
                        />
                    </div>
                </>
            ) : err ? (
                <div className="flex-1 flex items-center justify-center">
                    <img key={`lc-card-${isDarkMode}`} src={leetCardUrl} alt="LeetCode Stats"
                        className="w-full h-auto rounded-xl" />
                </div>
            ) : (
                <div className="flex-1 flex flex-col gap-3 animate-pulse">
                    <div className={`h-32 rounded-xl ${isDarkMode ? 'bg-slate-700/40' : 'bg-yellow-50'}`} />
                    <div className={`h-24 rounded-xl ${isDarkMode ? 'bg-slate-700/40' : 'bg-yellow-50'}`} />
                    <div className={`h-20 rounded-xl ${isDarkMode ? 'bg-slate-700/40' : 'bg-yellow-50'}`} />
                </div>
            )}

            {/* CTA */}
            <Button variant="glow" size="default" asChild className="mt-auto w-full">
                <a href={`https://leetcode.com/${USERNAME}`} target="_blank" rel="noopener noreferrer">
                    <FaCode /> View LeetCode Profile
                </a>
            </Button>
        </motion.div>
    );
};

export default LeetCodeStats;
