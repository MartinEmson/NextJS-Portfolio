import React, { useContext, useRef } from 'react'
import { useGSAP } from '@gsap/react';
import { TransitionContext } from '@/context/TransitionContext';
import gsap from "gsap";

export const projects = [
  { name: 'Emsound', year: 'Apr.2024', link: 'https://emsound.se/', description: 'Design & Development' },
  { name: 'Beckmans', year: 'May.2024', link: 'https://jespersmedingvk.netlify.app/'   },
{ name: 'TW', year: 'Mar.2023', link: 'https://project2.com/' },
{ name: 'Nestle Redesign', year: 'May.2023', link: 'https://nestle-redesign.netlify.app/' },
// { name: 'Project4', year: 'Mar.2023', link: 'https://project4.com/' },


  // Add more projects here
];

export default function Index() {

  const { timeline } = useContext(TransitionContext);
  const container = useRef(null);
  const image = useRef();

  useGSAP( () => {
    const targets = gsap.utils.toArray(["a", image.current])
    gsap.fromTo(targets, { opacity: 0, duration: 2}, { opacity: 1, duration: 2, stagger: 0.3})
    timeline.add(gsap.to(container.current, { opacity: 0 }))
  }, {scope: container})

  return (
    <section ref={container} id="projects" className='pt-24 px-10 h-screen'>      
    <div className='flex flex-col items-end gap-4 h-auto'>
          {projects.map((project) => (
            <a href={project.link} target='_blank' rel='noopener noreferrer' className='project flex flex-row-reverse items-baseline justify-end border-solid border-b-2 p-5 gap-3.5 transform transition-transform duration-200 hover:scale-105' 
    key={project.name}
    >    
            <div className='text-5xl'>{project.name}</div>
            <div>{project.year}</div>
          </a>
        ))}
            </div>
        </section>
  )
}
