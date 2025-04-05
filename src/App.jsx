import About from './components/About'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Technologies from './components/Technologies'
import Contact from './components/Contact'
import Certificates from './components/Certificates'
import Achievements from './components/Achievements'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { useTheme } from './context/ThemeContext'

// Background component that changes based on theme
const ThemeBackground = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className='fixed top-0 -z-10 h-full w-full'>
      {isDarkMode ? (
        // Dark mode background
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      ) : (
        // Light mode background
        <div className="absolute top-0 -z-10 h-full w-full bg-white">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(120,119,198,10)] opacity-70 blur-[80px]"></div>
        </div>
      )}
    </div>
  );
};

// Main App component
const AppContent = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <Router>
      <div className={`overflow-x-hidden ${isDarkMode ? 'text-neutral-200' : 'text-gray-900'} antialiased selection:bg-cyan-300 selection:text-cyan-900 flex justify-center items-center min-h-screen`}>
        <ThemeBackground />

        <div className='container mx-auto px-10'>
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Technologies />
                <Experience />
                <Project />
                <Contact />
              </>
            } />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/achievements" element={<Achievements />} />
          </Routes>
        </div>
        
      </div>
    </Router>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App