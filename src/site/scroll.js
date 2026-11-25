// Scroll choreography: the section rail, the window turning night/dawn per chapter, words sharpening into ink,
// the ledger counting up, the work window, the tool wheel and the ASCII portrait. One rAF-throttled scroll loop drives it all.
import Lenis from 'lenis'
import portrait from '../assets/projects/bhavya2.jpg'

const still = matchMedia('(prefers-reduced-motion: reduce)')
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v))

export default function scroll({ setFlip }) {
  // inertial scrolling (as on iamsrikanth.com): Lenis eases the native scroll position, so sticky stages,
  // view timelines and the kit's own scroll listeners keep working; the terminal's own scroll box is left alone
  if (!still.matches) {
    document.getElementById('term-scroll')?.setAttribute('data-lenis-prevent', '')
    const lenis = new Lenis({ lerp: 0.09, anchors: true })
    const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
  }
  const jobs = []
  sections(setFlip)
  fills(jobs)
  counts()
  showcase(jobs)
  drum(jobs)
  ascii()
  wires()
  let queued = false
  const tick = () => { queued = false; const vh = innerHeight; jobs.forEach((j) => j(vh)) }
  const ask = () => { if (!queued) { queued = true; requestAnimationFrame(tick) } }
  addEventListener('scroll', ask, { passive: true }); addEventListener('resize', ask); tick()
}

// The rail and the nav pill light the section at the middle of the screen; chapters marked data-flip turn the window over.
function sections(setFlip) {
  const links = [...document.querySelectorAll('.rail a, .nav__link')]
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return
    links.forEach((l) => l.toggleAttribute('aria-current', l.getAttribute('href') === '#' + e.target.id))
    setFlip(e.target.hasAttribute('data-flip'))
  }), { rootMargin: '-50% 0px -50% 0px' })
  document.querySelectorAll('main > [id], .footer[id]').forEach((s) => io.observe(s))
}

// [data-fill]: each word goes from a blurred grey to sharp ink as the line crosses the lower half of the screen.
function fills(jobs) {
  const els = [...document.querySelectorAll('[data-fill]')]
  els.forEach((el) => {
    const words = el.textContent.trim().split(/\s+/)
    el.setAttribute('aria-label', el.textContent.trim())
    el.innerHTML = words.map((w, i) => `<span class="w" aria-hidden="true" style="--i:${i}">${w.replace(/[<&]/g, (c) => (c === '<' ? '&lt;' : '&amp;'))}</span>`).join(' ')
    el.style.setProperty('--n', words.length)
    el.classList.add('is-split')
  })
  if (still.matches) return els.forEach((el) => el.style.setProperty('--p', 1))
  jobs.push((vh) => els.forEach((el) => {
    const r = el.getBoundingClientRect()
    el.style.setProperty('--p', clamp((vh * 0.92 - r.top) / (vh * 0.5 + r.height)).toFixed(3))
  }))
}

// [data-count]: the number runs up once, the first time it is on screen.
function counts() {
  if (still.matches) return
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return
    io.unobserve(e.target)
    const el = e.target, n = +el.dataset.count, t0 = performance.now()
    const step = (t) => { const k = clamp((t - t0) / 1400); el.textContent = Math.round(n * (1 - 2 ** (-10 * k))); if (k < 1) requestAnimationFrame(step); else el.textContent = n }
    el.textContent = 0; requestAnimationFrame(step)
  }), { threshold: 1 })
  document.querySelectorAll('[data-count]').forEach((el) => io.observe(el))
}

// Work: from 1024px each demo moves into the one glass window, which shows the project nearest the middle of the screen.
function showcase(jobs) {
  const items = [...document.querySelectorAll('.show__item')], shots = document.querySelector('.show__shots'), url = document.querySelector('.show__url')
  if (!shots) return
  const media = items.map((it) => it.querySelector('.tile__media'))
  const wide = matchMedia('(min-width: 1024px)')
  const place = () => media.forEach((m, i) => (wide.matches ? shots : items[i]).append(m))
  place(); wide.addEventListener('change', place)
  let on = -1
  jobs.push((vh) => {
    if (!wide.matches) return
    let best = 0, d = Infinity
    items.forEach((it, i) => { const r = it.getBoundingClientRect(), x = Math.abs(r.top + r.height / 2 - vh / 2); if (x < d) { d = x; best = i } })
    if (best === on) return
    on = best
    media.forEach((m, i) => m.classList.toggle('is-on', i === on))
    items.forEach((it, i) => it.classList.toggle('is-on', i === on))
    url.textContent = items[on].dataset.url
  })
}

// Stack: the names sit round a wheel; scrolling the tall drum turns it, so one name at a time comes to the front.
function drum(jobs) {
  const box = document.querySelector('.drum'), li = [...document.querySelectorAll('.drum__wheel li')]
  if (!box || still.matches) return
  box.classList.add('is-live')
  const step = 18, n = li.length
  jobs.push((vh) => {
    const r = box.getBoundingClientRect()
    if (r.bottom < 0 || r.top > vh) return
    const rot = clamp(-r.top / (r.height - vh)) * (n - 1) * step
    li.forEach((el, i) => {
      const a = i * step - rot, far = Math.min(Math.abs(a) / step, 4)
      el.style.transform = `rotateX(${-a}deg) translateZ(var(--drum-r)) rotateZ(${clamp(a * 0.35, -14, 14)}deg)`
      el.style.opacity = Math.abs(a) > 80 ? 0 : (1 - far * 0.2).toFixed(2)
      el.style.filter = far < 0.15 ? 'none' : `blur(${(far * 2.2).toFixed(1)}px)`
      el.classList.toggle('is-front', far < 0.5)
    })
  })
}

