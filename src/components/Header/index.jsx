import React, { useRef } from 'react'
import Link from 'next/link';
import { useState, useLayoutEffect, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Nav from './nav.jsx'

export default function Index({divRef}) {

  const [isActive, setIsActive] = useState(false);
  const navRef = useRef();
  const burger = useRef(null);


// Scrolltrigger Navmenu

useLayoutEffect ( () => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.to(burger.current, {
    scrollTrigger: {
      trigger: document.documentElement,
      start: 0,
      end: window.innerHeight,
      onLeave: () => { gsap.to(burger.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
      onEnterBack: () => { gsap.to(burger.current, {scale: 0, duration: 0.25, ease: "power1.out"})},
    }
  });
  gsap.to(divRef.current, {
    scrollTrigger: {
      trigger: document.documentElement,
      start: 0,
      end: window.innerHeight,
      onLeave: () => { gsap.to(divRef.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
      onEnterBack: () => { gsap.to(divRef.current, {scale: 0, duration: 0.25, ease: "power1.out"})},
    }
  });
}, [])

useGSAP (() => {
  if (isActive) {
    gsap.fromTo(divRef.current, {x: 384}, {x: 0, ease: "power1.inOut" , duration: 1 });
    gsap.fromTo(divRef.current.querySelectorAll('a'), {x: 100}, {x: 0, ease:"power1.inOut"});
  } else {
    gsap.to(divRef.current, { duration: 1.5 });
  }
}, [isActive]);


  return (
    <nav className='absolute top-0 left-0 flex w-full justify-between px-12 py-6 z-20'>
<div className='flex-col'>
    <h1 id="navTitle" className='text-4xl '><Link scroll={false} href="/">lindev</Link></h1> 
    {/* <h2 className='text-2xl ml-3'>Frontend Developer & Designer</h2> */}
    </div>

    <div ref={burger} className='headerButtonContainer fixed right-0 top-0'>
    <div onClick={() => {setIsActive(!isActive)}} className={`button burger ${isActive ? 'burgerActive' : ''}`}>
    </div>
</div>
<div ref={divRef}  style={{position: 'fixed', top: '0', right: '0', zIndex: 10,}}> 
    {isActive && <Nav isActive={isActive} setIsActive={setIsActive}/>}
</div>
        
        <ul className='cursor-pointer flex flex-row justify-center items-center space-x-8'>
        <li><Link scroll={false} href="/projects" className="link">Projects</Link></li>
<li><Link scroll={false} href="/about" className="link">About</Link></li>
<li><Link scroll={false} href="/contact" className="link">Contact</Link></li>
        </ul>
    </nav>
    
  )
}
