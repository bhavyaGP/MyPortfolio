import { createRoot } from 'react-dom/client'
import { flushSync } from 'react-dom'
import App from './App.jsx'
import pageCss from './page.css?raw'

const KIT = ['/assets/system.css', '/assets/ui/cards.css', '/assets/motion/motion.css', '/assets/layout/layout.css', '/assets/icons/icon.css', '/assets/diagrams/diagram.css']
const FONT = 'https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Barlow+Semi+Condensed:wght@500;600;700&display=swap'
const MONO = 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap'
// 60-30-10: 60% paper (--p-bg), 30% ink and surface (--p-ink, --p-surface), 10% green (--p-accent, --p-action); brass stays as --p-inv-accent only
// unslop direction: night-time terminals. Ink neutrals (unslop tokens), one green accent for actions, links and focus.
// Signal-box panel: enamel-plate grey ground, near-black ink, enamel signal blue for actions; lamps (green, amber, red) stay small and lit.
const ROOT = `:root{--p-bg:#e9ece7;--p-surface:#dde1da;--p-ink:#11161b;--p-muted:#454d55;--p-accent:#0a4a8a;--p-accent-ink:#ffffff;--p-action:#0a4a8a;--p-action-ink:#ffffff;--p-inv-bg:#0a0f16;--p-inv-surface:#111823;--p-inv-ink:#e8edf3;--p-inv-muted:#9aa6b4;--p-inv-accent:#7db7f2;--p-inv-accent-ink:#0a0f16;--p-inv-action:#e8edf3;--p-inv-action-ink:#0a0f16;--font-display:"Barlow Semi Condensed","Barlow",system-ui,sans-serif;--font-text:"Barlow",system-ui,sans-serif;--display-weight:600;--display-tracking:-0.01em;--display-tracking-xl:-0.015em}`

const link = (href) => new Promise((res) => {
  const l = document.createElement('link')
  l.rel = 'stylesheet'; l.href = href; l.onload = l.onerror = res
  document.head.append(l)
})
const script = (src) => { const s = document.createElement('script'); s.type = 'module'; s.src = src; document.head.append(s) }

// "Hello, visitor" in English plus 19 Indian languages, fading in and out once per session. Click, any key or Skip ends it;
// reduced motion skips it. Bodo, Santali and Meitei are left out until a native speaker can supply them. Have the others checked too.
const HELLO = [
  ['en', 'Hello, visitor'], ['hi', 'नमस्ते, आगंतुक'], ['gu', 'નમસ્તે, મુલાકાતી'], ['bn', 'নমস্কার, দর্শনার্থী'], ['ta', 'வணக்கம், பார்வையாளரே'],
  ['te', 'నమస్కారం, సందర్శకుడా'], ['kn', 'ನಮಸ್ಕಾರ, ಸಂದರ್ಶಕರೇ'], ['ml', 'നമസ്കാരം, സന്ദർശകരേ'], ['mr', 'नमस्कार, पाहुणे'], ['pa', 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ਮਹਿਮਾਨ'],
  ['or', 'ନମସ୍କାର, ଅତିଥି'], ['as', 'নমস্কাৰ, দৰ্শনাৰ্থী'], ['ur', 'السلام علیکم، زائر', 'rtl'], ['sa', 'नमो नमः, अतिथे'], ['ne', 'नमस्ते, आगन्तुक'],
  ['kok', 'नमस्कार, पाहुणो'], ['mai', 'प्रणाम, आगंतुक'], ['sd', 'سلام، مهمان', 'rtl'], ['ks', 'آداب، مہمان', 'rtl'], ['doi', 'नमस्ते, मेहमान'],
]
function greeting() {
  try { if (sessionStorage.getItem('greeted') || matchMedia('(prefers-reduced-motion: reduce)').matches) return; sessionStorage.setItem('greeted', '1') } catch { return }
  const el = document.createElement('div')
  el.className = 'hello'; el.setAttribute('role', 'presentation')
  el.innerHTML = '<p class="hello__t" aria-hidden="true"></p><button class="hello__skip" type="button">Skip</button>'
  document.documentElement.append(el)
  const t = el.querySelector('.hello__t'), skip = el.querySelector('button')
  let i = 0, done = false, timer
  const end = () => { if (done) return; done = true; clearTimeout(timer); document.removeEventListener('keydown', end); el.classList.add('is-out'); setTimeout(() => el.remove(), 500) }
  const show = () => {
    if (i >= HELLO.length) return end()
    const [lang, text, dir] = HELLO[i]
    t.lang = lang; t.dir = dir || 'ltr'; t.textContent = text
    t.classList.add('is-on')
    const hold = i < 3 ? 550 : 220   // the first three are readable, the rest sweep by
    timer = setTimeout(() => { t.classList.remove('is-on'); i++; timer = setTimeout(show, 140) }, hold)
  }
  el.addEventListener('click', end); document.addEventListener('keydown', end)
  skip.focus({ preventScroll: true })
  show()
}

// The nav is a line diagram: the station for the section in view is lit (aria-current).
function stations() {
  const links = [...document.querySelectorAll('.nav__link')]
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return
    links.forEach((l) => l.toggleAttribute('aria-current', l.getAttribute('href') === '#' + e.target.id))
  }), { rootMargin: '-45% 0px -50% 0px' })
  links.forEach((l) => { const s = document.querySelector(l.getAttribute('href')); if (s) io.observe(s) })
}

