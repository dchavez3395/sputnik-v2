import React, { useState } from 'react'
import { BsCircle } from "react-icons/bs"
import data from "../data/data"
import crewVideo from "../data/assets/crew/video.webm"

const CrewIntro = () => {
    const [people] = useState(data.crew)
    const [value, setValue] = useState(0)
    const { name, images, role, bio } = data.crew[value]
  return (
    <div>
      <div className="z-[1000] h-screen home crew">
        <video className=" absolute opacity-50 z-[0] w-full  h-screen object-cover " autoPlay loop muted>
                    <source className="w-full" src={crewVideo} />
          </video>
        <div className="px-12 sm:px-8 flex py-8  items-center m-auto 2xl:pt-[5%] justify-center overflow-hidden flex-col lg:grid grid-cols-2 md:gap-5 md:items-center lg:max-w-7xl xl:max-w-[100rem] lg:mx-auto">
          <article className="z-[10000] flex flex-col gap-2 pb-8 text-left lg:text-left">
          <h1 className=" font-extralight text-gray-300 text-xl sm:text-3xl uppercase" 
          data-aos='fade-left'
          data-aos-delay='300'>02<span className="ml-5 font-bold">Meet the crew</span></h1>
            <h4 className="md:text-2xl uppercase text-gray-400"
            data-aos='fade-left'
            data-aos-delay='300'>{role}</h4>
            <h2 className="font-bold text-2xl md:text-5xl text-white uppercase tracking-widest"
            data-aos='fade-left'
            data-aos-delay='500'>
              {name}
            </h2>
            <p className=" text-gray-400 text-sm sm:text-lg lg:text-xl xl:text-2xl" 
            data-aos='fade-left'
            data-aos-delay='700'>
              {bio}
            </p>
            <div className='flex'>
              {people.map((item, index) => (
                  <button
                    key={index}
                      onClick={() => setValue(index)}
                      className={`uppercase h-5 rounded-full text-2xl text-white mx-2 pb-2 ${
                        index === value && "bg-white"
                      }`} 
                    >
                      <BsCircle className="w-5 h-5" />
                  </button>
                ))}
            </div>
         </article>
          <article className=" h-full"
          data-aos='fade-up'
          data-aos-delay='400'>
             <img
             src={images?.png}
             alt={name}
             title={name}
             className="block mx-auto pb-12 lg:h-[39rem] h-[90%]  w-[90%] sm:w-full sm:h-full  md:w-3/4  "
            />
          </article>
        </div>
        
        </div>
    </div>
  )
}

export default CrewIntro