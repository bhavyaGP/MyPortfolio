// The tools, on a wheel that turns as you scroll: the name in front is sharp, the rest tilt away and blur (scroll.js turns it).
const TOOLS = ['Node.js', 'Express', 'Flask', 'FastAPI', 'React', 'Next.js', 'Tailwind CSS', 'LangChain', 'LlamaIndex', 'OpenAI', 'Gemini', 'PostgreSQL', 'MongoDB', 'Redis', 'Pinecone', 'Socket.IO', 'Twilio', 'Docker', 'Git']

// One box of the QuickLearnAI architecture; scroll.js draws the wires between boxes from data-wire on the map.
function SysNode({ id, icon, name, sub, port }) {
  return (
    <div className="sys__node" data-id={id}>
      <span className="sys__ic"><img src={`/assets/icons/${icon}.svg`} alt="" width="22" height="22" /></span>
      <span className="sys__txt"><b>{name}</b><small>{sub}</small></span>
      {port && <span className="sys__port">{port}</span>}
    </div>
  )
}

export default function Stack() {
  return (
    <section className="section ground-surface g2" id="stack" style={{ '--h': '2', '--hm': '2' }} aria-labelledby="stack-h">
        <div className="drum" role="img" aria-label={'Tools: ' + TOOLS.join(', ')}>
          <div className="drum__stage">
            <p className="drum__note">The tools behind every project and figure on this page.</p>
            <ul className="drum__wheel" aria-hidden="true">{TOOLS.map((t, i) => <li key={t} style={{ '--i': i }}>{t}</li>)}</ul>
          </div>
        </div>
        <div className="wrap">
        <div>
          <div className="section-head" data-word="Stack">
            <h2 id="stack-h">QuickLearnAI architecture and stack</h2>
            <p className="phone-hide">Node serves user management. Flask serves the AI APIs.</p>
          </div>
          <div className="grid">
          <div className="span-12 arch sys glass" role="img" aria-label="High-level architecture of QuickLearnAI. The React and Vite client on port 5173 calls three servers: the Node Express server on port 3001 through VITE_API_URL, the Flask server on Uvicorn on port 5001 through VITE_GEN_PROXY, and the Socket.IO server on port 5002 through VITE_SOCKET_URL. The Node server also proxies AI requests to Flask through AI_API_URL. Node and Flask both read and write MongoDB and Redis.">
            <p className="arch__title"><span>High-level architecture · QuickLearnAI</span><span>React · Express · Flask · Socket.IO · MongoDB · Redis</span></p>
            <div className="sys__map">
              <div className="sys__tier"><p className="sys__k">Frontend</p>
                <SysNode id="client" icon="react" name="Client" sub="React / Vite" port=":5173" />
              </div>
              <div className="sys__tier"><p className="sys__k">Backend</p>
                <SysNode id="node" icon="nodejs" name="Node server" sub="Express" port=":3001" />
                <SysNode id="flask" icon="flask" name="Flask server" sub="Uvicorn" port=":5001" />
                <SysNode id="socket" icon="websocket" name="Socket server" sub="Socket.IO" port=":5002" />
              </div>
              <div className="sys__tier"><p className="sys__k">Data</p>
                <SysNode id="mongo" icon="mongodb" name="MongoDB" sub="Document database" />
                <SysNode id="redis" icon="redis" name="Redis" sub="In-memory store" />
              </div>
            </div>
            <p className="sys__ai">Flask serves the AI: coding evaluation · YouTube to flash cards · PDF and PPT chat · quizzes and mind maps · question banks · live quizzes</p>
          </div>
          </div>
        </div>
        <div className="grid grid--top">
          <div className="span-6">
            <div className="section-head sub">
              <h3>Coding evaluation architecture</h3>
            </div>
            <ul className="rows glass">
              <li><span className="rows__name">Sandboxed runs</span><p className="phone-hide">Student code runs in a self-hosted CodeBox sandbox, with time and memory limits on every run.</p></li>
              <li><span className="rows__name">Weighted tests</span><p className="phone-hide">Each question has sample and hidden test cases with weights. Hidden details are redacted from stored results.</p></li>
              <li><span className="rows__name">Reports without scores</span><p className="phone-hide">An LLM writes feedback on the code, but the score always comes from the tests.</p></li>
              <li><span className="rows__name">Teacher in the loop</span><p className="phone-hide">Auto-evaluation creates drafts. Students see a result only after the teacher confirms it.</p></li>
            </ul>
          </div>
          <div className="span-6 start-7 arch glass" role="img" aria-label="Architecture of the coding evaluation. The student's code editor in the React client calls the Express assignment API, which checks enrolment and the deadline and sends the code to the CodeBox sandbox. The sandbox runs sample and hidden tests, and scoring turns the weighted results into a score on the server. A Flask service uses OpenAI to write feedback without a score. The result is saved as a draft evaluation, a teacher reviews and confirms it, and only then does the student see the result. A submission moves from in progress to submitted, evaluating, graded and released.">
            <p className="arch__title"><span>Coding evaluation · QuickLearnAI</span><span>Express · Flask · CodeBox</span></p>
            <div className="arch__grid">
              <div className="node r d" style={{ 'gridArea': '1 / 1' }}><span className="n">01</span><b>Code editor</b><span className="s">Monaco: run, save, submit</span></div>
              <div className="node r d" style={{ 'gridArea': '1 / 2' }}><span className="n">02</span><b>Assignment API</b><span className="s">Enrolment and deadline checks</span></div>
              <div className="node d box" style={{ 'gridArea': '1 / 3' }}><span className="n">03</span><b>CodeBox sandbox</b><span className="s">Sample and hidden tests</span></div>
              <div className="node l" style={{ 'gridArea': '2 / 3' }}><span className="n">04</span><b>Scoring</b><span className="s">Weighted, per question</span></div>
              <div className="node l" style={{ 'gridArea': '2 / 2' }}><span className="n">05</span><b>Report</b><span className="s">LLM feedback, no score</span></div>
              <div className="node d" style={{ 'gridArea': '2 / 1' }}><span className="n">06</span><b>Draft</b><span className="s">Saved for review</span></div>
              <div className="node r" style={{ 'gridArea': '3 / 1' }}><span className="n">07</span><b>Teacher</b><span className="s">Reviews and confirms</span></div>
              <div className="node ok" style={{ 'gridArea': '3 / 2' }}><span className="n">08</span><b>Student result</b><span className="s">Only once confirmed</span></div>
            </div>
            <p className="arch__states"><span>in_progress</span><i>›</i><span>submitted</span><i>›</i><span>evaluating</span><i>›</i><span>graded</span><i>›</i><span className="g">released</span></p>
          </div>
        </div>
        </div>
      </section>
  )
}
