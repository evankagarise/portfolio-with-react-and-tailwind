import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center item-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right  pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-purple-500'>About</p>
                </div>
                <div>

                </div>
            </div>
            <div className='max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4'>
                <div className='text-4xl font-bold sm:text-right'>
                    <p>Hi. I'm Evan, welcome to my site. Please take a look around. </p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos labore nemo consectetur quo aut aperiam assumenda voluptatibus debitis iure dicta autem ipsa optio quia eligendi harum, ratione adipisci. Aliquid ex, in a veritatis voluptas placeat.</p>
                </div>
               </div> 
            
        </div>
    </div>
  )
}

export default About