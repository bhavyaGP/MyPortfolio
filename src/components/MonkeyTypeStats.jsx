import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaKeyboard, FaBolt } from 'react-icons/fa';
import { Button } from './ui/button';

const USERNAME = import.meta.env.VITE_MT_USERNAME || 'Bhavya5678';
const APE_KEY  = import.meta.env.VITE_MT_APE_KEY;

const MODES = ['10', '25', '50', '100'];

const STATIC_BESTS = {
    '10':  { wpm: 142, acc: 100 },
    '25':  { wpm: 105, acc: 100 },
    '50':  { wpm: 78,  acc: 98  },
    '100': null,
};

const Ring = ({ label, wpm, acc, pct, isTop, delay = 0 }) => {
    const r = 36;
    const cx = 44;
    const cy = 44;

    return (
        <div className="flex flex-col items-center gap-2">
            <div className="relative">
                {/* Pulse glow behind top ring */}
                {isTop && (
                    <div className="absolute inset-0 rounded-full"
                        style={{ animation: 'ringPulse 2s ease-in-out infinite' }} />
                )}

                <svg viewBox="0 0 88 88" width="88" height="88" style={{ overflow: 'visible' }}>
                    {/* Track */}
                    <circle cx={cx} cy={cy} r={r}
                        fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="5" />
                    {/* Glow ring (top performer only) */}
                    {isTop && (
                        <circle cx={cx} cy={cy} r={r}
                            fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="9"
                            style={{ filter: 'blur(4px)' }} />
                    )}
                    {/* Progress arc */}
                    <motion.circle
                        cx={cx} cy={cy} r={r}
                        fill="none"
                        stroke={isTop ? '#ffffff' : 'rgba(255,255,255,0.6)'}
                        strokeWidth="5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: pct }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay }}
                        viewport={{ once: true }}
                        style={{ rotate: -90, originX: `${cx}px`, originY: `${cy}px` }}
                    />
                </svg>

                {/* Center text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.span
                        className="text-white font-bold text-lg leading-none"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: delay + 0.6 }}
                        viewport={{ once: true }}
                    >
                        {wpm}
                    </motion.span>
                    <span className="text-neutral-500 text-[9px]">wpm</span>
                </div>
            </div>
            <div className="text-center">
                <p className="text-neutral-300 text-xs font-semibold">{label}w</p>
                <p className="text-neutral-600 text-[10px]">{acc}% acc</p>
            </div>
        </div>
    );
};

const MonkeyTypeStats = () => {
    const [bests, setBests] = useState(null);

    useEffect(() => {
        if (!APE_KEY) { setBests(STATIC_BESTS); return; }
        fetch(`https://api.monkeytype.com/users/${USERNAME}/profile`, {
            headers: { Authorization: `ApeKey ${APE_KEY}` }
        })
            .then(r => r.json())
            .then(data => {
                const pb = data?.data?.personalBests?.words;
                if (!pb) { setBests(STATIC_BESTS); return; }
                const parsed = {};
                MODES.forEach(m => {
                    const entry = pb[m]?.[0];
                    parsed[m] = entry
                        ? { wpm: Math.round(entry.wpm), acc: Math.round(entry.acc) }
                        : STATIC_BESTS[m];
                });
                setBests(parsed);
            })
            .catch(() => setBests(STATIC_BESTS));
    }, []);

    const validBests = bests ? Object.entries(bests).filter(([, v]) => v) : [];
    const maxWpm = validBests.length ? Math.max(...validBests.map(([, b]) => b.wpm)) : 1;
    const topKey = validBests.reduce((a, [k, b]) => (!a || b.wpm > bests[a].wpm ? k : a), null);

    return (
        <>
            {/* Inject pulse keyframe */}
            <style>{`
                @keyframes ringPulse {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.0); }
                    50%       { box-shadow: 0 0 20px 6px rgba(255,255,255,0.12); }
                }
            `}</style>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-3xl p-6 flex flex-col gap-5 h-full liquid-glass-strong"
            >
                {/* Header */}
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-500/15 border border-blue-500/30">
                        <FaKeyboard className="text-xl text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-white font-bold text-base leading-tight">MonkeyType</p>
                        <a href={`https://monkeytype.com/profile/${USERNAME}`} target="_blank" rel="noopener noreferrer"
                            className="text-neutral-400 text-xs hover:text-blue-400 transition-colors">
                            @{USERNAME}
                        </a>
                    </div>
                    <div className="liquid-glass-subtle rounded-xl p-2">
                        <FaBolt className="text-lg text-blue-400" />
                    </div>
                </div>

                {/* Rings */}
                <div className="flex-1 rounded-2xl bg-black/40 border border-white/8 p-4 flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400" />
                        <p className="text-blue-400 text-xs font-semibold tracking-wide">Personal Bests · Word Mode</p>
                    </div>

                    {!bests && (
                        <div className="flex justify-around py-4">
                            {['10', '25', '50'].map(m => (
                                <div key={m} className="w-20 h-20 rounded-full bg-white/5 animate-pulse" />
                            ))}
                        </div>
                    )}

                    {bests && (
                        <div className="flex justify-around items-center py-2">
                            {validBests.slice(0, 3).map(([mode, b], i) => (
                                <Ring
                                    key={mode}
                                    label={mode}
                                    wpm={b.wpm}
                                    acc={b.acc}
                                    pct={b.wpm / maxWpm}
                                    isTop={mode === topKey}
                                    delay={i * 0.15}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* CTA */}
                <Button variant="glass" size="default" asChild className="w-full">
                    <a href={`https://monkeytype.com/profile/${USERNAME}`} target="_blank" rel="noopener noreferrer">
                        <FaKeyboard /> View MonkeyType Profile
                    </a>
                </Button>
            </motion.div>
        </>
    );
};

export default MonkeyTypeStats;
