import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const BG_VARIANTS = [
  { id: 'old-purple',  label: 'Classic' },
  { id: 'dark-purple', label: 'Dark Fuchsia' },
  { id: 'blue-black',  label: 'Blue-Black' },
  { id: 'dot',         label: 'Dot Grid' },
  { id: 'lines',       label: 'Grid Lines' },
];

export const ThemeProvider = ({ children }) => {
    const isDarkMode = true;

    const [bgVariant, setBgVariantState] = useState(() => {
        return localStorage.getItem('bgVariant') || 'old-purple';
    });

    const [fontSize, setFontSize] = useState(() => {
        const saved = localStorage.getItem('fontSize');
        return saved ? parseInt(saved) : 16;
    });

    const setBgVariant = (id) => {
        setBgVariantState(id);
        localStorage.setItem('bgVariant', id);
    };

    useEffect(() => {
        localStorage.setItem('fontSize', fontSize);
        document.documentElement.style.fontSize = `${fontSize}px`;
    }, [fontSize]);

    const increaseFontSize = () => setFontSize(prev => Math.min(prev + 2, 24));
    const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 2, 12));

    return (
        <ThemeContext.Provider value={{
            isDarkMode,
            bgVariant,
            setBgVariant,
            fontSize,
            increaseFontSize,
            decreaseFontSize,
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within a ThemeProvider');
    return context;
};
