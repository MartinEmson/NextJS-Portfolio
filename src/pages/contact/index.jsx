import React, { useRef, useContext } from "react";
import Picture from "../../../public/images/3.jpg";
import Image from "next/image";
import { TransitionContext } from "@/context/TransitionContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";


export default function Index() {
  const { timeline } = useContext(TransitionContext);
  const container = useRef(null);
  const bgImage = useRef();

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

  return (
    <section ref={container} className="h-full w-full flex flex-row relative overflow-hidden">
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
        <div className="h-[30vh] flex justify-center items-center">
          <h1 className="text-3xl">Lets work together!</h1>
        </div>

        <div className="flex flex-row mt-12 border-c-black border-2">
          <div className="right-container bg-white text-c-black w-full flex flex-col p-12 gap-y-10">
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
