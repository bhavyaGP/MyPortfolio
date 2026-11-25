// One small liquid-glass pill at the top centre, after iamsrikanth.com: the mark, the links, the theme switch and Email
// (mount.jsx bends the page behind it).
export default function Header() {
  return (
    <header className="nav">
      <a className="skip-link" href="#top">Skip to content</a>
      <nav className="nav__pill glass" aria-label="Main">
        <a className="nav__mark" href="#top" aria-label="Bhavya Prajapati, back to top"><span className="mark" data-mark="dots" aria-hidden="true"></span></a>
        <a className="nav__link" href="#work">Work</a>
        <a className="nav__link" href="#experience">Experience</a>
        <a className="nav__link" href="#hackathons">Hackathons</a>
        <a className="nav__link" href="#awards">Awards</a>
        <a className="nav__link" href="#stack">Stack</a>
        <button className="theme-btn" id="theme-toggle" type="button" aria-pressed="false" aria-label="Switch to dark mode">
          <svg className="i-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
          <svg className="i-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
        </button>
        <a className="btn btn--primary nav__cta" href="mailto:bgprajapati575@gmail.com">Email Bhavya</a>
      </nav>
    </header>
  )
}
