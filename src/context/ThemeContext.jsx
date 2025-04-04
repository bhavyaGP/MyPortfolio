import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Check system preference and localStorage
    const getInitialTheme = () => {
        // Check if localStorage has a saved preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme === 'dark';
        }
        
        // Otherwise check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return true; // Dark mode if system prefers dark
        }
        
        return true; // Default to dark mode
    };

    const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);
    const [fontSize, setFontSize] = useState(() => {
        const savedFontSize = localStorage.getItem('fontSize');
        return savedFontSize ? parseInt(savedFontSize) : 16; // Default to 16px
    });

    // Listen for system preference changes
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            // Only update if there's no user preference saved
            if (!localStorage.getItem('theme')) {
                setIsDarkMode(mediaQuery.matches);
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        if (isDarkMode) {
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.add('light');
        }
    }, [isDarkMode]);

    useEffect(() => {
        localStorage.setItem('fontSize', fontSize);
        document.documentElement.style.fontSize = `${fontSize}px`;
    }, [fontSize]);

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    const increaseFontSize = () => {
        setFontSize(prev => Math.min(prev + 2, 24));
    };

    const decreaseFontSize = () => {
        setFontSize(prev => Math.max(prev - 2, 12));
    };

    return (
        <ThemeContext.Provider value={{
            isDarkMode,
            toggleTheme,
            fontSize,
            increaseFontSize,
            decreaseFontSize
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}; 