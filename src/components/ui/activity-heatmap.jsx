import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

// ponytail: calendar mode only (easyui's "hours" mode skipped), add when a weekday x hour grid is needed.
// Props mirror easyui's ActivityHeatmap: data [{date, value}], weeks, weekStart, color, unit, animated.
const LEVELS = [0.12, 0.35, 0.55, 0.78, 1]; // opacity of `color` per level

const iso = (d) => d.toISOString().slice(0, 10);

export default function ActivityHeatmap({
    data = [],
    weeks = 53,
    weekStart = 0,
    color = '#34d399',
    unit = 'contributions',
    animated = true,
    className = '',
}) {
    const [tip, setTip] = useState(null);

    const { cols, total, max } = useMemo(() => {
        const byDate = new Map(data.map((d) => [iso(new Date(d.date)), d.value]));
        const last = data.length
            ? new Date(Math.max(...data.map((d) => +new Date(d.date))))
            : new Date();
        // align the grid so the last column ends on the week containing `last`
        const lastDow = (last.getUTCDay() - weekStart + 7) % 7;
        const start = new Date(last);
        start.setUTCDate(last.getUTCDate() - lastDow - (weeks - 1) * 7);

        let total = 0, max = 0;
        const cols = Array.from({ length: weeks }, (_, w) =>
            Array.from({ length: 7 }, (_, r) => {
                const day = new Date(start);
                day.setUTCDate(start.getUTCDate() + w * 7 + r);
                if (day > last) return null;
                const value = byDate.get(iso(day)) ?? 0;
                total += value;
                max = Math.max(max, value);
                return { date: iso(day), value };
            })
        );
        return { cols, total, max };
    }, [data, weeks, weekStart]);

    const level = (v) => (v <= 0 ? 0 : Math.min(4, Math.ceil((v / max) * 4)));

    return (
        <div className={className}>
            <div
                role="img"
                aria-label={`${total} ${unit} in the last ${weeks} weeks`}
                className="grid gap-[3px] w-full"
                style={{ gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))` }}
            >
                {cols.map((col, w) => (
                    <div key={w} className="grid gap-[3px]">
                        {col.map((c, r) =>
                            c ? (
                                <motion.div
                                    key={c.date}
                                    initial={animated ? { opacity: 0, scale: 0.6 } : false}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: animated ? w * 0.008 : 0, duration: 0.25 }}
                                    onMouseEnter={() => setTip(c)}
                                    onMouseLeave={() => setTip(null)}
                                    className="aspect-square rounded-[2px]"
                                    style={{
                                        background: c.value ? color : 'rgba(255,255,255,0.06)',
                                        opacity: c.value ? LEVELS[level(c.value)] : undefined,
                                    }}
                                />
                            ) : (
                                <div key={r} />
                            )
                        )}
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-between mt-3 text-[11px] text-neutral-400">
                <span>
                    {tip
                        ? `${tip.value} ${unit} on ${tip.date}`
                        : `${total.toLocaleString()} ${unit} in the last year`}
                </span>
                <span className="flex items-center gap-1">
                    Less
                    {[0, ...LEVELS.slice(1)].map((o, i) => (
                        <span
                            key={i}
                            className="w-[10px] h-[10px] rounded-[2px]"
                            style={{ background: i ? color : 'rgba(255,255,255,0.06)', opacity: i ? o : 1 }}
                        />
                    ))}
                    More
                </span>
            </div>
        </div>
    );
}
