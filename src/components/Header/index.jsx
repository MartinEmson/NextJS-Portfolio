import React, { useRef } from 'react'
import Link from 'next/link';
import { useState, useLayoutEffect, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Nav from './nav.jsx'
import { useRouter } from 'next/router';


export default function Index({divRef}) {

  const [isActive, setIsActive] = useState(false);
  const burger = useRef(null);
  
  // const router = useRouter();
// const isProjectsPage = router.pathname.includes('/projects');


// Scrolltrigger Navmenu

useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(burger.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => { gsap.to(burger.current, {scale: 1, duration: 0.25, })},
        onEnterBack: () => { gsap.to(burger.current, {scale: 0, duration: 0.25, })},
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
  
}, []);

useGSAP (() => {
  if (isActive) {
    gsap.to(burger.current, {scale: 1, duration: 0.25, ease: "power1.out"});
    gsap.to(divRef.current, {scale: 1, duration: 0.25, ease: "power1.out"});
    
    gsap.fromTo(divRef.current, {x: 500}, {x: 0, ease: "power1.inOut" , duration: 1 });
    gsap.fromTo(divRef.current.querySelectorAll('a'), {x: 100}, {x: 0, ease:"power1.inOut"});
  } else {
    // gsap.to(burger.current, {scale: 0,  duration: 1, ease: "power1.out"});
  }
}, [isActive]);


const handleClick = () => {
  if (isActive) {
    let tl = gsap.timeline();
    tl.to(burger.current, {scale: 1, duration: 0.5, ease: "power1.out"}, 0)
      .to(divRef.current, {x: 500, onComplete: () => setIsActive(false)}, 0);
  } else {
    setIsActive(true);
  }
};  


  return (
<nav className='absolute top-0 left-0 flex w-full justify-between px-6 md:px-12 py-8 z-20 text-base text-white'>
<div className='flex-col'>
    <h1 id="navTitle" className='text-lg'><Link scroll={false} href="/">Martin Lindevall</Link></h1> 
    {/* <h2 className='text-2xl ml-3'>Frontend Developer & Designer</h2> */}
    </div>

    <div ref={burger} className={`headerButtonContainer fixed right-0 top-0 ${isActive ? 'burgerActive' : ''}`}>
  <div onClick={handleClick} className={`button burger ${isActive ? 'burgerActive' : ''}`}>
  </div>
</div>

<div ref={divRef} style={{position: 'fixed', top: '0', right: '0', zIndex: 10,}}> 
  {isActive && <Nav isActive={isActive} setIsActive={setIsActive}/>}
</div>
        
    
        <ul className='cursor-pointer flex-row space-x-8 md:text-lg md:flex hidden'>
  <li><Link href="/projects" className="image">Projects</Link></li>
  <li><Link href="/about" className="image">About</Link></li>
  <li><Link href="/contact" className="image">Contact</Link></li>
</ul>

<div className='md:hidden text-lg'>
  <button onClick={() => setIsActive(true)}>Menu</button>
</div>
    </nav>
    
  )
}
