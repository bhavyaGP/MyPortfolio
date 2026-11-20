export default function Hackathons() {
  return (
    <section className="section" id="hackathons" style={{ '--h': '2', '--hm': '2' }} data-moment="pinned-chapters" aria-labelledby="hackathons-h">
        <div className="wrap mo-pc__grid">
          <div className="mo-pc__text">
            <h2 id="hackathons-h">Hackathon results, 2025</h2>
            <ol className="mo-pc__steps">
              <li className="mo-pc__step">
                <h3>1st place, HackTheSpring</h3>
                <p>Open Innovation category at GEC-28, Gandhinagar: 78 teams, 188 participants, 36 hours.</p>
                <figure className="mo-pc__visual"><img src="/img/hack-gec.jpg" alt="Two teammates holding HackTheSpring certificates in a classroom" width="1800" height="1200" data-source="client" data-subject="HackTheSpring 2025 prize giving" /></figure>
              </li>
              <li className="mo-pc__step">
                <h3>Runner-up, YORK.ie Hackathon</h3>
                <p>AI Automation category in Ahmedabad: a 12-hour build, a ₹10,000 cheque on 31 May.</p>
                <figure className="mo-pc__visual"><img src="/img/hack-york.jpg" alt="Three teammates holding the runner-up cheque at the YORK.ie Hackathon" width="1800" height="1200" data-source="client" data-subject="YORK.ie Hackathon 2025 runner-up cheque" /></figure>
              </li>
              <li className="mo-pc__step">
                <h3>1st runner-up, CVM University Hackathon</h3>
                <p>Emerging Technologies category at ADIT, Anand, with QuickLearnAI. ₹15,000, 15 February.</p>
                <figure className="mo-pc__visual"><img src="/img/hack-cvmu.jpg" alt="The team receiving the 1st runner-up cheque on stage at the CVM University Hackathon" width="1800" height="1200" data-source="client" data-subject="CVM University Hackathon 2025 prize giving" /></figure>
              </li>
            </ol>
          </div>
          <div className="mo-pc__visuals frame"></div>
        </div>
      </section>
  )
}
