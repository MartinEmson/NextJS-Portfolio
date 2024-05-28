import React from 'react'
import { projects } from './index.jsx';

const Projects = () => {
  return (
    <div className='w-full h-auto px-24 py-24'>
    <span className='text-white text-3xl font-medium'>Recent Work</span>
    <div className='projects text-white py-12'>
      {projects.map((project, index) => (
        <div key={index} className='project w-full'>
          {/* <div className='project-image'>
            <img src={project.image} />
          </div> */}
          <div className='project-info border-t-2 w-5/6 mx-auto'>
          <a href='#' className='w-full flex flex-row justify-between items-center p-6'>
          <h2 className='text-3xl font-medium'>{project.name}</h2>
            <p className='whitespace-nowrap'>{project.description}</p>
            </a>
          </div>
        </div>
      ))} 

    </div>
    </div>
  )
}

export default Projects