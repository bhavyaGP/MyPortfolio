export default function Stack() {
  return (
    <section className="section ground-surface g2" id="stack" style={{ '--h': '2', '--hm': '2' }} aria-labelledby="stack-h">
        <div className="wrap">
        <div>
          <div className="section-head">
            <h2 id="stack-h">QuickLearnAI architecture and stack</h2>
            <p className="phone-hide">Node serves user management. Flask serves the AI APIs.</p>
          </div>
          <div className="grid">
          <div className="span-12 arch qa" role="img" aria-label="System architecture of QuickLearnAI. A user reaches the Node server, which serves user management APIs. AI requests go to the Flask server. From there, students get coding assignments with CodeBox, Monaco and AI evaluation, YouTube videos turned into flash cards with LangChain, a PDF and PPT chatbot with RAG, LlamaIndex, OpenAI and a vector database, smart quizzes and mind maps, and question bank generation. Students and teachers share live quizzes over WebSockets. Teachers also get the complete assignment ecosystem with auto test cases, an in-browser editor and rubric reports.">
            <p className="arch__title"><span>System architecture · QuickLearnAI</span><span>React · Express · Socket.IO · Flask · LlamaIndex</span></p>
            <div className="qa__map">
              <div className="node u" style={{ 'gridRow': '1 / 8', 'gridColumn': '1' }}><b>User</b></div>
              <span className="ar2" style={{ 'gridRow': '1 / 8', 'gridColumn': '2' }}><svg className="arw" viewBox="0 0 24 10" preserveAspectRatio="none" aria-hidden="true"><path d="M0 5H22" stroke="currentColor" strokeWidth="1"/><path d="M18 1.5 23 5l-5 3.5z" fill="currentColor"/></svg></span>
              <div className="node" style={{ 'gridRow': '1 / 8', 'gridColumn': '3' }}><b>Node server</b><span className="s">User management APIs</span></div>
              <span className="ar2" style={{ 'gridRow': '1 / 8', 'gridColumn': '4' }}><svg className="arw" viewBox="0 0 24 10" preserveAspectRatio="none" aria-hidden="true"><path d="M0 5H22" stroke="currentColor" strokeWidth="1"/><path d="M18 1.5 23 5l-5 3.5z" fill="currentColor"/></svg></span>
              <div className="node" style={{ 'gridRow': '1 / 8', 'gridColumn': '5' }}><b>Flask server</b><span className="s">AI APIs</span></div>
              <div className="rail" style={{ 'gridRow': '1 / 8', 'gridColumn': '6' }}>
                <i className="h b" style={{ 'top': '213px', 'left': '0', 'width': '50%' }}></i><i className="v b" style={{ 'top': '151px', 'height': '217px' }}></i>
                <i className="h tk b" style={{ 'top': '151px', 'left': '50%', 'right': '0' }}></i><i className="h tk gr" style={{ 'top': '368px', 'left': '50%', 'right': '0' }}></i>
              </div>
              <div className="node role" style={{ 'gridRow': '1 / 6', 'gridColumn': '7' }}><b>Students</b></div>
              <div className="node role gt" style={{ 'gridRow': '6 / 8', 'gridColumn': '7' }}><b>Teachers</b></div>
              <div className="rail" style={{ 'gridRow': '1 / 8', 'gridColumn': '8' }}>
                <i className="v b" style={{ 'top': '27px', 'height': '310px' }}></i><i className="v gr" style={{ 'top': '337px', 'height': '62px' }}></i>
                <i className="h b" style={{ 'top': '151px', 'left': '0', 'width': '50%' }}></i><i className="h gr" style={{ 'top': '368px', 'left': '0', 'width': '50%' }}></i>
                <i className="h r tk b" style={{ 'top': '27px' }}></i><i className="h r tk b" style={{ 'top': '89px' }}></i><i className="h r tk b" style={{ 'top': '151px' }}></i><i className="h r tk b" style={{ 'top': '213px' }}></i><i className="h r tk b" style={{ 'top': '275px' }}></i><i className="h r tk b" style={{ 'top': '337px' }}></i><i className="h r tk gr" style={{ 'top': '399px' }}></i>
              </div>
              <div className="node f" style={{ 'gridRow': '1', 'gridColumn': '9' }}><b>Coding assignment</b><span className="s">CodeBox sandbox, Monaco editor, polling, AI evaluation</span></div>
              <div className="node f" style={{ 'gridRow': '2', 'gridColumn': '9' }}><b>YouTube videos to flash cards</b><span className="s">LangChain, YouTube transcripts, chunking, batch processing</span></div>
              <div className="node f" style={{ 'gridRow': '3', 'gridColumn': '9' }}><b>PDF and PPT chatbot</b><span className="s">RAG, LlamaIndex, OpenAI, vector DB, SSE streaming</span></div>
              <div className="node f" style={{ 'gridRow': '4', 'gridColumn': '9' }}><b>Smart quiz and mind map</b><span className="s">LLM responses, Mermaid rendering</span></div>
              <div className="node f" style={{ 'gridRow': '5', 'gridColumn': '9' }}><b>Question bank generation</b><span className="s">DuckDuckGo search, guardrails, PDF compilation</span></div>
              <div className="node f" style={{ 'gridRow': '6', 'gridColumn': '9' }}><b>Live quiz ecosystem</b><span className="s">Quiz creation, conduction, evaluation, analysis, WebSockets</span></div>
              <div className="node f" style={{ 'gridRow': '7', 'gridColumn': '9' }}><b>Complete assignment ecosystem</b><span className="s">Auto test cases, in-browser editor, rubric reports</span></div>
            </div>
          </div>
          </div>
        </div>
        <div className="grid grid--top">
          <div className="span-6">
            <div className="section-head sub">
              <h3>Coding evaluation architecture</h3>
            </div>
            <ul className="rows">
              <li><span className="rows__name">Sandboxed runs</span><p className="phone-hide">Student code runs in a self-hosted CodeBox sandbox, with time and memory limits on every run.</p></li>
              <li><span className="rows__name">Weighted tests</span><p className="phone-hide">Each question has sample and hidden test cases with weights. Hidden details are redacted from stored results.</p></li>
              <li><span className="rows__name">Reports without scores</span><p className="phone-hide">An LLM writes feedback on the code, but the score always comes from the tests.</p></li>
              <li><span className="rows__name">Teacher in the loop</span><p className="phone-hide">Auto-evaluation creates drafts. Students see a result only after the teacher confirms it.</p></li>
            </ul>
          </div>
          <div className="span-6 start-7 arch" role="img" aria-label="Architecture of the coding evaluation. The student's code editor in the React client calls the Express assignment API, which checks enrolment and the deadline and sends the code to the CodeBox sandbox. The sandbox runs sample and hidden tests, and scoring turns the weighted results into a score on the server. A Flask service uses OpenAI to write feedback without a score. The result is saved as a draft evaluation, a teacher reviews and confirms it, and only then does the student see the result. A submission moves from in progress to submitted, evaluating, graded and released.">
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
