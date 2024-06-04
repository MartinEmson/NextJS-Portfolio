import Image from "next/image";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import Next from "../../public/images/next.png";
import Tailwind from "../../public/images/tw.png";
import reactImg from "../../public/images/react.png";
import gsapImg from "../../public/images/gsap2.png";
import React from "react";
gsap.registerPlugin(ScrollTrigger);


const images = [
  Next,
  Tailwind,
  reactImg,
  gsapImg,

  Next,
  Tailwind,
  reactImg,
  gsapImg,
];

const loopedImages = [...images, ...images.slice(0, images.length / 2)];


export default function Skills() {
  const slider = useRef(null);
  const imageRefs = images.map(() => React.createRef());

  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: slider.current,
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: () => `${xPercent * direction}px`,
    });

    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(slider.current, { xPercent: xPercent });

    requestAnimationFrame(animate);

    xPercent += 0.1 * direction;
  };  

  return (
    <div className="h-[40vh] relative flex border overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div ref={slider} className="relative flex whitespace-nowrap">
        {loopedImages.map((src, index) => (
            // Use the corresponding ref for each image
            <Image
              key={index}
              ref={imageRefs[index]}
              className="mx-12"
              src={src}
              alt={`Image ${index}`}
              style={{ width: "220px", height: "175px" }} // Add this line
            />
          ))}
        </div>
      </div>
    </div>
  );
}
