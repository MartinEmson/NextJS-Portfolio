import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full bg-c-black text-white py-12 px-12'>
        <div className='flex flex-row justify-between'>
            {/* <div className='flex flex-col md:col-span-6 mr-6'>
                <span className='flex flex-col gap-y-2 md:gap-y-1 uppercase mb-3 border-b-2 font-bold'>Navigation</span>
                <Link href="/">Home</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </div> */}
           <div className='flex flex-col'>
           <span className='flex text-xs uppercase opacity-50'>Socials</span>
           <div className='flex flex-row space-x-4 mt-2'> 
                <Link href="#">LinkedIn</Link>
                <Link href="#">Instagram</Link>
                <Link href="#">SoundCloud</Link>
            </div>
            </div>
            <div className='flex flex-col '>
            <span className='flex text-xs uppercase opacity-50'>Version</span>
           <div className='space-x-6 mt-2'> 
                <p>&#169; 2024</p>
            </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer
