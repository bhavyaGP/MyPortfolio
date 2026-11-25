// Selected work: the titles fill with ink as they scroll past, and on desktop one glass browser window holds still beside them,
// showing the demo of the project in view (scroll.js moves each .tile__media into the window; on phones it stays in its article).
const PLAY = <span className="play" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor"/></svg>Play demo</span>

export default function Work() {
  return (
    <section className="section" id="work" aria-labelledby="work-h">
      <div className="wrap">
        <div className="section-head" data-word="Work">
          <h2 id="work-h">Backend and AI projects</h2>
          <p>Also built: ProgressMatrix, a progress tracker for schools. <a className="link" href="https://drive.google.com/file/d/1WiXgRdBA5mOWw5wJlWR21LIzW294a0uw/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Watch the demo</a></p>
        </div>
        <div className="show">
          <div className="show__list">
            <article className="show__item" data-url="quicklearn.ai.in">
              <p className="band">React · Express · Flask · LangChain · 300+ users</p>
              <h3 className="show__title" data-fill>QuickLearnAI</h3>
              <p>Students upload documents for AI quizzes, document chat and mind maps; teachers run live quiz rooms. 300+ active users.</p>
              <span className="tile__links"><a className="link" href="http://quicklearn.ai.in/" target="_blank" rel="noopener noreferrer">Try QuickLearnAI</a><a className="link" href="https://github.com/bhavyagp/quicklearnai" target="_blank" rel="noopener noreferrer">Read the code</a></span>
              <a className="tile__media" href="https://www.youtube.com/watch?v=nMuUx2Ylit8" target="_blank" rel="noopener noreferrer" data-video="https://www.youtube-nocookie.com/embed/nMuUx2Ylit8?autoplay=1&amp;rel=0" aria-label="Play the QuickLearnAI demo"><img src="/img/proj-quicklearn.jpg" alt="QuickLearnAI dashboard with a score progression chart and performance by topic" width="713" height="464" loading="lazy" data-source="client" data-subject="QuickLearnAI dashboard from its demo video" />{PLAY}</a>
            </article>
            <article className="show__item" data-url="github.com/bhavyaGP/NeuralFlow-York.ie">
              <p className="band">GPT-4 · Jira · coverage 80%+</p>
              <h3 className="show__title" data-fill>DevOps automation</h3>
              <p>Turns a Jira ticket into a tested pull request with GPT-4. Coverage 80%+.</p>
              <span className="tile__links"><a className="link" href="https://github.com/bhavyaGP/NeuralFlow-York.ie.git" target="_blank" rel="noopener noreferrer">Read the code</a></span>
              <a className="tile__media" href="https://www.youtube.com/watch?v=jItTasCJciE" target="_blank" rel="noopener noreferrer" data-video="https://www.youtube-nocookie.com/embed/jItTasCJciE?autoplay=1&amp;rel=0" aria-label="Play the DevOps automation demo"><img src="/img/proj-neuralflow.jpg" alt="Sign in with Jira page of the DevOps automation platform" width="1280" height="720" loading="lazy" data-source="client" data-subject="DevOps automation platform from its demo video" />{PLAY}</a>
            </article>
          </div>
          <div className="show__stage">
            <div className="show__win glass">
              <p className="show__bar"><i></i><i></i><i></i><span className="show__url">quicklearn.ai.in</span></p>
              <div className="show__shots"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
