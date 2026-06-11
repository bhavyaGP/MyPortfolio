import { useState, useEffect } from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from '../assets/projects/bhavya3.jpg'
import { motion } from 'framer-motion'
import { FaArrowRight, FaDownload, FaTrophy, FaUsers, FaGraduationCap, FaRupeeSign } from 'react-icons/fa'
import { Button } from './ui/button'

const ROLES = [
  'Backend AI Engineer',
  'Full Stack Developer',
  'LLM App Builder',
  'Open Source Contributor',
]

const STATS = [
  { icon: <FaUsers />,        value: '300+',   label: 'Live Users' },
  { icon: <FaRupeeSign />,    value: '1L',      label: 'SSIP Funded' },
  { icon: <FaGraduationCap />,value: '9.11',    label: 'CGPA' },
  { icon: <FaTrophy />,       value: '4x',      label: 'Hackathon Win' },
]

const Typewriter = () => {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const full = ROLES[roleIdx]
    let timeout

    if (!deleting && displayed.length < full.length) {
      timeout = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === full.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx(i => (i + 1) % ROLES.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIdx])

  return (
    <span className="text-white">
      {displayed}
      <span className="animate-pulse text-neutral-400">|</span>
    </span>
  )
}

const Hero = () => {
  return (
    <div className="min-h-[70vh] flex items-center pb-4">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">

        {/* LEFT — text */}
        <div className="flex flex-col items-center lg:items-start gap-6">

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 liquid-glass-subtle px-4 py-1.5 rounded-full text-sm text-neutral-300"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open to opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-center lg:text-left leading-tight"
          >
            <span className="bg-gradient-to-br from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              Bhavya
            </span>
            <br />
            <span className="bg-gradient-to-br from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
              Prajapati
            </span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl sm:text-2xl font-light tracking-wide text-neutral-400 text-center lg:text-left h-8"
          >
            <Typewriter />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-lg text-neutral-400 leading-relaxed text-sm sm:text-base text-center lg:text-left"
          >
            {HERO_CONTENT}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-lg"
          >
            {STATS.map(({ icon, value, label }) => (
              <div key={label} className="liquid-glass rounded-xl p-3 flex flex-col items-center gap-1 text-center">
                <span className="text-neutral-400 text-sm">{icon}</span>
                <span className="text-white font-bold text-lg leading-none">{value}</span>
                <span className="text-neutral-500 text-[11px]">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex gap-3 justify-center lg:justify-start"
          >
            <Button variant="glass" size="default" asChild>
              <a href="#projects">
                View Projects <FaArrowRight className="text-xs" />
              </a>
            </Button>
            <Button variant="glass" size="default" asChild>
              <a
                href="https://drive.google.com/file/d/1ifrcd8J_5Vfi5b0ZiHfcNiKAR5FIjxxp/view?usp=drive_link"
                // href="https://drive.google.com/file/d/14O-V9dJKSNaT8MSxF9LVBRD62p22rJt0/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload className="text-xs" /> Resume
              </a>
            </Button>
          </motion.div>
        </div>

        {/* RIGHT — profile */}
        <div className="flex justify-center lg:justify-center overflow-hidden sm:overflow-visible">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-white/5 blur-2xl scale-110" />

            {/* Spinning dashed ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-12px] rounded-full border border-dashed border-white/15"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-24px] rounded-full border border-dashed border-white/8"
            />

            {/* Image */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full liquid-glass p-1">
              <img
                src={profilePic}
                alt="Bhavya Prajapati"
                className="w-full h-full rounded-full object-cover object-top"
              />
            </div>

            {/* Floating badge — top right */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.5, type: 'spring' }}
              className="absolute -top-2 -right-4 liquid-glass rounded-xl px-3 py-2 text-center shadow-lg"
            >
              <p className="text-white font-bold text-base leading-none">9.11</p>
              <p className="text-neutral-400 text-[10px] mt-0.5">CGPA</p>
            </motion.div>

            {/* Floating badge — bottom left */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.5, type: 'spring' }}
              className="absolute -bottom-2 -left-4 liquid-glass rounded-xl px-3 py-2 text-center shadow-lg"
            >
              <p className="text-white font-bold text-base leading-none">300+</p>
              <p className="text-neutral-400 text-[10px] mt-0.5">Users</p>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default Hero