export default async function mount() {
  const h = document.documentElement
  try { h.dataset.theme = localStorage.getItem('theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') } catch { h.dataset.theme = 'light' }
  h.lang = 'en'
  Object.assign(h.dataset, { type: 'service', radius: 'soft', buttons: 'tonal', motion: '' })
  h.classList.add('m-enter', 'mo-js')
  setTimeout(() => h.classList.add('m-enter-done'), 700)
  setTimeout(() => h.classList.add('mo-safe'), 2500)
  await Promise.all([FONT, MONO, ...KIT].map(link))
  const st = document.createElement('style'); st.textContent = ROOT + pageCss; document.head.append(st)
  // ponytail: the kit wants header, main and footer straight under <body>, so React renders into body itself
  document.getElementById('root')?.remove()
  flushSync(() => createRoot(document.body).render(<App />))
  greeting()
  const url = localStorage.getItem('bhavya_resume_url')
  if (url) document.querySelectorAll('[data-resume]').forEach((a) => a.setAttribute('href', url))
  activity()
  videos()
  terminal()
  theme()
  stations()
  ;['/assets/system.js', '/assets/motion/motion.js', '/assets/layout/layout.js', '/assets/diagrams/mount.js'].forEach(script)
}

// GitHub cells and MonkeyType bests (the same sources the old stat cards used); LeetCode is an <img>.
const MT = { 10: [142, 100], 25: [105, 100], 50: [78, 98] }   // static fallback, as before
function activity() {
  const $ = (id) => document.getElementById(id)
  const bests = (b) => {
    $('mt-n').textContent = b[10][0]
    $('mt').innerHTML = Object.entries(b).map(([w, [wpm, acc]]) => `<li><span class="rows__name">${w} words<small>${acc}% accuracy</small></span><span class="rows__value">${wpm} wpm</span></li>`).join('')
  }
  bests(MT)
  fetch('https://github-contributions-api.jogruber.de/v4/bhavyagp?y=last').then((r) => r.json()).then((j) => {
    const days = j.contributions || []
    $('gh-n').textContent = j.total?.lastYear ?? days.reduce((n, d) => n + d.count, 0)
    $('gh').innerHTML = days.slice(-182).map((d) => `<i data-l="${d.level}" title="${d.count} on ${d.date}"></i>`).join('')   // last 26 weeks fill the box
  }).catch(() => {})
  const key = import.meta.env.VITE_MT_APE_KEY   // ponytail: key ships in the bundle, as in the old card; proxy it if it matters
  if (key) fetch('https://api.monkeytype.com/users/Bhavya5678/profile', { headers: { Authorization: `ApeKey ${key}` } }).then((r) => r.json()).then((d) => {
    const pb = d?.data?.personalBests?.words, out = {}
    for (const w of Object.keys(MT)) out[w] = pb?.[w]?.[0] ? [Math.round(pb[w][0].wpm), Math.round(pb[w][0].acc)] : MT[w]
    if (pb) bests(out)
  }).catch(() => {})
}

