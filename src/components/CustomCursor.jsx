import { useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const move = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 z-[99999] pointer-events-none select-none"
            style={{ x: mouseX, y: mouseY }}
        >
            {/* Figma-style dark arrow with white outline */}
            <svg width="50" height="26" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* White outline layer */}
                <path d="M3 2L27 18L17 19.5L11.5 31L3 2Z" fill="white" stroke="white" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
                {/* Dark fill layer */}
                <path d="M3 2L27 18L17 19.5L11.5 31L3 2Z" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="1" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
        </motion.div>
    );
};

export default CustomCursor;
