// IntroSlider.jsx
import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

const Intro = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.to("#title-1, #title-2", {
        delay: 1.2,
        duration: 1,
        opacity: 0,
        ease: "power2.inOut",
      })
      .to("#intro-slider", {
        duration: 1,
        opacity: 0,
        ease: "power2.inOut",
        onComplete: () => {
          document.querySelector("#intro-slider").style.display = 'none';
          
        }
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className='relative' ref={comp}>
      <div id="intro-slider" className="h-screen bg-black absolute top-0 left-0 z-20 w-full flex flex-col justify-center items-center">
        <h1 id="title-1" className='text-4xl font-normal text-white'>Martin Lindevall</h1>
        <h2 id="title-2" className="text-2xl text-white">&#169; 2024</h2>
      </div>
    </div>
  );
};

export default Intro;