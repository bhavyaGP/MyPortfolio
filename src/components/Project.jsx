import React, { useState } from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub, FaPlay, FaStar, FaUsers } from 'react-icons/fa'

const getYouTubeThumbnail = (embedUrl) => {
  const match = embedUrl?.match(/embed\/([^?]+)/)
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : null
}

const VideoEmbed = ({ project, compact = false, aspectPct = 56.25, fill = false }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoSrc = project.demoVideo ? `${project.demoVideo}?autoplay=1&mute=1&rel=0` : null
  const thumbnail = project.demoVideo ? getYouTubeThumbnail(project.demoVideo) : null

  return (
    <div className={`relative w-full overflow-hidden bg-black/40 ${fill ? 'h-full' : ''} ${compact ? 'rounded-2xl' : 'rounded-3xl'}`}
      style={fill ? undefined : { paddingBottom: `${aspectPct}%` }}>
      {isPlaying ? (
        <iframe
          src={videoSrc}
          title={`${project.title} demo`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          style={{ border: 'none' }}
        />
      ) : (
        <div className="absolute inset-0">
          {thumbnail && (
            <img src={thumbnail} alt={`${project.title} preview`}
              className="w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <button
              onClick={() => setIsPlaying(true)}
              className="flex items-center gap-2 px-5 py-2.5 liquid-glass text-white font-semibold rounded-full shadow-lg hover:bg-white/15 transition-colors"
            >
              <FaPlay className="text-xs" /> Play Demo
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

const TechTag = ({ label }) => (
  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-300">
    {label}
  </span>
)

const Links = ({ project }) => (
  <div className="flex items-center gap-4">
    <a href={project.livelink} target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-1.5 text-xs font-medium text-neutral-300 hover:text-white transition-colors liquid-glass-subtle px-3 py-1.5 rounded-full">
      <FaExternalLinkAlt className="text-[10px]" /> Live
    </a>
    <a href={project.githublink} target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-1.5 text-xs font-medium text-neutral-300 hover:text-white transition-colors liquid-glass-subtle px-3 py-1.5 rounded-full">
      <FaGithub className="text-[10px]" /> GitHub
    </a>
  </div>
)

/* Featured — full-width horizontal card */
const FeaturedCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="liquid-glass-strong rounded-2xl overflow-hidden mb-5 max-w-4xl mx-auto"
  >
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {/* Video */}
      <div className="relative h-full min-h-[220px]">
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5">
          <span className="flex items-center gap-1 bg-amber-400/20 border border-amber-400/40 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full">
            <FaStar className="text-amber-400 text-[9px]" /> Major Project
          </span>
          <span className="flex items-center gap-1 bg-green-400/15 border border-green-400/30 text-green-300 text-[10px] font-medium px-2 py-0.5 rounded-full">
            <FaUsers className="text-[9px]" /> 300+ Users
          </span>
        </div>
        <VideoEmbed project={project} fill />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-neutral-500 text-[10px] font-mono">01</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-neutral-400 text-xs leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>
        <div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.map((t, i) => <TechTag key={i} label={t} />)}
          </div>
          <Links project={project} />
        </div>
      </div>
    </div>
  </motion.div>
)

/* Regular — compact vertical card */
const RegularCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="liquid-glass rounded-2xl overflow-hidden flex flex-col"
  >
    {/* Video */}
    <VideoEmbed project={project} compact aspectPct={38} />

    {/* Content */}
    <div className="p-3 flex flex-col gap-2">
      <div>
        <h3 className="text-sm font-bold text-white mb-1 leading-snug">{project.title}</h3>
        <p className="text-neutral-400 text-[11px] leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-1">
        {project.technologies.slice(0, 3).map((t, i) => <TechTag key={i} label={t} />)}
        {project.technologies.length > 3 && (
          <span className="text-neutral-500 text-[10px] px-1.5 py-0.5">+{project.technologies.length - 3}</span>
        )}
      </div>
      <Links project={project} />
    </div>
  </motion.div>
)

const Project = () => {
  const [featured, ...rest] = PROJECTS

  return (
    <div className="border-b border-white/10 pb-16 mb-8">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center my-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Featured <span className="bg-gradient-to-r from-neutral-200 to-neutral-500 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-neutral-500 text-sm">Things I've built</p>
        <div className="w-16 h-1 bg-white/20 mx-auto rounded-full mt-3" />
      </motion.div>

      {/* Featured */}
      {featured && <FeaturedCard project={featured} />}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto w-full">
        {rest.map((project, i) => (
          <RegularCard key={i} project={project} index={i} />
        ))}
      </div>
    </div>
  )
}

export default Project
