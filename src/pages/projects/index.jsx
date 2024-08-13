'use client'
import React, { useContext, useRef, useEffect, useState, useLayoutEffect } from "react";
import { useGSAP } from "@gsap/react";
import { TransitionContext } from "@/context/TransitionContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Projects from "./projects";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);



export const projects = [
  {
    name: "Emsound",
    year: "Apr.2024",
    link: "https://emsound.se/",
    description: "Design & Development",
    picture: "/images/emsound.png",
  },
  {
    name: "Beckmans",
    year: "May.2024",
    link: "https://jespersmedingvk.netlify.app/",
    description: "Development",
    picture: "/images/beckmans.png",
  },
  // { name: 'TW', year: 'Mar.2023', link: 'https://project2.com/' , description: 'Design & Development', picture: '/images/tew.png'},
  {
    name: "Nestle Redesign",
    year: "May.2024",
    link: "https://nestle-redesign.netlify.app/",
    description: "Design & Development",
    picture: "/images/NestleBG.png",
  },
  // { name: 'Project4', year: 'Mar.2023', link: 'https://project4.com/' },

  // Add more projects here
];

export default function Index() {

  const colors = ["bg-c-nestle", "bg-c-cloud", "bg-c-nestle", "bg-c-earth"]; // Add more colors if needed
  
  const { timeline } = useContext(TransitionContext);
  const container = useRef(null);
  const bgImage = useRef(null);
  const liRefs = projects.map(() => useRef(null));
  const projectRef = useRef(null);
  const title = useRef(null);
  const lineRef = useRef(null);
  const gridRef = useRef(null);


 //LocalStorage 

 const [activeButton, setActiveButton] = useState("");

 useLayoutEffect(() => {
   const storedActiveButton = localStorage.getItem("activeButton");
   setActiveButton(storedActiveButton || "grid");
 }, []);

  useEffect(() => {
    // Store the activeButton state in localStorage whenever it changes
    localStorage.setItem("activeButton", activeButton);
    console.log('activeButton stored in localStorage:', activeButton); // Log the activeButton state
  }, [activeButton]);

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

  

  // useGSAP(() => {
  //     gsap.to(container.current, 
  //     {
  //       backgroundColor: 'rgba(255, 255, 255, 0.6)', // End with white color
  //       scrollTrigger: {
  //         trigger: container.current, // Use the section as the trigger
  //         start: 'top top', // Start when the top of the section hits the top of the viewport
  //         end: 'bottom bottom', // End when the bottom of the section hits the bottom of the viewport
  //         scrub: true,
  //         toggleActions: 'restart none reverse none',
  //       },
  //     }
  //   );
  // }, []);

  // useEffect(() => {
  //   const targets = liRefs.map(ref => ref.current);
  //   gsap.fromTo(
  //     targets,
  //     { opacity: 0, y: 100, duration: 1, ease: "power2.inOut", }, // start 30px below their original position
  //     { opacity: 1, y: 0, duration: 1 } // end at their original position
  //   );
  // }, [liRefs]);


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
        duration: 0.25,
        ease: 'power1.out',
        stagger: 0.03,
      }
    );
  }, []);


  return (
    <section
      ref={container}
      className="flex flex-col relative py-24 md:px-20 h-[240vh] w-screen overflow-hidden"
    >
      <div
        ref={bgImage}
        className="background-image"
        style={{
          backgroundImage: "url('/images/0911.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          filter: "invert(40%)",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          zIndex: -1,
          opacity: 1,
          transform: "rotate(200deg)",
          overflow: "hidden",
        }}
      />

      <div className="h-[40vh] w-auto flex flex-row justify-between items-center p-6 text-white">
        <h1 ref={title} id="otherTitle" className="text-4xl flex font-bold justify-center">Featured Projects</h1>
        <div className="md:flex gap-x-4 z-1 hidden">
          <div 
            ref={gridRef}
            className={`link rounded-full p-6 box-border w-[75px] cursor-pointer ${
              activeButton === "grid" ? "bg-c-black" : "bg-white"
            }`}
            id="grid"
            onClick={() => setActiveButton("grid")}
          >
            <svg
              className="stroke-current"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 5.6C14 5.03995 14 4.75992 14.109 4.54601C14.2049 4.35785 14.3578 4.20487 14.546 4.10899C14.7599 4 15.0399 4 15.6 4H18.4C18.9601 4 19.2401 4 19.454 4.10899C19.6422 4.20487 19.7951 4.35785 19.891 4.54601C20 4.75992 20 5.03995 20 5.6V8.4C20 8.96005 20 9.24008 19.891 9.45399C19.7951 9.64215 19.6422 9.79513 19.454 9.89101C19.2401 10 18.9601 10 18.4 10H15.6C15.0399 10 14.7599 10 14.546 9.89101C14.3578 9.79513 14.2049 9.64215 14.109 9.45399C14 9.24008 14 8.96005 14 8.4V5.6Z"
                stroke={`${activeButton === "grid" ? "white" : "black"}`}
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 5.6C14 5.03995 14 4.75992 14.109 4.54601C14.2049 4.35785 14.3578 4.20487 14.546 4.10899C14.7599 4 15.0399 4 15.6 4H18.4C18.9601 4 19.2401 4 19.454 4.10899C19.6422 4.20487 19.7951 4.35785 19.891 4.54601C20 4.75992 20 5.03995 20 5.6V8.4C20 8.96005 20 9.24008 19.891 9.45399C19.7951 9.64215 19.6422 9.79513 19.454 9.89101C19.2401 10 18.9601 10 18.4 10H15.6C15.0399 10 14.7599 10 14.546 9.89101C14.3578 9.79513 14.2049 9.64215 14.109 9.45399C14 9.24008 14 8.96005 14 8.4V5.6Z"
                stroke={`${activeButton === "grid" ? "white" : "black"}`}
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 5.6C4 5.03995 4 4.75992 4.10899 4.54601C4.20487 4.35785 4.35785 4.20487 4.54601 4.10899C4.75992 4 5.03995 4 5.6 4H8.4C8.96005 4 9.24008 4 9.45399 4.10899C9.64215 4.20487 9.79513 4.35785 9.89101 4.54601C10 4.75992 10 5.03995 10 5.6V8.4C10 8.96005 10 9.24008 9.89101 9.45399C9.79513 9.64215 9.64215 9.79513 9.45399 9.89101C9.24008 10 8.96005 10 8.4 10H5.6C5.03995 10 4.75992 10 4.54601 9.89101C4.35785 9.79513 4.20487 9.64215 4.10899 9.45399C4 9.24008 4 8.96005 4 8.4V5.6Z"
                stroke={`${activeButton === "grid" ? "white" : "black"}`}
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 15.6C4 15.0399 4 14.7599 4.10899 14.546C4.20487 14.3578 4.35785 14.2049 4.54601 14.109C4.75992 14 5.03995 14 5.6 14H8.4C8.96005 14 9.24008 14 9.45399 14.109C9.64215 14.2049 9.79513 14.3578 9.89101 14.546C10 14.7599 10 15.0399 10 15.6V18.4C10 18.9601 10 19.2401 9.89101 19.454C9.79513 19.6422 9.64215 19.7951 9.45399 19.891C9.24008 20 8.96005 20 8.4 20H5.6C5.03995 20 4.75992 20 4.54601 19.891C4.35785 19.7951 4.20487 19.6422 4.10899 19.454C4 19.2401 4 18.9601 4 18.4V15.6Z"
                stroke={`${activeButton === "grid" ? "white" : "black"}`}
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 15.6C14 15.0399 14 14.7599 14.109 14.546C14.2049 14.3578 14.3578 14.2049 14.546 14.109C14.7599 14 15.0399 14 15.6 14H18.4C18.9601 14 19.2401 14 19.454 14.109C19.6422 14.2049 19.7951 14.3578 19.891 14.546C20 14.7599 20 15.0399 20 15.6V18.4C20 18.9601 20 19.2401 19.891 19.454C19.7951 19.6422 19.6422 19.7951 19.454 19.891C19.2401 20 18.9601 20 18.4 20H15.6C15.0399 20 14.7599 20 14.546 19.891C14.3578 19.7951 14.2049 19.6422 14.109 19.454C14 19.2401 14 18.9601 14 18.4V15.6Z"
                stroke={`${activeButton === "grid" ? "white" : "black"}`}
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            ref={lineRef}
            className={`link rounded-full p-6 box-border w-[75px] cursor-pointer ${
              activeButton === "line" ? "bg-c-black" : "bg-white"
            }`}
            id="line"
            onClick={() => setActiveButton("line")}
          >
            <svg
              className="stroke-current"
              width="100%"
              height="100%"
              viewBox="0 0 512 512"
              version="1.1"
            >
              <g id="_x37_24-_equal__x2C__equal_sign___x2C__sign__x2C_">
                <g>
                  <line
                    style={{
                      fill: "none",
                      stroke: `${activeButton === "line" ? "white" : "black"}`,
                      strokeWidth: "13.4167",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeMiterlimit: "2.6131",
                    }}
                    x1="26.7"
                    x2="486.25"
                    y1="30.24"
                    y2="30.24"
                  />
                  <line
                    style={{
                      fill: "none",
                      stroke: `${activeButton === "line" ? "white" : "black"}`,
                      strokeWidth: "13.4167",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeMiterlimit: "2.6131",
                    }}
                    x1="26.7"
                    x2="486.25"
                    y1="181.044"
                    y2="181.044"
                  />
                  <line
                    style={{
                      fill: "none",
                      stroke: `${activeButton === "line" ? "white" : "black"}`,
                      strokeWidth: "13.4167",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeMiterlimit: "2.6131",
                    }}
                    x1="26.7"
                    x2="486.25"
                    y1="331.848"
                    y2="331.848"
                  />
                  <line
                    style={{
                      fill: "none",
                      stroke: `${activeButton === "line" ? "white" : "black"}`,
                      strokeWidth: "13.4167",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeMiterlimit: "2.6131",
                    }}
                    x1="26.7"
                    x2="486.25"
                    y1="482.714"
                    y2="482.714"
                  />
                </g>
              </g>
              <g id="Layer_1" />
            </svg>
          </div>
        </div>
      </div>

      {activeButton === 'grid' ? (
        <div className="grid-layout text-white">
          <ul className="w-full grid grid-cols-1 md:grid-cols-2">
            {projects.map((project, index) => (
              <li key={index} ref={liRefs[index]} className="pb-20 flex items-center justify-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project rounded-lg"
                >
                  <div
                    className={`flex rounded-2xl justify-center items-center h-[380px] w-[380px] md:h-[400px] md:w-[600px] ${
                      colors[index % colors.length]
                    }`}
                  >
                    <img
                      src={project.picture}
                      alt={project.name}
                      className="object-cover h-full w-full image rounded-2xl"
                    />
                  </div>
                  <div className="">
                    <h4 className="text-4xl py-2">
                      <span>{project.name}</span>
                    </h4>
                    <div className="flex justify-between text-xl">
                      <p> {project.description} </p>
                      <p> {project.year}</p>
                    </div>
                    <div className="border border-c-gray mt-3 "></div>

                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="line-layout p-6 ">
        <div className="w-full text-xs flex flex-row mb-6 text-white">
        <div className="w-3/6">
          PROJECT
        </div>
        <div className="w-2/6">
          SERVICE
        </div>
        <div className="w-1/6">
          YEAR
        </div>
        </div>
          <ul>
            {projects.map((project, index) => (
              <li ref={liRefs[index]} className="text-white">
                <a href={project.link} className="project">
                <div className="border border-c-gray"></div>
                  <div className="flex flex-row justify-center items-center p-6 image">
                    <h4 className="w-3/6 text-3xl">
                      <span>{project.name}</span>
                    </h4>
                    <div className="w-2/6 text-xl">
                      <p> {project.description} </p>
                    </div>
                    <div className="w-1/6">
                    <p> {project.year}</p>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