// The hero terminal: type a command, the result is appended to the transcript. Results are set with textContent, never innerHTML.
const SECTIONS = ['work', 'experience', 'hackathons', 'awards', 'stack', 'activity']
const STACK = ['Node.js, Flask, React, Next.js, Tailwind CSS', 'PostgreSQL, MongoDB, MySQL, Prisma, Pinecone', 'Docker, Git, Postman']
const CMDS = {
  help: ['whoami      who I am', 'now         current role', 'projects    what I built', 'ls          list the project folders', 'cat stack.txt the tools I use', 'repos       my latest GitHub repos, live', 'date        the date and time, live', 'echo <text> says it back', 'hackathons  results', 'contact     email and links', 'valuraai    my ValuraAI bots and screener', 'resume      open my resume', 'open <name> jump to ' + SECTIONS.join(', '), 'history     what you typed', 'clear       empty the screen'],
  whoami: ['Bhavya Prajapati, software engineer, Gujarat', 'B.Tech Computer Engineering, CHARUSAT, 2022 to 2026', 'Writes code, reads logs, blames DNS.'],
  now: ['ValuraAI, AI engineering intern', 'Telegram and WhatsApp assistant linked to a financial account', 'AI Screener: plain English to a stock screen', 'before: CodemateAI, Aug 2025 to Aug 2026'],
  projects: ['valuraai/            Telegram and WhatsApp assistant, AI Screener', 'quicklearnai/       300+ users, React, Express, Flask, LangChain', 'devops-automation/  Jira ticket to tested pull request, GPT-4', 'progressmatrix/      school progress tracking, MySQL, Prisma'],
  ls: ['valuraai/  quicklearnai/  devops-automation/  progressmatrix/  stack.txt'],
  pwd: ['/home/bhavya/portfolio'],
  stack: STACK,
  hackathons: ['1st place   HackTheSpring 2025', 'runner-up   YORK.ie Hackathon 2025', 'runner-up   CVM University Hackathon 2025'],
  valuraai: ['telegram  https://web.telegram.org/k/#@valura_ai_bot', 'whatsapp  https://wa.me/918460730331', 'screener  https://global.valura.ai/dashboard/screener-agent'],
  contact: ['bgprajapati575@gmail.com', 'github.com/bhavyagp', 'linkedin.com/in/bhavya-prajapati-a8b001256'],
  sudo: ['bhavya is not in the sudoers file. This incident will be reported to nobody.'],
}
function terminal() {
  const inp = document.getElementById('term-cmd'), out = document.getElementById('term-out'), box = document.getElementById('term-scroll')
  if (!inp) return
  const hist = []; let at = 0
  const row = (label, text, lc, tc) => {
    const p = document.createElement('p'); p.className = 'r'
    const a = document.createElement('span'), b = document.createElement('span')
    a.className = 'l ' + lc; a.textContent = label; b.className = tc; b.textContent = text
    p.append(a, b); out.append(p); box.scrollTop = box.scrollHeight
  }
  box.addEventListener('click', () => { if (!getSelection().toString()) inp.focus() })
  inp.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') { e.preventDefault(); at = Math.max(0, Math.min(hist.length, at + (e.key === 'ArrowUp' ? -1 : 1))); inp.value = hist[at] || ''; return }
    if (e.key === 'Tab') { e.preventDefault(); const w = inp.value.trim().toLowerCase(), hit = Object.keys(CMDS).concat('repos', 'date', 'echo', 'resume', 'open', 'clear', 'history', 'cat').filter((c) => w && c.startsWith(w)); if (hit.length === 1) inp.value = hit[0]; return }
    if (e.key === 'Enter' && inp.value.trim()) { const v = inp.value.trim(); inp.value = ''; run(v) }
  })
  document.querySelector('.term__chips')?.addEventListener('click', (e) => { const c = e.target.closest('[data-c]')?.dataset.c; if (c) { run(c); inp.focus() } })
  const run = async (raw) => {
    const [cmd, arg] = raw.toLowerCase().split(/\s+/)
    hist.push(raw); at = hist.length
    // ponytail: when what is on screen already overflows the box, start a clean screen instead of scrolling past it
    if (cmd !== 'clear' && box.scrollHeight > box.clientHeight + 4) { document.getElementById('term-body').hidden = true; out.replaceChildren() }
    if (cmd === 'clear') { document.getElementById('term-body').hidden = true; out.replaceChildren(); return }
    row('$', raw, 'c-g', '')
    let first = true
    const o = (t, tc = 'c-g') => { row(first ? 'out' : '', t, 'd', tc); first = false }
    const all = (a) => a.forEach((t) => o(t))
    if (cmd === 'echo') o(raw.slice(5))
    else if (cmd === 'date') o(new Date().toString())
    else if (cmd === 'history') all(hist.map((h, n) => (n + 1) + '  ' + h))
    else if (cmd === 'cat') { if (arg === 'stack.txt') all(STACK); else o('cat: ' + (arg || '') + ': no such file. Try ls.', 'c-r') }
    else if (cmd === 'resume') { const a = document.querySelector('[data-resume]'); o('opening ' + a.href); window.open(a.href, '_blank', 'noopener') }
    else if (cmd === 'open') {
      if (SECTIONS.includes(arg)) { o('opening ' + arg); location.hash = arg } else o('sections: ' + SECTIONS.join(', '), 'c-r')
    } else if (cmd === 'repos') {
      o('fetching from api.github.com ...', 'd')
      try {
        const r = await (await fetch('https://api.github.com/users/bhavyagp/repos?sort=pushed&per_page=5')).json()
        all(r.map((x) => `${x.name} · ${x.language || '-'} · pushed ${x.pushed_at.slice(0, 10)}`))
      } catch { o('repos: the network said no', 'c-r') }
    } else if (Object.hasOwn(CMDS, cmd)) all(CMDS[cmd])
    else o(cmd + ': command not found. Try help, or a coffee.', 'c-r')
  }
}

