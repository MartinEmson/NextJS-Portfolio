import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full p-6 md:p-12 bg-c-black text-white'>

{/* <div className='mobile flex md:hidden flex-col justify-center items-center text-center'>
        <div className='border w-full rounded-2xl p-4 text-lg mb-4'>
        <Link href="mailto:martin@emsound.se">martin@emsound.se</Link> 
        </div>
        <div className='border w-full rounded-2xl p-4 text-lg'>
        <Link href="tel:+46760191025">+46 76 019-1025</Link> 
        </div>
        </div> */}

        <div className='flex flex-col md:flex-row justify-between'>
           <div className='md:flex flex-col'>
           <span className='flex text-xs uppercase opacity-50'>Socials</span>
           <div className='flex md:flex-row space-x-4 mt-2'> 
                <Link href="https://www.linkedin.com/in/martin-lindevall-65750a238/">LinkedIn</Link>
                <Link href="https://www.instagram.com/martinlindevall/">Instagram</Link>
                <Link href="https://soundcloud.com/e_mson">SoundCloud</Link>
            </div>
            </div>
            <div className='md:flex hidden flex-col '>
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
