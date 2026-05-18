import React, { useRef } from 'react'
import { PROJECTS } from '../constants'
import { motion, useInView } from "framer-motion"
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

const ProjectCard = ({ project, index, isDarkMode }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })

  const videoSrc = project.demoVideo
    ? `${project.demoVideo}${isInView ? '?autoplay=1&mute=1&rel=0' : ''}`
    : null

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
          <div className={`w-full rounded-2xl overflow-hidden shadow-lg border ${isDarkMode ? 'border-neutral-700' : 'border-gray-200'}`}>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                key={isInView ? 'playing' : 'idle'}
                src={videoSrc}
                title={`${project.title} demo`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: 'none' }}
              />
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
            <span key={techIndex} className='mr-2 mt-2 rounded bg-black-900 px-2 py-1 text-sm font-medium text-purple-900'>
              {technology}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <a
            href={project.livelink}
            target="_blank"
            rel="noopener noreferrer"
            className='mt-4 inline-flex items-center text-purple-900'
          >
            <FaExternalLinkAlt className='mr-2' /> Live Project
          </a>
          <a
            href={project.githublink}
            target="_blank"
            rel="noopener noreferrer"
            className='mt-4 inline-flex items-center text-purple-900 ml-4'
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
