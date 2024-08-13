import React, { useRef, useContext, useEffect } from "react";
import Picture from "../../../public/images/3.jpg";
import Image from "next/image";
import { TransitionContext } from "@/context/TransitionContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);


export default function Index() {
  const { timeline } = useContext(TransitionContext);
  const container = useRef(null);
  const bgImage = useRef(null);
  const title = useRef(null);

  useGSAP(
    () => {
      {
        const targets = gsap.utils.toArray([container.current, bgImage.current]);
        gsap.fromTo(
          targets,
          { opacity: 0, duration: 1 },
          { opacity: 1, duration: 2}
        );
        timeline.add(gsap.to(container.current, { opacity: 0, duration: 1 }));
      }
    },
    { scope: container }
  );

  useEffect(() => {
    let typeSplit = new SplitType(title.current, {
      types: 'lines, words, chars',
      tagName: 'span'
    });
  
    gsap.fromTo(typeSplit.chars, 
      { y: '100%', opacity: 0 }, // starting state
      { // ending state
        y: '0%',
        opacity: 1,
        duration: 0.2,
        ease: 'power1.out',
        stagger: {
          each: 0.03,
          from: 'random',
        },
      }
    );
  
    // animate out
    gsap.to(typeSplit.chars, 
      { 
        y: '100%', 
        opacity: 0, 
        duration: 0.2, 
        ease: 'power1.in', 
        stagger: {
          each: 0.03,
          from: 'random',
        },
        delay: 2, // delay before animating out, adjust as needed
      }
    );
  }, []);


  return (
    <section ref={container} className="h-screen w-full flex flex-row relative overflow-hidden">
     <div
        ref={bgImage}
        className="background-image"
        style={{
          backgroundImage: "url('/images/moon.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          filter: "invert(30%)",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          zIndex: -1,
          opacity: 1,
          transform: "rotate(90deg)",
          overflow: "hidden",
        }}
      />
      <div className="flex flex-col w-full md:w-4/6 m-auto mt-20 p-6">
        <div className="flex justify-center items-center">
          <h1 ref={title} className="text-4xl font-medium text-white">Lets work together!</h1>
        </div>

        <div className="flex flex-row mt-12 border-c-black border-2">
          <div className="bg-white text-c-black w-full flex flex-col p-12 gap-y-10">
            <ul className="details flex flex-col  ">
              <li className="uppercase text-sm _"> Contact Details </li>
              <Link href="mailto:martin@emsound.se">martin@emsound.se</Link> 
              <Link href="tel:+46760191025">+46 76 019-1025</Link> 
            </ul>
            <ul className="socials flex flex-col gap-y-2">
              <li className="uppercase text-sm"> Socials</li>
              <li>
              <Link href="https://www.linkedin.com/in/martin-lindevall-65750a238/">LinkedIn</Link>
              </li>
              <li>
              <Link href="https://www.instagram.com/martinlindevall/">Instagram</Link>
              </li>
              <li>
              <Link href="https://soundcloud.com/e_mson">SoundCloud</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
