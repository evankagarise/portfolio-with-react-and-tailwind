import React from 'react'
import { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]'>
        <div>
            <h1 className='text-4xl text-white'>Evan Kagarise</h1>
        </div>

        <div className='hidden md:flex'>
             <ul className='flex text-white'>
             <li>Home</li>
             <li>About</li>
             <li>Skills</li>
              <li>Work</li>
              <li>Contact</li>
            </ul>
        </div>
       
       <div onClick={handleClick} className='md:hidden z-10 text-white'>
        {!nav ? <FaBars /> : <FaTimes />}
       </div>

       <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
             <li className='py-6 text-white text-4xl'>Home</li>
             <li className='py-6 text-white text-4xl'>About</li>
             <li className='py-6 text-white text-4xl'>Skills</li>
              <li className='py-6 text-white text-4xl'>Work</li>
              <li className='py-6 text-white text-4xl'>Contact</li>
       </ul>



        <div className='hidden'></div>


    </div>
  )
}

export default Navbar