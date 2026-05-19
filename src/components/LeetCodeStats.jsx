import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaCode } from 'react-icons/fa';
import { Button } from './ui/button';

const USERNAME = "bhavya5_exe";

const LeetCodeStats = () => {
    const { isDarkMode } = useTheme();

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl p-6 flex flex-col gap-5 h-full liquid-glass-strong"
        >
            {/* Header */}
            <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-yellow-500/10 border border-yellow-500/30">
                    <FaCode className="text-2xl text-yellow-400" />
                </div>
                <div>
                    <p className="text-lg font-bold text-white">LeetCode</p>
                    <a
                        href={`https://leetcode.com/${USERNAME}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors"
                    >
                        @{USERNAME}
                    </a>
                </div>
            </div>

            {/* Heatmap */}
            <div className="rounded-xl overflow-hidden flex-1">
                <img
                    src={`https://leetcard.jacoblin.cool/${USERNAME}?theme=dark&bg=00000000&border=00000000&ring=eab308&name=ffffff&label=ffffff&icon=eab308&activity=eab308&font=DM%20Mono&ext=heatmap`}
                    alt="LeetCode Heatmap"
                    className="w-full h-auto rounded-xl"
                />
            </div>

            {/* CTA */}
            <Button variant="glass" size="default" asChild className="mt-auto w-full">
                <a href={`https://leetcode.com/${USERNAME}`} target="_blank" rel="noopener noreferrer">
                    <FaCode /> View LeetCode Profile
                </a>
            </Button>
        </motion.div>
    );
};

export default LeetCodeStats;
