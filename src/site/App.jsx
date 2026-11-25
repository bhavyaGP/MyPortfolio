import Header from './sections/Header'
import Hero from './sections/Hero'
import Intro from './sections/Intro'
import Work from './sections/Work'
import Experience from './sections/Experience'
import Hackathons from './sections/Hackathons'
import Awards from './sections/Awards'
import Stack from './sections/Stack'
import Activity from './sections/Activity'
import Footer from './sections/Footer'

const RAIL = [['hero', 'Intro'], ['about', 'About'], ['work', 'Work'], ['experience', 'Experience'], ['hackathons', 'Hackathons'], ['awards', 'Awards'], ['stack', 'Stack'], ['activity', 'Activity'], ['contact', 'Contact']]

// The portfolio page. Markup only: the taste-skill kit scripts and the small helpers in mount.jsx
// (terminal, stats, demo videos, theme) attach their behaviour after the first render, so this tree
// renders once and never re-renders.
export default function App() {
  return (
    <>
      <Header />
      <nav className="rail" aria-label="Sections">
        {RAIL.map(([id, label], i) => <a key={id} href={'#' + id}><span className="rail__n">{i + 1}</span><span className="rail__l">{label}</span></a>)}
      </nav>
      <main id="top">
        <Hero />
        <Intro />
        <Work />
        <Experience />
        <Hackathons />
        <Awards />
        <Stack />
        <Activity />
      </main>
      <Footer />
      <nav className="actionbar" aria-label="Quick actions">
        <a className="btn btn--primary" href="mailto:bgprajapati575@gmail.com">Email Bhavya</a>
      </nav>
    </>
  )
}
