// The statement and the ledger after the hero: the sentence sharpens word by word as it scrolls in (scroll.js fills [data-fill]),
// then four facts, each counted up once (data-count). Every number is on the page again further down, with its evidence.
const FACTS = [
  { n: 300, pre: '', suf: '+', text: 'active users on QuickLearnAI' },
  { n: 400, pre: '', suf: '+', text: 'active users on my Guruverse AI backend at CodemateAI' },
  { n: 2, pre: '₹', suf: 'L', text: 'in grants and awards: SSIP and PlayPower' },
  { n: 3, pre: '', suf: '', text: 'hackathon podiums in 2025' },
]

export default function Intro() {
  return (
    <section className="section intro" id="about" aria-labelledby="about-h">
      <div className="wrap">
        <h2 id="about-h" className="statement" data-fill>I build backends, retrieval pipelines and the React on top.</h2>
        <p className="statement__sub">Chat assistants on Telegram and WhatsApp at ValuraAI, QuickLearnAI for students and teachers, and a drawn architecture for each, further down.</p>
        <ul className="ledger">
          {FACTS.map((f) => (
            <li key={f.text}>
              <p className="ledger__n">{f.pre}<span data-count={f.n}>{f.n}</span>{f.suf && <sup>{f.suf}</sup>}</p>
              <p className="ledger__t">{f.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
