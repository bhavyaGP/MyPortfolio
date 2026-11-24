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
const ROOT = `:root{--p-bg:#ffffff;--p-surface:#f2f2f2;--p-ink:#0a0a0a;--p-muted:#525252;--p-accent:#0a0a0a;--p-accent-ink:#ffffff;--p-action:#0a0a0a;--p-action-ink:#ffffff;--p-inv-bg:#000000;--p-inv-surface:#111111;--p-inv-ink:#ffffff;--p-inv-muted:#a3a3a3;--p-inv-accent:#ffffff;--p-inv-accent-ink:#000000;--p-inv-action:#ffffff;--p-inv-action-ink:#000000;--font-display:"Barlow Semi Condensed","Barlow",system-ui,sans-serif;--font-text:"Barlow",system-ui,sans-serif;--display-weight:600;--display-tracking:-0.01em;--display-tracking-xl:-0.015em}`

const link = (href) => new Promise((res) => {
  const l = document.createElement('link')
  l.rel = 'stylesheet'; l.href = href; l.onload = l.onerror = res
  document.head.append(l)
})
const script = (src) => { const s = document.createElement('script'); s.type = 'module'; s.src = src; document.head.append(s) }

// The greeting: Hello, Kem cho, Hola, Ciao, Aloha, Bonjour, each a heavy word made of liquid glass on black.
// The letters bend the page behind them (Chromium: a displacement map drawn from the word's own blurred outline) and carry a lit rim.
// Plays on every load; click, any key or Skip ends it; reduced motion skips it.
const HELLO = ['Hello', 'Kem cho', 'Hola', 'Ciao', 'Aloha', 'Bonjour']
const HELLO_FONT = '"Barlow Semi Condensed"'   // loaded with the page fonts
const pen = (text, font, px, w, h, k) => {
  const c = document.createElement('canvas'); c.width = Math.ceil(w * k); c.height = Math.ceil(h * k)
  const x = c.getContext('2d', { willReadFrequently: true }); x.scale(k, k)
  x.font = `700 ${px}px ${font}, "Nirmala UI", sans-serif`; x.textAlign = 'center'; x.textBaseline = 'middle'
  return [c, x]
}
async function greeting() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const el = document.createElement('div')
  el.className = 'hello'; el.setAttribute('role', 'presentation')
  el.innerHTML = '<div class="hello__word"></div><canvas class="hello__rim"></canvas><button class="hello__skip" type="button">Skip</button>'
    + '<svg width="0" height="0" aria-hidden="true" style="position:absolute"><filter id="hello-f" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" x="0" y="0"></filter></svg>'
  document.documentElement.append(el)
  const word = el.querySelector('.hello__word'), rim = el.querySelector('.hello__rim'), f = el.querySelector('filter'), skip = el.querySelector('button')
  const chromium = navigator.userAgentData?.brands?.some((b) => b.brand === 'Chromium')
  let i = 0, done = false, timer
  const end = () => { if (done) return; done = true; clearTimeout(timer); document.removeEventListener('keydown', end); el.classList.add('is-out'); setTimeout(() => el.remove(), 500) }
  el.addEventListener('click', end); document.addEventListener('keydown', end)
  skip.focus({ preventScroll: true })
  await Promise.race([document.fonts.load(`700 64px ${HELLO_FONT}`, HELLO.join(" ")), new Promise((r) => setTimeout(r, 1200))])
  const show = () => {
    if (done) return
    if (i >= HELLO.length) return end()
    const text = HELLO[i], font = HELLO_FONT, dpr = devicePixelRatio || 1
    const w = Math.round(Math.min(innerWidth * 0.94, 1400)), h = Math.round(Math.min(innerHeight * 0.56, 460))
    const px = Math.min(h * 0.7, 100 * w * 0.86 / pen(text, font, 100, 1, 1, 1)[1].measureText(text).width)
    // the glass body: an element masked to the word, its backdrop bent and lifted
    const [mc, mx] = pen(text, font, px, w, h, dpr); mx.fillText(text, w / 2, h / 2)
    const mask = `url(${mc.toDataURL()})`
    Object.assign(word.style, { width: w + 'px', height: h + 'px', maskImage: mask, webkitMaskImage: mask, maskSize: '100% 100%', webkitMaskSize: '100% 100%' })
    if (chromium) {
      // height field: the word blurred; its slope pushes the backdrop sideways at every edge, like a thick drop of glass
      const k = 0.5, cw = Math.ceil(w * k), ch = Math.ceil(h * k)
      const [, hx] = pen(text, font, px, w, h, k); hx.filter = `blur(${Math.max(2, px * k / 12)}px)`; hx.fillText(text, w / 2, h / 2)
      const a = hx.getImageData(0, 0, cw, ch).data, out = hx.createImageData(cw, ch), d = out.data
      const at = (x, y) => a[(Math.min(ch - 1, Math.max(0, y)) * cw + Math.min(cw - 1, Math.max(0, x))) * 4 + 3]
      for (let y = 0; y < ch; y++) for (let x = 0; x < cw; x++) {
        const o = (y * cw + x) * 4
        d[o] = 128 + Math.max(-127, Math.min(127, (at(x + 1, y) - at(x - 1, y)) * 2)); d[o + 1] = 128 + Math.max(-127, Math.min(127, (at(x, y + 1) - at(x, y - 1)) * 2)); d[o + 2] = 128; d[o + 3] = 255
      }
      const mapC = document.createElement('canvas'); mapC.width = cw; mapC.height = ch; mapC.getContext('2d').putImageData(out, 0, 0)
      f.setAttribute('width', w); f.setAttribute('height', h)
      f.innerHTML = `<feImage href="${mapC.toDataURL()}" x="0" y="0" width="${w}" height="${h}" preserveAspectRatio="none" result="m"/><feDisplacementMap in="SourceGraphic" in2="m" scale="${Math.round(px * 0.32)}" xChannelSelector="R" yChannelSelector="G"/>`
      word.style.backdropFilter = 'url(#hello-f) blur(1.5px) saturate(1.3) brightness(2.6)'
    }
    // the rim: a thin outline, brightest along the top where the light catches it
    rim.width = w * dpr; rim.height = h * dpr; rim.style.width = w + 'px'; rim.style.height = h + 'px'
    const rx = rim.getContext('2d')
    rx.setTransform(dpr, 0, 0, dpr, 0, 0); rx.clearRect(0, 0, w, h)
    rx.font = `700 ${px}px ${font}, "Nirmala UI", sans-serif`; rx.textAlign = 'center'; rx.textBaseline = 'middle'
    const g = rx.createLinearGradient(0, h / 2 - px / 2, 0, h / 2 + px / 2), ink = '255 255 255'   // the intro is black in both themes
    g.addColorStop(0, `rgb(${ink} / .95)`); g.addColorStop(0.55, `rgb(${ink} / .22)`); g.addColorStop(1, `rgb(${ink} / .55)`)
    rx.lineWidth = Math.max(1.4, px / 110); rx.strokeStyle = g; rx.strokeText(text, w / 2, h / 2)
    // the intro speeds up: Hello holds, Kem cho a little less, then each word comes faster; Bonjour gets a short last beat
    const last = i === HELLO.length - 1, hold = last ? 650 : Math.max(220, 1300 * 0.62 ** i), gap = Math.max(110, 360 * 0.7 ** i)
    el.style.setProperty('--hello-in', Math.max(320, 1200 * 0.7 ** i) + 'ms')
    el.classList.remove('is-in'); void el.offsetWidth; el.classList.add('is-in')
    timer = setTimeout(() => { el.classList.remove('is-in'); timer = setTimeout(() => { i++; show() }, gap) }, hold)
  }
  show()
}

