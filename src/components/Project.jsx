import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "framer-motion"
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Project = () => {
  return (
    <div className='border border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-4xl'>Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className='mb-8 flex flex-wrap items-center justify-center gap-2'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className='w-full lg:w-1/4'>
              <motion.img
                className='rounded-2xl'
                width={150}
                height={150}
                src={project.image}
                alt={project.title}
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold'>{project.title}</h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              <div className='flex flex-wrap'>
                {project.technologies.map((technology, techIndex) => (
                  <span key={techIndex} className='mr-2 mt-2 rounded bg-black-900 px-2 py-1 text-sm font-medium text-purple-900'>
                    {technology}
                  </span>
                ))}
              </div>
              <a href={project.livelink} target="_blank" rel="noopener noreferrer" className='mt-4 inline-flex items-center text-purple-900'>
                <FaExternalLinkAlt className='mr-2' /> Live Project
              </a>
              <a href={project.githublink} target="_blank" rel="noopener noreferrer" className='mt-4 inline-flex items-center text-purple-900 ml-4'>
                <FaGithub className='mr-2' /> GitHub Repo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Project