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
import ScrollToTop from './components/ScrollToTop'
import PageLoader from './components/PageLoader'
import MonkeyTypeStats from './components/MonkeyTypeStats'
import { ThemeProvider } from './context/ThemeContext'
import { useTheme } from './context/ThemeContext'
import { motion } from 'framer-motion'
const ThemeBackground = () => {
  const { bgVariant } = useTheme();

  return (
    <div className='fixed top-0 -z-10 h-full w-full'>
      {bgVariant === 'old-purple' && (
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.4),rgba(255,255,255,0))]" />
      )}
      {bgVariant === 'dark-purple' && (
        <div className="relative h-full w-full bg-black">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-black to-neutral-900" />
          <div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-10 blur-[100px]" />
        </div>
      )}
      {bgVariant === 'blue-black' && (
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_150%_at_50%_80%,#000_40%,#63e_100%)]" />
      )}
      {bgVariant === 'dot' && (
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]" />
      )}
      {bgVariant === 'lines' && (
        <div className="relative h-full w-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]" />
        </div>
      )}
    </div>
  );
};

const CodingStats = () => {
  return (
    <div className="border-b border-white/10 pb-16 mb-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center my-10"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Dev <span className="bg-gradient-to-r from-neutral-200 to-neutral-500 bg-clip-text text-transparent">Activity</span>
        </h2>
        <p className="text-neutral-500 text-sm">GitHub contributions, LeetCode & typing speed</p>
        <div className="w-16 h-1 bg-white/20 mx-auto rounded-full mt-3" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <GitHubContributions />
        <LeetCodeStats />
        <MonkeyTypeStats />
      </div>
    </div>
  );
};

// Main App component
const AppContent = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`overflow-x-hidden ${isDarkMode ? 'text-neutral-200' : 'text-gray-900'} antialiased selection:bg-cyan-300 selection:text-cyan-900 flex justify-center items-center min-h-screen`}>
      <ThemeBackground />

      <div className='container mx-auto px-4 md:px-10'>
        <Navbar />
        <div id="hero"><Hero /></div>
        <About />
        <Technologies />
        <CodingStats />
        <Experience />
        <div id="projects"><Project /></div>
        <div id="achievements"><Achievements /></div>
        <div id="certificates"><Certificates /></div>
        <Contact />
      </div>
    </div>
  );
};


const App = () => {
  return (
    <ThemeProvider>
<PageLoader />
      <AppContent />
      <ScrollToTop />
    </ThemeProvider>
  );
};

export default App