import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { TransitionContext } from "@/context/TransitionContext";
import { useEffect, useRef, useContext } from 'react';
import Projects from "./projects/projects.jsx";
import { Info } from "./about/info.jsx";
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { timeline } = useContext(TransitionContext);
  const section = useRef(null);
  const con = useRef(null);
  const bgImage = useRef(null);
  const titleRef = useRef(null);

  useGSAP(
    () => {
      const targets = gsap.utils.toArray([section.current, bgImage.current]);
      gsap.fromTo(
        targets,
        {  opacity: 0 },
        {  opacity: 1, duration: 2 }
      );

      timeline.add(gsap.to(section.current, { opacity: 0, duration: 1 }));
    },
    { scope: section}
  );

  useEffect(() => {
    gsap.fromTo(bgImage.current, 
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: bgImage.current, // Use the background image as the trigger
          start: 'top top', // Start when the top of the image hits the top of the viewport
          end: 'bottom bottom', // End when the bottom of the image hits the bottom of the viewport
          scrub: true,
        },
      }
    );
  }, []);
  
  useEffect(() => {
    console.log(section.current); // Log the value of section.current to the console

    gsap.to(section.current, 
      {
        backgroundColor: 'rgba(28, 29, 32, 1)', // End with full opacity
        scrollTrigger: {
          trigger: section.current, // Use the section as the trigger
          start: 'top top', // Start when the top of the section hits the top of the viewport
          end: 'bottom bottom', // End when the bottom of the section hits the bottom of the viewport
          scrub: true,
          toggleActions: 'restart none reverse none',
        },
      }
    );
  }, []);


  useEffect(() => {
    let typeSplit = new SplitType(titleRef.current, {
      types: 'lines, words, chars',
      tagName: 'span'
    });
  
    gsap.from(typeSplit.chars, {
      y: '100%',
      opacity: 1,
      duration: 0.25,
      ease: 'power1.out',
      stagger: 0.05,
    });
  }, []);

  return (
    <section ref={section} className="flex flex-col relative text-white">
      <div
        ref={bgImage}
        className="background-image"
        style={{ 
          backgroundImage: "url('/images/0911.png')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          position: 'absolute',
          filter: 'invert(30%)',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          opacity: 1, // Start with full opacity
        }}
      />
      <div className="h-screen w-full relative z-10">
        <div ref={con} className="absolute bottom-0 left-0 md:p-12 p-6 z-10">
        <div className="text-anim">
        <h1 ref={titleRef} className="md:text-[8rem] text-5xl font-thin pointer-events-none">
            lindev
          </h1>
          {/* <h1 className="text-[10vw] pointer-events-none">
            Frontend Developer
          </h1> */}
          </div>
        </div>
      </div>
      <Info id="info" />
      <div className="h-auto w-full flex">
        <Projects textColor="white" />
      </div>
    </section>
  );
}