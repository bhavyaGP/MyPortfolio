export default function Hero() {
  return (
    <section className="hero hero--split" data-enter aria-labelledby="hero-h">
        <div className="wrap"><div className="hero-text grid hero__grid">
          <div className="hero__text span-6">
            <p className="hero__kicker hero__id"><span>Bhavya Prajapati</span><i aria-hidden="true"></i><span>AI engineering intern at ValuraAI</span></p>
            <h1 id="hero-h" className="hero__h1">Software engineer.<br />Builds <span className="mono">AI agents</span>.<span className="l3"><br />Ships <span className="mono">to production</span>.</span></h1>
            <p className="hero__lead">I build backends, retrieval pipelines and the React on top: a Telegram and WhatsApp assistant at ValuraAI, and QuickLearnAI, a learning platform with 300+ live users.</p>
            <div className="btn-row"><a className="btn btn--primary" href="mailto:bgprajapati575@gmail.com">Email Bhavya</a><a className="btn btn--secondary" data-resume href="https://flowcv.com/resume/8dqwp06k81l8" target="_blank" rel="noopener noreferrer">Read the resume</a></div>
          </div>
          <div className="hero__media span-6 start-7">
            <div className="term">
              <div className="term__head"><span>Portfolio · bhavya@main</span><span>Simulated · type “help”</span></div>
              <div className="term__main">
                <div className="term__side" role="img" aria-label="Profile: AI engineering intern at ValuraAI, previously CodemateAI, B.Tech at CHARUSAT, working with Node.js, Flask and React, 300+ users on QuickLearnAI, based in Gujarat, India">
                  <p className="k h">Profile</p>
                  <p className="k">role</p><p className="v">Software engineer</p>
                  <p className="k">now</p><p className="v">ValuraAI</p>
                  <p className="k">past</p><p className="v">CodemateAI</p>
                  <p className="k">degree</p><p className="v">B.Tech, CHARUSAT</p>
                  <p className="k">stack</p><p className="v">Node · Flask · React</p>
                  <p className="k">users</p><p className="v">300+ on QuickLearnAI</p>
                  <p className="k">location</p><p className="v">Gujarat, India</p>
                </div>
                <div className="term__right">
                  <div className="term__scroll" id="term-scroll">
                    <div className="term__rows" id="term-body" role="img" aria-label="Terminal session: a Friday deploy is refused, the three projects shipped with 300+ users on QuickLearnAI, the stack is Node.js, Flask, React, Next.js and Tailwind CSS, one first place, two runner-up finishes and two awards, and Bhavya is open to opportunities">
                      <p className="r"><span className="l c-g">$</span><span>bhavya whoami --verbose</span></p>
                      <p className="r"><span className="l"></span><span className="d">session ready · coffee level unknown</span></p>
                      <p className="r"><span className="l c-b">step 01</span><span>shell: deploy --friday</span></p>
                      <p className="r"><span className="l d">out</span><span className="c-r">refused: not on a Friday</span></p>
                      <p className="r ph"><span className="l c-b">step 02</span><span>git log projects/</span></p>
                      <p className="r ph"><span className="l d">out</span><span className="c-g">3 shipped · 300+ users on QuickLearnAI</span></p>
                      <p className="r ph"><span className="l c-b">step 03</span><span>cat stack.txt</span></p>
                      <p className="r ph"><span className="l d">out</span><span className="c-g">Node.js · Flask · React · Next.js · Tailwind CSS</span></p>
                      <p className="r ph"><span className="l c-b">step 04</span><span>git log hackathons/</span></p>
                      <p className="r ph"><span className="l d">out</span><span className="c-g">1 first place · 2 runner-up · 2 awards</span></p>
                      <p className="r ph"><span className="l c-g">reward</span><span className="c-g">open to opportunities · replies by email</span></p>
                    </div>
                    <div className="term__rows" id="term-out" role="log" aria-live="polite"></div>
                  </div>
                  <div className="term__in"><label className="l c-g" htmlFor="term-cmd">$<span className="vh">Type a command, try help</span></label><input id="term-cmd" type="text" autoComplete="off" autoCapitalize="off" spellCheck="false" placeholder="help" /></div>
                  <div className="term__chips" aria-hidden="true">
                    <span data-c="help">help</span>
                    <span data-c="whoami">whoami</span>
                    <span data-c="projects">projects</span>
                    <span className="ph" data-c="cat stack.txt">cat stack.txt</span>
                    <span className="ph" data-c="repos">repos</span>
                    <span data-c="contact">contact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></div>
      </section>
  )
}
