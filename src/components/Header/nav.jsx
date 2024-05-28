import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { usePathname } from 'next/navigation';
import LinkComp from '../Link/index.jsx';
import { useGSAP } from '@gsap/react';

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
  
  ]

  export default function index({isActive, setIsActive }) {

    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);

    return (
  
<div className="h-[100vh] fixed w-96 right-0 top-0 z-20 bg-gray-900 text-white ">
  <div className="border-box h-full p-24 flex flex-col justify-between">
              <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className="flex flex-col text-5xl gap-4 mt-20">
  
                      <div className="uppercase text-lg mb-10 border-b-2 border-white">
  
                          <p>Navigation</p>
  
                      </div>

                      {navItems.map((data, index) => (
   <LinkComp
      key={index}
      data={{...data, index}}
      isActive={selectedIndicator == data.href}
      setIsActive={setIsActive}
      setSelectedIndicator={setSelectedIndicator}
    />
))}
              </div>
  
              {/* <div className="flex w-full justify-between text-xl gap-4 pt-12"> */}
    
                  {/* <a>Instagram</a>
                  <a>LinkedIn</a> */}
  
              </div>
          </div>
          // </div>  
    )
  
  }