import React, { useRef, useState } from 'react'
import { PROJECTS } from '../constants'
import { motion, useInView } from "framer-motion"
import { FaExternalLinkAlt, FaGithub, FaPlay, FaStar } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

const getYouTubeThumbnail = (embedUrl) => {
  const match = embedUrl.match(/embed\/([^?]+)/)
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : null
}

const ProjectCard = ({ project, index, isDarkMode }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })
  const [isPlaying, setIsPlaying] = useState(false)

  const videoSrc = project.demoVideo
    ? `${project.demoVideo}?autoplay=1&mute=1&rel=0`
    : null

  const thumbnail = project.demoVideo ? getYouTubeThumbnail(project.demoVideo) : null

  return (
    <motion.div
      ref={ref}
      className='mb-16 flex flex-wrap items-start justify-center gap-6'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      {/* Left: video or image */}
      <div className='w-full lg:w-2/5 flex justify-center lg:justify-start'>
        {project.demoVideo ? (
          <div className="w-full relative">
            {project.featured && (
              <div className="absolute -top-3 -left-3 z-10 w-8 h-8 flex items-center justify-center bg-neutral-900 border border-yellow-400/60 rounded shadow-lg rotate-[-10deg]">
                <FaStar className="text-yellow-400 text-sm" />
              </div>
            )}
          <div className={`w-full rounded-2xl overflow-hidden shadow-lg border ${project.featured ? (isDarkMode ? 'border-yellow-500/60 ring-2 ring-yellow-400/40' : 'border-yellow-400/70 ring-2 ring-yellow-400/50') : (isDarkMode ? 'border-neutral-700' : 'border-gray-200')}`}>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
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
                <div className="absolute inset-0 w-full h-full">
                  {thumbnail && (
                    <img
                      src={thumbnail}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold rounded-full shadow-lg transition-colors backdrop-blur-sm"
                    >
                      <FaPlay className="text-sm" /> Start
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          </div>
        ) : (
          <motion.img
            className='rounded-2xl shadow-md'
            width={150}
            height={150}
            src={project.image}
            alt={project.title}
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </div>

      {/* Right: content */}
      <div className='w-full max-w-xl lg:w-1/2'>
        <h6 className={`mb-3 text-xl font-semibold ${isDarkMode ? 'text-neutral-100' : 'text-gray-900'}`}>
          {project.title}
        </h6>
        <p className={`mb-4 leading-relaxed ${isDarkMode ? 'text-neutral-300' : 'text-gray-700'}`}>
          {project.description}
        </p>
        <div className='flex flex-wrap'>
          {project.technologies.map((technology, techIndex) => (
            <span key={techIndex} className='mr-2 mt-2 rounded border border-white/15 bg-white/5 px-2 py-1 text-sm font-medium text-neutral-200'>
              {technology}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <a
            href={project.livelink}
            target="_blank"
            rel="noopener noreferrer"
            className='mt-4 inline-flex items-center text-neutral-300 hover:text-white transition-colors'
          >
            <FaExternalLinkAlt className='mr-2' /> Live Project
          </a>
          <a
            href={project.githublink}
            target="_blank"
            rel="noopener noreferrer"
            className='mt-4 inline-flex items-center text-neutral-300 hover:text-white transition-colors ml-4'
          >
            <FaGithub className='mr-1' /> GitHub Repo
          </a>
        </div>
      </div>
    </motion.div>
  )
}

const Project = () => {
  const { isDarkMode } = useTheme()

  return (
    <div className={`border-b ${isDarkMode ? 'border-neutral-700' : 'border-gray-300'} pb-8 mb-8`}>
      <h2 className={`my-20 text-center text-4xl font-bold ${isDarkMode ? 'text-neutral-100' : 'text-gray-900'}`}>
        Projects
      </h2>
      <div className="leading-relaxed">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
    </div>
  )
}

export default Project