// The portrait behind the hero: the photo drawn in characters, in the same grey as the anchor words, redrawn with the theme.
// ponytail: it lives in the hero only; fixed behind the whole page it made every glass pane resample it each frame (~1s per theme flip)
function ascii() {
  const c = document.createElement('canvas'); c.className = 'ascii'; c.setAttribute('aria-hidden', 'true')
  const hero = document.querySelector('.hero')
  if (!hero) return
  hero.prepend(c)
  const img = new Image(); img.src = portrait
  const RAMP = ' .:-=+*#%@'
  const cols = 76, rows = 52
  let lum, fall
  const sample = () => {   // luminance per cell, stretched to full range; a falloff round the face lets the leaves behind it fade
    const o = document.createElement('canvas'); o.width = cols; o.height = rows
    const x = o.getContext('2d', { willReadFrequently: true }); x.drawImage(img, 0, 0, cols, rows)
    const d = x.getImageData(0, 0, cols, rows).data
    lum = []; fall = []
    for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
      const k = (j * cols + i) * 4
      lum.push(d[k] * 0.3 + d[k + 1] * 0.59 + d[k + 2] * 0.11)
      fall.push(clamp(1.35 - Math.hypot((i / cols - 0.5) / 0.34, (j / rows - 0.5) / 0.6)))
    }
    const lo = Math.min(...lum), hi = Math.max(...lum)
    lum = lum.map((v) => (v - lo) / (hi - lo))
  }
  const draw = () => {
    if (!lum) sample()
    const dpr = devicePixelRatio || 1, dark = document.documentElement.dataset.theme === 'dark'
    const ch = Math.min(innerHeight, innerWidth * 0.66) / rows, cw = ch * 0.6
    c.width = cols * cw * dpr; c.height = rows * ch * dpr; c.style.width = cols * cw + 'px'; c.style.height = rows * ch + 'px'
    const x = c.getContext('2d'); x.scale(dpr, dpr)
    x.font = `500 ${ch * 0.92}px "Geist Mono", monospace`; x.textBaseline = 'top'
    x.fillStyle = getComputedStyle(c).color   // .ascii sets it from the theme's ink and window
    // at night light parts of the photo get the dense characters; at dawn the dark parts do, so the face reads the same way round
    lum.forEach((l, n) => { const g = RAMP[Math.round((dark ? l : 1 - l) * fall[n] * (RAMP.length - 1))]; if (g !== ' ') x.fillText(g, (n % cols) * cw, Math.floor(n / cols) * ch) })
  }
  img.onload = () => {
    draw()
    addEventListener('resize', draw)
    new MutationObserver(() => setTimeout(draw, 30)).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
  }
}

// The QuickLearnAI architecture: curved wires between the boxes, redrawn whenever the map changes size.
// Client links carry the env var that points them at each server; data flows animate along the dashes.
const WIRES = [
  ['client', 'node', 'VITE_API_URL'], ['client', 'flask', 'VITE_GEN_PROXY'], ['client', 'socket', 'VITE_SOCKET_URL'],
  ['node', 'flask', 'AI_API_URL proxy'],
  ['node', 'mongo'], ['node', 'redis'], ['flask', 'mongo'], ['flask', 'redis'],
]
function wires() {
  const map = document.querySelector('.sys__map')
  if (!map) return
  const NS = 'http://www.w3.org/2000/svg'
  const svg = document.createElementNS(NS, 'svg'); svg.classList.add('sys__wires'); svg.setAttribute('aria-hidden', 'true')
  const tags = document.createElement('div'); tags.className = 'sys__tags'; tags.setAttribute('aria-hidden', 'true')
  map.append(svg, tags)
  const box = (id) => map.querySelector(`[data-id="${id}"]`)
  const draw = () => {
    const m = map.getBoundingClientRect()
    svg.setAttribute('viewBox', `0 0 ${m.width} ${m.height}`)
    let paths = '', html = ''
    for (const [a, b, label] of WIRES) {
      const r1 = box(a).getBoundingClientRect(), r2 = box(b).getBoundingClientRect()
      const x1 = r1.left - m.left, y1 = r1.top - m.top, x2 = r2.left - m.left, y2 = r2.top - m.top
      let d, lx, ly
      if (Math.abs(r1.left - r2.left) < 4) {   // same tier: a short drop from one box to the one below
        const cx = x1 + r1.width * 0.5, sy = y1 + r1.height, ey = y2
        d = `M${cx} ${sy} C${cx} ${sy} ${cx} ${ey} ${cx} ${ey}`
        lx = cx + 10; ly = (sy + ey) / 2
        if (label) html += `<span class="sys__tag sys__tag--side" style="left:${lx}px;top:${ly}px">${label}</span>`
      } else {
        const sx = x1 + r1.width, sy = y1 + r1.height / 2, ex = x2, ey = y2 + r2.height / 2, k = (ex - sx) * 0.5
        d = `M${sx} ${sy} C${sx + k} ${sy} ${ex - k} ${ey} ${ex} ${ey}`
        if (label) html += `<span class="sys__tag" style="left:${ex - 10}px;top:${ey}px">${label}</span>`
      }
      paths += `<path class="sys__wire${label ? '' : ' sys__wire--data'}" d="${d}"/><path class="sys__flow" d="${d}"/>`
      paths += `<circle class="sys__end" r="3" cx="${d.split(' ').slice(-2)[0]}" cy="${d.split(' ').slice(-1)[0]}"/>`
    }
    svg.innerHTML = paths; tags.innerHTML = html
  }
  new ResizeObserver(draw).observe(map)
}
