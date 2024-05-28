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
    const targets = gsap.utils.toArray(["p", image.current])
    gsap.fromTo(targets, {scale: 0.85, opacity: 0}, {scale: 1, opacity: 1, stagger: 0.25})
    timeline.add(gsap.to(container.current, { opacity: 0 }))
  }, {scope: container})

  return (
    <section ref={container} className='h-[200vh] w-full pt-24'>
      <div className="h-[100vh] w-5/6 flex flex-col gap-5 m-auto">
        <p className="text-3xl text-left">About Me</p>
        <div className='flex flex-col justify-center items-center'>
        <p className="max-w-[50%] text-center">Sed ut rhoncus nibh. Cras eleifend tellus a enim sodales, a efficitur odio euismod. Aenean non consequat lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce quis eleifend ipsum, sit amet posuere ligula.</p>
       
        </div>
      </div>
    </section>
  )
}
