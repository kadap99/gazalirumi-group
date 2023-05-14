"use client"
import { useState } from 'react'
import {GoThreeBars} from 'react-icons/go'
import {RxExit} from 'react-icons/rx'
import Link from 'next/link'

function Navbar() {

    const [open, setOpen] = useState(false)

  return (
    <div className='fixed top-0 right-0 left-0 py-5 px-10 lg:px-36 '>
        
        <div className='flex justify-between items-center text-white'>
        <p className="font-bold">Gazali Rumi <br /> Group</p>
            <GoThreeBars className='text-2xl text-white md:hidden cursor-pointer' onClick={() => setOpen(true)}/>

            <div className='hidden md:block'>
                <ul className='flex gap-4'>
                <li className='cursor-pointer'><Link href={"#home"}>Home</Link></li>
                <li className='cursor-pointer'><Link href={'#gallery'}>Gallery</Link></li>
                <li className='cursor-pointer'><Link href={'/gallery'}>Tentang kami</Link></li>
                <li className='cursor-pointer'><Link href={'/gallery'}>Penghargaan</Link></li>
                <li className='cursor-pointer'><Link href={'/gallery'}>Social media</Link></li>
                </ul>
            </div>
        </div>

        {/* //NAVIGASI MOBILE */}
        <div> 
        <div  className={open ? 'sm:hidden absolute top-0  left-0 right-0 bottom-0 bg-black opacity-90 h-screen w-full z-20 ease-in duration-300' : 'sm:hidden absolute top-0  -left-full right-0 bottom-0 bg-black opacity-90 h-screen w-full z-20 ease-in duration-300'} onClick={() => setOpen(false)}>
            <RxExit className=' absolute text-4xl top-0 right-0 text-white mt-20 mr-20 cursor-pointer'/>
            <ul className='h-screen flex items-center justify-center text-white'>
                <div className='leading-10 text-center text-xl'>
                <li className='cursor-pointer'><Link href={"#home"}>Home</Link></li>
                <li className='cursor-pointer'><Link href={'#gallery'}>Gallery</Link></li>
                <li className='cursor-pointer'><Link href={'/gallery'}>Tentang kami</Link></li>
                <li className='cursor-pointer'><Link href={'/gallery'}>Penghargaan</Link></li>
                <li className='cursor-pointer'><Link href={'/gallery'}>Social media</Link></li>
                </div>
            </ul>
        </div>
       </div>
    </div>
  )
}

export default Navbar