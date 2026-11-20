export default function Header() {
  return (
    <header className="nav">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">Skip to content</a>
        <a className="nav__logo" href="#top"><span className="mark" data-mark="dots" aria-hidden="true"></span>Bhavya Prajapati</a>
        <nav className="nav__links" aria-label="Main">
          <div className="nav__item"><a className="nav__link" href="#work">Work</a></div>
          <div className="nav__item"><a className="nav__link" href="#experience">Experience</a></div>
          <div className="nav__item"><a className="nav__link" href="#hackathons">Hackathons</a></div>
          <div className="nav__item"><a className="nav__link" href="#awards">Awards</a></div>
          <div className="nav__item"><a className="nav__link" href="#stack">Stack</a></div>
        </nav>
        <div className="nav__actions">
          <button className="theme-btn" id="theme-toggle" type="button" aria-pressed="false" aria-label="Switch to dark mode">
            <svg className="i-moon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            <svg className="i-sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
          </button>
          <a className="btn btn--primary" href="mailto:bgprajapati575@gmail.com">Email Bhavya</a>
        </div>
        <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu"><svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg></button>
      </div>
    </header>
  )
}