// Light and dark: the choice is kept; the switch grows a circle from the button, or fades where View Transitions are missing.
function theme() {
  const root = document.documentElement, btn = document.getElementById('theme-toggle')
  const set = (dark) => {
    root.dataset.theme = dark ? 'dark' : 'light'
    btn.setAttribute('aria-pressed', dark); btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode')
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0a0f16' : '#e9ece7')
    try { localStorage.setItem('theme', root.dataset.theme) } catch { /* private window */ }
  }
  set(root.dataset.theme === 'dark')
  btn.addEventListener('click', (e) => {
    const dark = root.dataset.theme !== 'dark'
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return set(dark)
    if (!document.startViewTransition) { root.classList.add('theme-fade'); set(dark); setTimeout(() => root.classList.remove('theme-fade'), 500); return }
    root.style.setProperty('--tx', e.clientX + 'px'); root.style.setProperty('--ty', e.clientY + 'px')
    document.startViewTransition(() => set(dark))
  })
}

// A demo thumbnail plays in place on click; without script the link opens the video on YouTube.
function videos() {
  document.querySelectorAll('a[data-video]').forEach((a) => a.addEventListener('click', (e) => {
    e.preventDefault()
    const f = document.createElement('iframe')
    f.src = a.dataset.video; f.title = a.getAttribute('aria-label'); f.className = 'tile__video'
    f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen'; f.allowFullscreen = true
    a.replaceWith(f)
  }))
}
