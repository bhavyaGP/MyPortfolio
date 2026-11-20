export default function Experience() {
  return (
    <section className="section" id="experience" style={{ '--hm': '2' }} aria-labelledby="experience-h">
        <div className="wrap grid grid--top">
          <div className="span-6">
            <div className="section-head">
              <h2 id="experience-h">Backend experience and education</h2>
            </div>
            <ul className="rows">
              <li><span className="rows__name">ValuraAI, current<small>AI engineering intern</small></span><span className="rows__value">Now</span>
                <ul className="built">
                  <li>Telegram and WhatsApp assistant: a chat links to one financial account by Telegram deep link or Mini App, or by SMS code on WhatsApp.</li>
                  <li>One webhook routes Telegram, WhatsApp and website chat to the AI agent, with feature flags and flood limits.</li>
                  <li>AI Screener: an LLM turns plain English into a typed filter, an engine runs it on stored market data, and results stream to the web app.</li>
                  <li>Screener UI in Next.js with a table, charts, a compare view and saved screens.</li>
                </ul>
                <p className="links"><a className="link" href="https://web.telegram.org/k/#@valura_ai_bot" target="_blank" rel="noopener noreferrer">Try the Telegram bot</a><a className="link" href="https://wa.me/918460730331" target="_blank" rel="noopener noreferrer">Try the WhatsApp bot</a><a className="link" href="https://indweb-stg.valura.ai/dashboard/screener-agent" target="_blank" rel="noopener noreferrer">Try the AI Screener</a></p></li>
              <li><span className="rows__name">CodemateAI<small>Backend AI engineer intern, remote</small></span><span className="rows__value">Aug 2025 – Aug 2026</span><p>I built Guruverse AI on the OpenAI and Gemini SDKs with embeddings. My Node.js and vector-database backend served 400+ active users.</p></li>
              <li><span className="rows__name">CHARUSAT University<small>B.Tech, Computer Engineering</small></span><span className="rows__value">2022 – 2026</span></li>
            </ul>
          </div>
          <div className="span-6 start-7 arch" role="img" aria-label="ValuraAI architecture: Telegram and WhatsApp chats reach the ValuraAI API, which calls the AI agents on OpenAI and keeps links and sessions in PostgreSQL and Redis. The Next.js web app runs the AI Screener, and Twilio sends WhatsApp sign-in codes.">
            <p className="arch__title"><span>ValuraAI · chat and screener</span><span>Express · FastAPI</span></p>
            <div className="arch__grid">
              <div className="node r" style={{ 'gridArea': '1 / 1' }}><span className="n">01</span><b>Chats</b><span className="s">Telegram, WhatsApp</span></div>
              <div className="node r d" style={{ 'gridArea': '1 / 2' }}><span className="n">02</span><b>ValuraAI API</b><span className="s">Webhook, links, screener</span></div>
              <div className="node" style={{ 'gridArea': '1 / 3' }}><span className="n">03</span><b>AI agents</b><span className="s">Chat and screener specs</span></div>
              <div className="node" style={{ 'gridArea': '2 / 1' }}><span className="n">04</span><b>Web app</b><span className="s">Screener UI</span></div>
              <div className="node" style={{ 'gridArea': '2 / 2' }}><span className="n">05</span><b>Data</b><span className="s">Links and sessions</span></div>
              <div className="node" style={{ 'gridArea': '2 / 3' }}><span className="n">06</span><b>Twilio</b><span className="s">WhatsApp codes</span></div>
            </div>
          </div>
        </div>
      </section>
  )
}
