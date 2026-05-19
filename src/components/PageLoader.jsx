import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader = () => {
    const [done, setDone] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setDone(true), 1200);
        return () => clearTimeout(t);
    }, []);

    return (
        <AnimatePresence>
            {!done && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center gap-4"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col items-center gap-3"
                    >
                        <span className="text-2xl font-bold text-white tracking-tight">Bhavya Prajapati</span>
                        <div className="w-32 h-0.5 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-white rounded-full"
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 1, ease: 'easeInOut' }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PageLoader;