// Liquid glass: every .glass pane bends what sits behind it at its rim, like a drop on a window.
// Chromium takes an SVG filter in backdrop-filter, so each pane gets a displacement map drawn to its own size and corner;
// other browsers keep the CSS blur and rim (page.css). Maps are redrawn when a pane changes size.
const NS = 'http://www.w3.org/2000/svg'
function glassMap(w, h, r, band) {
  const k = 2, cw = Math.ceil(w / k), ch = Math.ceil(h / k)   // half resolution, stretched back by feImage
  const c = document.createElement('canvas'); c.width = cw; c.height = ch
  const ctx = c.getContext('2d'), img = ctx.createImageData(cw, ch), d = img.data
  const hx = w / 2 - r, hy = h / 2 - r
  for (let j = 0; j < ch; j++) for (let i = 0; i < cw; i++) {
    const px = (i + 0.5) * k - w / 2, py = (j + 0.5) * k - h / 2
    const qx = Math.abs(px) - hx, qy = Math.abs(py) - hy
    const out = Math.hypot(Math.max(qx, 0), Math.max(qy, 0))
    const depth = -(out + Math.min(Math.max(qx, qy), 0) - r)   // distance inside the rounded edge
    let nx = 0, ny = 0, m = 0
    if (depth < band) {
      m = (1 - Math.max(depth, 0) / band) ** 2
      if (qx > 0 && qy > 0) { nx = qx / out; ny = qy / out } else if (qx > qy) nx = 1; else ny = 1
      nx *= Math.sign(px); ny *= Math.sign(py)
    }
    const o = (j * cw + i) * 4
    d[o] = 128 - nx * m * 127; d[o + 1] = 128 - ny * m * 127; d[o + 2] = 128; d[o + 3] = 255
  }
  ctx.putImageData(img, 0, 0)
  return c.toDataURL()
}
function glass() {
  if (!navigator.userAgentData?.brands?.some((b) => b.brand === 'Chromium')) return
  const svg = document.createElementNS(NS, 'svg')
  svg.setAttribute('aria-hidden', 'true'); svg.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden'
  document.body.append(svg)
  let n = 0
  const draw = (el) => {
    const w = el.offsetWidth, h = el.offsetHeight
    if (!w || !h) return
    const r = Math.min(parseFloat(getComputedStyle(el).borderTopLeftRadius) || 0, w / 2, h / 2)
    const id = el.dataset.glass ||= 'lg' + n++
    const band = Math.min(Math.max(r, 16) * 1.6, 56, w / 3, h / 3)   // the rim's width; the push stays under it so nothing folds over
    let f = svg.getElementById(id)
    if (!f) { f = document.createElementNS(NS, 'filter'); f.id = id; svg.append(f) }
    f.setAttribute('x', 0); f.setAttribute('y', 0); f.setAttribute('width', w); f.setAttribute('height', h)
    f.setAttribute('filterUnits', 'userSpaceOnUse'); f.setAttribute('color-interpolation-filters', 'sRGB')
    f.innerHTML = `<feImage href="${glassMap(w, h, r, band)}" x="0" y="0" width="${w}" height="${h}" preserveAspectRatio="none" result="m"/>`
      + `<feDisplacementMap in="SourceGraphic" in2="m" scale="${Math.round(band * 1.2)}" xChannelSelector="R" yChannelSelector="G"/>`
    el.style.backdropFilter = `url(#${id}) blur(var(--glass-blur)) saturate(1.4) brightness(var(--glass-lift))`
  }
  const ro = new ResizeObserver((es) => es.forEach((e) => draw(e.target)))
  document.querySelectorAll('.glass').forEach((el) => ro.observe(el))
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
  glass()
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
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#000000' : '#ffffff')
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
