import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";
import LinkComp from "../Link/index.jsx";
import { useGSAP } from "@gsap/react";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function index({ isActive, setIsActive }) {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    // <>
    // {isActive && (
    //   <div style={{
    //     position: 'fixed',
    //     top: 0,
    //     left: 0,
    //     width: '100vw',
    //     height: '100vh',
    //     backgroundColor: 'rgba(255, 0, 0, 0.7)',
    //     zIndex: 19,
    //   }} />
    // )}
    <div className="h-[100vh] fixed w-screen md:w-96 right-0 top-0 z-20 bg-c-black border-l text-white ">
      <div className="border-box h-full p-24 flex flex-col justify-between">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="flex flex-col text-5xl gap-4 mt-20"
        >
          <div className="uppercase text-lg mb-10 md:border-b-2 md:border-c-gray">
            <p>Navigation</p>
          </div>

          {navItems.map((data, index) => (
            <LinkComp
              key={index}
              data={{ ...data, index }}
              isActive={selectedIndicator == data.href}
              setIsActive={setIsActive}
              setSelectedIndicator={setSelectedIndicator}
            />
          ))}
        </div>
      </div>
    </div>
    // </>
  );
}
