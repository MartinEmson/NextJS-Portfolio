import React from 'react'
import Image from 'next/image'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);


export const Info = () => {

const info = useRef(null);

useEffect(() => {
  let typeSplit = new SplitType(info.current, {
    types: 'lines, words, chars',
    tagName: 'span'
  });

  gsap.fromTo(typeSplit.words, 
    { y: '100%', opacity: 0 }, // starting state
    { // ending state
      y: '0%',
      opacity: 1,
      duration: 0.5,
      ease: 'power1.out',
      stagger: 0.03,
      scrollTrigger: {
        trigger: info.current,
        start: 'top 50%',
        end: 'top top',
        scrub: 2,
      },
    }
  );
}, []);
  

  return (
    <div className='h-[70vh] md:h-[100vh] w-full flex md:flex-row flex-col mt-24'>
    <div className='md:w-6/12 h-full flex'>
    <div className='md:pl-48 flex flex-col items-center p-6 my-auto'>
      <div className='w-full relative h-[30vh] flex md:hidden m-4'>
      <Image 
      src="/images/hs.png"
      alt="Picture of Martin Lindevall"
      layout="fill"
      objectFit="cover"
      className='image rounded-lg md:rounded-full'
      />
      </div>
      <div ref={info} className='container overflow-hidden md:py-40'>
    <div className='flex justify-between w-full'>
    <div className='w-auto flex flex-col pr-4'>
      <h2 className='text-4xl md:text-5xl font-semibold'>Based in Stockholm,</h2>
      <h2 className='text-4xl md:text-5xl font-semibold'>Available worldwide.</h2>
      </div>
      </div>
      
      <div className='text-2xl mt-4'>
      <p>As a newly graduated Frontend Developer,</p>
      <p>I am eager to help your company and develop my skills wherever that may be</p>
      </div>
      </div>
      </div>
    </div>
    
    <div className='w-6/12 h-full flex justify-center items-center relative'>
    <div className='md:h-[70vh] md:w-[70vh] relative'> 
    <Image 
      src="/images/hs.png"
      alt="Picture of Martin Lindevall"
      layout="fill"
      objectFit="cover"
      className='image rounded-full absolute pr-20 filter'
      style
      />
    </div>
 </div>
 </div>
)
}
