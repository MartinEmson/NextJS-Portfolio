import { Inter } from "next/font/google";
import Picture from '../../public/images/2.jpg'
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { TransitionContext } from '@/context/TransitionContext';
import gsap from "gsap";
import { useContext, useRef } from 'react';
import Projects from "./projects/projects.jsx";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger) 

export default function Home() {
  const { timeline } = useContext(TransitionContext);
  const container = useRef(null);
  // const project = useRef(null);
  const image = useRef();

  useGSAP( () => {
    const targets = gsap.utils.toArray(["div", image.current])
    gsap.fromTo(targets, {y: 30, opacity: 0}, {y: 0, opacity: 1, duration: 2})
    timeline.add(gsap.to(container.current, { opacity: 0 }))
  }, {scope: container})



  return (
      <section ref={container} className='flex flex-col'>
      <div className="h-[100vh] w-full">
        <div className="flex flex-col justify-center h-screen px-40">
         <p className="text-2xl">Hi, im Martin!</p>
         <div className="w-[20vw]">
         <p>Im a recently graduated frontend developer with a special intreset in creative development!</p>
        </div>
        </div>
      </div>

       

        <div className="h-[120vh] w-full flex bg-c-black  z-0">
        <Projects />


        {/* <div className="w-full h-[80vh] bg-c-black"></div> */}
        
          {/* <div ref={image} className='relative w-[50%] h-[40vh]'>
          <Image 
            src={Picture}
            placeholder='blur'
            fill
            style={{objectFit: "cover"}}
          />
        </div> */}
      </div>
    </section>
  );
}
