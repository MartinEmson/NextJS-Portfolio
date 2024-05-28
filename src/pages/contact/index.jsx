import React, { useRef, useContext } from 'react'
import Picture from '../../../public/images/3.jpg'
import Image from 'next/image';
import { TransitionContext } from '@/context/TransitionContext';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
export default function Index() {

  const { timeline } = useContext(TransitionContext);
  const container = useRef(null);
  const image = useRef();

  useGSAP( () => {
    const targets = gsap.utils.toArray(["div", image.current])
    gsap.fromTo(targets, {scale: 0.85, opacity: 0}, {scale: 1, opacity: 1, stagger: 0.05})
    timeline.add(gsap.to(container.current, { opacity: 0 }))
  }, {scope: container})

  return (
    <section ref={container} className='h-[200vh] flex flex-row'>
        <div className='flex flex-col w-4/6 m-auto mt-20 '>
        <div className='h-[30vh]'>
            <h1 className='text-5xl font-semibold'>Lets work together!</h1>
            </div>

            <div className='flex flex-row mt-12 border-c-black border-2'>
            <div className='left-container h-[100vh] w-4/6'>
            
      </div>
        <div className='right-container bg-blue-600 text-white h-[100vh] w-2/6 flex flex-col p-12 gap-y-10'>
        <ul className='details'>
        <li className='uppercase text-sm _'> Contact Details </li>
        <li className='text-xl'>martin@emsound.se</li>
        <li className='text-xl'>+46760191025 </li>
      </ul>
      <ul className='socials flex flex-col gap-y-2'>
        <li className='uppercase text-sm'> Socials</li>
        <li><a href="#" className='text-xl'>Linkedin</a></li>
        <li><a href="#" className='text-xl'>Instagram</a></li>
      </ul>

        </div>
      </div>
        </div>
    </section>
  )
}
