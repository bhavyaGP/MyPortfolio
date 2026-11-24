export default function Activity() {
  return (
    <section className="section" id="activity" style={{ '--hm': '2' }} aria-labelledby="activity-h">
        <div className="wrap">
          <div className="section-head" data-word="Activity">
            <h2 id="activity-h">Coding activity and stats</h2>
            <p>GitHub contributions, LeetCode submissions and MonkeyType personal bests.</p>
          </div>
          <div className="grid grid--top">
            <div className="span-4 act glass"><p className="band">Live · last 26 weeks</p><h3>GitHub activity</h3><div className="stat"><p className="stat__n"><span id="gh-n">–</span> contributions<small>in the last year</small></p><div className="gh" id="gh" role="img" aria-label="GitHub contributions over the last 26 weeks"></div></div><a className="link" href="https://github.com/bhavyagp" target="_blank" rel="noopener noreferrer">See GitHub profile</a></div>
            <div className="span-4 act glass"><p className="band">Live · last 52 weeks</p><h3>LeetCode activity</h3><div className="stat stat--img"><img src="https://leetcard.jacoblin.cool/bhavya5_exe?theme=light&amp;bg=00000000&amp;border=00000000&amp;ring=0a0a0a&amp;activity=0a0a0a&amp;font=Albert%20Sans&amp;ext=heatmap" alt="LeetCode solved counts and submission heatmap" width="336" height="264" loading="lazy" /></div><a className="link" href="https://leetcode.com/bhavya5_exe" target="_blank" rel="noopener noreferrer">See LeetCode profile</a></div>
            <div className="span-4 act glass"><p className="band">Personal bests · words mode</p><h3>MonkeyType stats</h3><div className="stat"><p className="stat__n"><span id="mt-n">142</span> wpm<small>best at 10 words</small></p><ul className="rows" id="mt"></ul></div><a className="link" href="https://monkeytype.com/profile/Bhavya5678" target="_blank" rel="noopener noreferrer">See MonkeyType profile</a></div>
          </div>
        </div>
      </section>
  )
}
