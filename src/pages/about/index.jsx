import React, { useRef, useContext, useEffect } from "react";
import Picture from "../../../public/images/3.jpg";
import Image from "next/image";
import { TransitionContext } from "@/context/TransitionContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const { timeline } = useContext(TransitionContext);
  const container = useRef(null);
  const sec = useRef();
  const bgImage = useRef(null);
  const about = useRef(null);
  const aboutTwo = useRef(null);
  const aboutThree = useRef(null);


  useGSAP(
    () => {
      {
        const targets = gsap.utils.toArray([
          container.current,
          bgImage.current,
        ]);
        gsap.fromTo(
          targets,
          { opacity: 0, duration: 1 },
          { opacity: 1, duration: 2 }
        );
        timeline.add(gsap.to(container.current, { opacity: 0, duration: 1 }));
      }
    },
    { scope: container }
  );

  useEffect(() => {
    const elements = [about.current, aboutTwo.current, aboutThree.current];
  
    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { autoAlpha: 0, y: 50 }, // from
        { // to
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top 75%',
            end: 'bottom 25%',
            scrub: true,
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    // When the component mounts, set overflow to hidden on the body
    document.body.style.overflowX = 'hidden';

    return () => {
      // When the component unmounts, reset the overflow property
      document.body.style.overflowX = '';
    };
  }, []);

  return (
    <section
      ref={container}
      className="w-full pt-24 text-white relative overflow-hidden"
    >
      <div
        ref={bgImage}
        className="background-image-about"
        style={{
          backgroundImage: "url('/images/0911.png')",
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
      <div className="h-[70vh]">
        <div className="h-full w-4/6 mx-auto">
          <h1 className="text-5xl mt-16">Who am I?</h1>
        </div>
      </div>
      <div ref={sec} className="h-[100vh] w-full p-6 md:p-16">
      <div className="mx-auto">
        <div className="flex pb-12">
          <h2 className="text-4xl md:text-5xl md:pl-6">
            I can help you with
          </h2>
        </div>

        <div ref={about} className="flex flex-col md:flex-row justify-between w-full">
          <div className="w-full md:w-1/3 justify-center md:pl-6">
            <div className="border-t-2 pt-6"></div>
            <h4 className="md:text-[2.5vw] text-3xl">Design</h4>
            <p className="py-6">
              Transform your ideas into stunning visual experiences. Whether you
              need a complete brand overhaul or a fresh new look for your
              website.
            </p>
          </div>

          <div className="w-full md:w-1/3 justify-center md:pl-12">
            <div className="border-t-2 pt-6"></div>
            <h4 className="md:text-[2.5vw] text-3xl ">Development</h4>
            <p className="py-6">
              Bring your vision to life with robust and scalable development
              solutions. I offer a range of services to build functional and
              high-performing digital products.
            </p>  
          </div>

          <div className="w-full md:w-1/3 justify-center md:pl-12">
            <div className="border-t-2 pt-6"></div>
            <h4 className="md:text-[2.5vw] text-3xl">Consultation</h4>
            <p className="py-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tempor dictum odio vitae blandit. Duis dolor justo, egestas vel
              dolor tincidunt.
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
