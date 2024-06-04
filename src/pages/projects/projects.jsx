import React from "react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { projects } from "./index.jsx";
import Link from "next/link.js";
import classNames from "classnames";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Projects = ({ textColor }) => {
  const textClass = classNames({
    "text-white": textColor === "white",
    "text-black": textColor === "black",
  });

  const projectRefs = useRef([]);
  projectRefs.current = [];

  const addToRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  useEffect(() => {
    projectRefs.current.forEach((project, index) => {
      gsap.fromTo(
        project,
        { y: "100%", autoAlpha: 0 },
        {
          y: "0%",
          autoAlpha: 1,
          scrollTrigger: {
            trigger: project,
            start: "top bottom",
            end: "top center",
            scrub: true,
            once: true, 
          },
        }
      );
    });
  }, []);

  return (
    <section className={`w-full h-auto pt-6 md:px-24 md:py-24 ${textClass}`}>
      <span className="font-medium md:px-24 px-12">Recent Work</span>
      <div className="projects py-12">
        <ul className="w-full grid grid-cols-1 md:flex md:flex-col">
          {projects.map((project, index) => (
            <li
              key={index}
              ref={addToRefs}
              className="flex items-center justify-center md:border-t-2"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="image project gap-3.5 md:w-5/6 py-12"
              >
                <div className="flex justify-center items-center h-[380px] w-[380px] md:h-[550px] md:w-[550px] px-8 bg-zinc-400 md:hidden">
                  <img
                    src={project.picture}
                    alt={project.name}
                    className="image object-contain h-full w-full"
                  />
                </div>
                <div className="md:flex md:flex-row md:justify-between">
                  <div className="md:w-5/6">
                    <h4 className="text-3xl py-4 md:text-5xl md:font-normal">
                      <span>{project.name}</span>
                    </h4>
                    <div className="border md:hidden"></div>
                  </div>
                  <div className="flex justify-between pt-4 md:w-1/6 items-center">
                    <p> {project.description} </p>
                    <p className="md:hidden"> {project.year}</p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex justify-center items-center mt-6">
          <Link href="/projects" className="link border px-8 py-6 rounded-full">
            All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
