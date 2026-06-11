import { useState, useEffect } from 'react'
import { EXPERIENCES } from '../constants'
import { FaExternalLinkAlt, FaCopy, FaCheck, FaBriefcase, FaFileAlt, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'

const RESUME_URLS = [
  {
    label: 'Resume v2',
    tag: 'current',
    url: 'https://drive.google.com/file/d/1ifrcd8J_5Vfi5b0ZiHfcNiKAR5FIjxxp/view?usp=sharing',
  },
  {
    label: 'Resume v1',
    tag: 'old',
    url: 'https://drive.google.com/file/d/14O-V9dJKSNaT8MSxF9LVBRD62p22rJt0/view?usp=sharing',
  },
]

const LS_RESUME_KEY = 'bhavya_active_resume_idx'
const LS_EXP_KEY = 'bhavya_hidden_experiences'

const getHiddenSet = () => {
  try {
    return new Set(JSON.parse(localStorage.getItem(LS_EXP_KEY) || '[]'))
  } catch {
    return new Set()
  }
}

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }
  return (
    <button
      onClick={copy}
      title="Copy URL"
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-400 hover:text-white transition-all text-xs"
    >
      {copied ? <FaCheck className="text-green-400" /> : <FaCopy />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}

const Toggle = ({ on, onToggle, label }) => (
  <button
    onClick={onToggle}
    className="flex items-center gap-2 shrink-0"
    title={on ? 'Visible on public site' : 'Hidden from public site'}
  >
    <div className={`relative w-9 h-5 rounded-full transition-colors ${on ? 'bg-green-500/80' : 'bg-white/15'}`}>
      <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all shadow ${on ? 'left-[18px]' : 'left-0.5'}`} />
    </div>
    <span className={`text-xs font-medium ${on ? 'text-green-400' : 'text-neutral-500'}`}>
      {on ? 'Visible' : 'Hidden'}
    </span>
  </button>
)

const PrivatePage = () => {
  const [activeResumeIdx, setActiveResumeIdx] = useState(() => {
    const saved = localStorage.getItem(LS_RESUME_KEY)
    return saved !== null ? parseInt(saved, 10) : 0
  })

  const [hiddenExps, setHiddenExps] = useState(() => getHiddenSet())

  useEffect(() => {
    localStorage.setItem(LS_RESUME_KEY, String(activeResumeIdx))
  }, [activeResumeIdx])

  const toggleExp = (key) => {
    setHiddenExps(prev => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      localStorage.setItem(LS_EXP_KEY, JSON.stringify([...next]))
      return next
    })
  }

  const visibleCount = EXPERIENCES.length - hiddenExps.size

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-2xl mx-auto px-5 py-14 space-y-10">

        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <FaLock className="text-neutral-600 text-xs" />
              <span className="text-xs text-neutral-600 tracking-widest uppercase">Private</span>
            </div>
            <h1 className="text-2xl font-bold text-white">Bhavya's Panel</h1>
            <p className="text-neutral-600 text-sm mt-0.5">internal use only · not indexed</p>
          </div>
          <div className="w-2 h-2 rounded-full bg-green-500 mt-2 animate-pulse" />
        </div>

        <div className="w-full h-px bg-white/[0.08]" />

        {/* Resume URL */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <FaFileAlt className="text-neutral-500 text-xs" />
            <h2 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider">Resume URL</h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden">
            {RESUME_URLS.map((r, i) => (
              <div
                key={i}
                onClick={() => setActiveResumeIdx(i)}
                className={`flex items-start gap-4 p-4 cursor-pointer transition-colors ${
                  i !== RESUME_URLS.length - 1 ? 'border-b border-white/[0.08]' : ''
                } ${activeResumeIdx === i ? 'bg-white/[0.06]' : 'hover:bg-white/[0.03]'}`}
              >
                <div className={`mt-0.5 w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center transition-colors ${
                  activeResumeIdx === i ? 'border-white' : 'border-neutral-600'
                }`}>
                  {activeResumeIdx === i && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                </div>

                <div className="flex-1 min-w-0 space-y-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-semibold text-white">{r.label}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      r.tag === 'current'
                        ? 'bg-green-500/15 text-green-400 border border-green-500/25'
                        : 'bg-neutral-800 text-neutral-500 border border-white/[0.08]'
                    }`}>{r.tag}</span>
                    {activeResumeIdx === i && (
                      <span className="text-[10px] text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full">active</span>
                    )}
                  </div>
                  <p className="text-xs text-neutral-500 break-all leading-relaxed">{r.url}</p>
                  <div className="flex items-center gap-2 pt-1" onClick={e => e.stopPropagation()}>
                    <CopyButton text={r.url} />
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-400 hover:text-white transition-all text-xs"
                    >
                      <FaExternalLinkAlt className="text-[10px]" /> Open
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-600 pl-1">Active selection saved to localStorage. Public Resume button uses this URL on same browser.</p>
        </section>

        <div className="w-full h-px bg-white/[0.08]" />

        {/* Work Experience toggles */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaBriefcase className="text-neutral-500 text-xs" />
              <h2 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider">Work Experience</h2>
            </div>
            <span className="text-xs text-neutral-600 bg-white/5 border border-white/[0.08] px-2.5 py-1 rounded-full">
              {visibleCount}/{EXPERIENCES.length} visible
            </span>
          </div>

          <div className="space-y-3">
            {EXPERIENCES.map(({ year, role, company, description, technologies }, i) => {
              const key = `${company}__${year}`
              const visible = !hiddenExps.has(key)
              return (
                <div
                  key={i}
                  className={`rounded-2xl border p-5 space-y-3 transition-all ${
                    visible
                      ? 'border-white/10 bg-white/[0.04]'
                      : 'border-white/[0.06] bg-white/[0.02] opacity-50'
                  }`}
                >
                  {/* Card header with toggle */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-semibold text-white text-base leading-snug">{role}</p>
                        <span className="text-xs text-neutral-500 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                          {year}
                        </span>
                      </div>
                      <p className="text-neutral-400 text-sm mt-0.5">{company}</p>
                    </div>
                    <Toggle on={visible} onToggle={() => toggleExp(key)} />
                  </div>

                  <div className="space-y-1.5">
                    {description.split('\n').filter(Boolean).map((line, j) => (
                      <p key={j} className="text-neutral-400 text-xs leading-relaxed">
                        {line.startsWith('-') ? (
                          <span className="flex gap-2">
                            <span className="text-neutral-600 shrink-0 mt-0.5">•</span>
                            <span>{line.slice(1).trim()}</span>
                          </span>
                        ) : line}
                      </p>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {technologies.map((t, j) => (
                      <span key={j} className="text-[10px] border border-white/10 bg-white/5 px-2.5 py-1 rounded-full text-neutral-400">{t}</span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
          <p className="text-xs text-neutral-600 pl-1">Toggle controls visibility on public site (same browser via localStorage).</p>
        </section>

      </div>
    </div>
  )
}

export default PrivatePage
