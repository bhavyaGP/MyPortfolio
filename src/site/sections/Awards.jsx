export default function Awards() {
  return (
    <section className="section ground-surface" id="awards" aria-labelledby="awards-h">
        <div className="wrap" data-word="Awards">
          <div className="section-head">
            <h2 id="awards-h">Grants and awards</h2>
            <p>Funding for QuickLearnAI, and two awards for AI and maker projects.</p>
          </div>
          <div className="grid grid--top">
            <article className="tile span-4 glass fan" style={{ "--tilt": "-4deg" }}>
              <div className="tile__media"><img src="/img/ssip.jpg" alt="Bhavya Prajapati receiving the SSIP grant letter from an official" width="900" height="900" loading="lazy" data-source="client" data-subject="SSIP grant letter handover" /></div>
              <p className="band">Grant · QuickLearnAI</p>
              <div className="tile__head"><h3>SSIP grant</h3><span className="tile__price">₹1,00,000</span></div>
              <p>Funding and mentorship from the Gujarat government for QuickLearnAI.</p>
            </article>
            <article className="tile span-4 glass fan fan--smoke" style={{ "--tilt": "2.5deg" }}>
              <div className="tile__media"><img src="/img/playpower.jpg" alt="PlayPower hackathon win announcement" width="1280" height="720" loading="lazy" data-source="client" data-subject="PlayPower hackathon win announcement" /></div>
              <p className="band">Award · 50+ teams</p>
              <div className="tile__head"><h3>PlayPower EdSprint award</h3><span className="tile__price">₹1,00,000</span></div>
              <p>Ultimate Gamechanger Award among 50+ teams, for an AI-powered educational solution.</p>
            </article>
            <article className="tile span-4 glass fan" style={{ "--tilt": "-1.5deg" }}>
              <div className="tile__media"><img src="/img/makersfest.jpg" alt="Three teammates seated beside the MakersFest Vadodara gold award" width="1800" height="1350" loading="lazy" data-source="client" data-subject="MakersFest Vadodara gold award" /></div>
              <p className="band">Gold · January 2026</p>
              <div className="tile__head"><h3>MakersFest Vadodara award</h3><span className="tile__price">Gold award</span></div>
              <p>10–11 January 2026, organised by Tuvalay MakerSpace and the Vadodara Innovation Council.</p>
            </article>
          </div>
        </div>
      </section>
  )
}
