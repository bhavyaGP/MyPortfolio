export default function Work() {
  return (
    <section className="section" id="work" style={{ '--hm': '2' }} aria-labelledby="work-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="work-h">Backend and AI projects</h2>
            <p>Also built: ProgressMatrix, a progress tracker for schools. <a className="link" href="https://drive.google.com/file/d/1WiXgRdBA5mOWw5wJlWR21LIzW294a0uw/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Watch the demo</a></p>
          </div>
          <div className="grid grid--top">
            <article className="tile tile--wide span-6">
              <a className="tile__media" href="https://www.youtube.com/watch?v=nMuUx2Ylit8" target="_blank" rel="noopener noreferrer" data-video="https://www.youtube-nocookie.com/embed/nMuUx2Ylit8?autoplay=1&amp;rel=0" aria-label="Play the QuickLearnAI demo"><img src="/img/proj-quicklearn.jpg" alt="QuickLearnAI dashboard with a score progression chart and performance by topic" width="713" height="464" loading="lazy" data-source="client" data-subject="QuickLearnAI dashboard from its demo video" /><span className="play" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor"/></svg>Play demo</span></a>
              <div className="tile__head"><h3>QuickLearnAI project</h3></div>
              <p>Students upload documents for AI quizzes, document chat and mind maps; teachers run live quiz rooms. 300+ active users.</p>
              <span className="tile__links"><a className="link" href="http://quicklearn.ai.in/" target="_blank" rel="noopener noreferrer">Try QuickLearnAI</a><a className="link" href="https://github.com/bhavyagp/quicklearnai" target="_blank" rel="noopener noreferrer">Read the code</a></span>
            </article>
            <article className="tile tile--wide span-6">
              <a className="tile__media" href="https://www.youtube.com/watch?v=jItTasCJciE" target="_blank" rel="noopener noreferrer" data-video="https://www.youtube-nocookie.com/embed/jItTasCJciE?autoplay=1&amp;rel=0" aria-label="Play the DevOps automation demo"><img src="/img/proj-neuralflow.jpg" alt="Sign in with Jira page of the DevOps automation platform" width="1280" height="720" loading="lazy" data-source="client" data-subject="DevOps automation platform from its demo video" /><span className="play" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor"/></svg>Play demo</span></a>
              <div className="tile__head"><h3>DevOps automation project</h3></div>
              <p>Turns a Jira ticket into a tested pull request with GPT-4. Coverage 80%+.</p>
              <a className="link" href="https://github.com/bhavyaGP/NeuralFlow-York.ie.git" target="_blank" rel="noopener noreferrer">Read the code</a>
            </article>
          </div>
        </div>
      </section>
  )
}
