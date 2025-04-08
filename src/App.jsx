import About from './components/About'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Technologies from './components/Technologies'
import GitHubContributions from './components/GitHubContributions'
import LeetCodeStats from './components/LeetCodeStats'
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

// Coding Stats section that displays GitHub and LeetCode side by side
const CodingStats = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`border-b ${isDarkMode ? 'border-neutral-700' : 'border-gray-300'} pb-16 mb-8`}>
      <h2 className={`my-10 text-center text-4xl font-bold ${isDarkMode ? 'text-neutral-100' : 'text-gray-900'}`}>
        Coding Statistics
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* GitHub side */}
        <div className={`${isDarkMode ? 'bg-slate-800/30' : 'bg-gray-50'} rounded-xl p-6 shadow-md h-full flex flex-col`}>
          <GitHubContributions />
        </div>
        
        {/* LeetCode side */}
        <div className={`${isDarkMode ? 'bg-slate-800/30' : 'bg-gray-50'} rounded-xl p-6 shadow-md h-full flex flex-col`}>
          <LeetCodeStats />
        </div>
      </div>
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
                <CodingStats />
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