import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaFire } from 'react-icons/fa';
import { Button } from './ui/button';

const USERNAME = "bhavya5_exe";

const LeetCodeStats = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl p-6 flex flex-col gap-5 h-full liquid-glass-strong"
        >
            {/* Header */}
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-yellow-500/15 border border-yellow-500/30">
                    <FaCode className="text-xl text-yellow-400" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-white font-bold text-base leading-tight">LeetCode</p>
                    <a href={`https://leetcode.com/${USERNAME}`} target="_blank" rel="noopener noreferrer"
                        className="text-neutral-400 text-xs hover:text-yellow-400 transition-colors">
                        @{USERNAME}
                    </a>
                </div>
                <div className="liquid-glass-subtle rounded-xl p-2">
                    <FaFire className="text-lg text-yellow-400" />
                </div>
            </div>

            {/* Heatmap — full card */}
            <div className="flex-1 rounded-2xl overflow-hidden bg-black/40 border border-white/8 p-4">
                <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                    <p className="text-yellow-400 text-xs font-semibold tracking-wide">Submission Activity</p>
                </div>
                <img
                    src={`https://leetcard.jacoblin.cool/${USERNAME}?theme=dark&bg=00000000&border=00000000&ring=eab308&name=ffffff&label=ffffff&icon=eab308&activity=eab308&font=DM%20Mono&ext=heatmap`}
                    alt="LeetCode Heatmap"
                    className="w-full h-auto rounded-xl"
                />
            </div>

            {/* CTA */}
            <Button variant="glass" size="default" asChild className="w-full">
                <a href={`https://leetcode.com/${USERNAME}`} target="_blank" rel="noopener noreferrer">
                    <FaCode /> View LeetCode Profile
                </a>
            </Button>
        </motion.div>
    );
};

export default LeetCodeStats;
