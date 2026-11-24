export default function Footer() {
  return (
    <footer className="footer closing" id="contact" data-word="Contact" aria-labelledby="close-h">
      <div className="wrap">
        <div className="closing__cta close--word glass">
          <div className="section-head--split">
            <div><h2 id="close-h">Work with Bhavya on backend and AI</h2><p className="t-lead">Open to opportunities and collaborations.</p><p className="band">Replies by email</p></div>
            <a className="btn btn--primary" href="mailto:bgprajapati575@gmail.com">Email Bhavya<svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true"><path className="m-arrow__stem" d="M1 6h8"/><path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5"/></svg></a>
          </div>
        </div>
        <div className="closing__links">
          <div className="grid">
            <div className="span-4 stack-5">
              <a className="nav__logo" href="#top"><span className="mark" data-mark="dots" aria-hidden="true"></span>Bhavya Prajapati</a>
              <p className="footer__lede">Software engineer from Gujarat.</p>
            </div>
            <div className="span-2 footer__col"><h3>Work</h3><ul><li><a href="#work">Projects</a></li><li><a href="#activity">Activity</a></li></ul></div>
            <div className="span-2 footer__col"><h3>Experience</h3><ul><li><a href="#experience">Jobs and study</a></li></ul></div>
            <div className="span-2 footer__col"><h3>Results</h3><ul><li><a href="#hackathons">Hackathons</a></li><li><a href="#awards">Awards</a></li></ul></div>
            <div className="span-2 footer__col"><h3>Elsewhere</h3><ul><li><a href="https://www.github.com/bhavyagp" target="_blank" rel="noopener noreferrer">GitHub</a></li><li><a href="https://www.linkedin.com/in/bhavya-prajapati-a8b001256/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li><li><a data-resume href="https://flowcv.com/resume/8dqwp06k81l8" target="_blank" rel="noopener noreferrer">Read the resume</a></li></ul></div>
          </div>
          <div className="footer__legal">
            <span>&copy;2026 Bhavya Prajapati</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
