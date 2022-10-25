import React, { useState } from 'react'
import data from "../data/data.json"
import solarVid from "../data/assets/destination/starship-fly.mp4"

const DestinationPicker = () => {
    const [planets] = useState(data.destinations)
  const [value, setValue] = useState(0)

  const { name, images, description, distance, travel } = planets[value]

  return (
    <div className=''>
       <div className='h-screen'>
        {/*video background */}
          <video className=" absolute opacity-60 z-[0] w-full h-full object-cover " autoPlay loop muted>
                    <source className="w-full" src={solarVid} />
          </video>
          {/*destinations section*/}
          <div className="hone destinations lg:pb-0">
            {/*articles container */}
          <div className="px-8 md:px-24 p-auto py-8 md:pb-12 lg:pb-0  h-screen grid grid-cols-1 items-center lg:gap-5 lg:grid-cols-2 xl:max-w-7xl xl:m-auto">
          <article className="text-center md:text-left w-full">
            {/*title and image */}
            <img
              src={images.png}
              alt={name}
              title={name}
              className="block w-full h-full mx-auto"
              data-aos='fade-right'
              data-aos-delay='300'
            />
          </article>

          <article className="w-full lg:pt-20 relative lg:ml-16 z-[100000] pt-14 sm:pt-0 top-[-4rem]  text-center md:text-left">
           {/*planets  title buttons */}
            <ul className="flex items-center justify-center lg:pr-8 md:justify-start mb-4">
              {planets.map((item, index) => (
                <li key={index} className="mr-3 sm:m-5"
                data-aos='fade-left'
                    data-aos-delay='100'
                >
                  <button
                    onClick={() => setValue(index)}
                    className={`uppercase font-semibold tracking-wider leading-8 text-gray-200 border-b border-transparent ${
                      index === value && "border-b border-white"
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
            {/*title info distance */}
            <div className=" text-left" 
            data-aos='fade-left'
            data-aos-delay='300'>
            <h2 className="text-white font-bold text-4xl lg:text-6xl uppercase tracking-widest mb-5">
              {name}
            </h2>

            <p className="text-white text-sm border-b border-gray-400 pb-5">
              {description}
            </p>

            <ul className="flex flex-wrap items-center justify-between gap-4 pt-5" data-aos='fade-left'
              data-aos-delay='500'>
              <li className="uppercase text-gray-200 lg:text-xl">
                Avg. Distance<span className="lg:text-4xl block">{distance}</span>
              </li>
              <li className="uppercase text-gray-200 lg:text-xl">
                Est. travel time<span className="lg:text-4xl block">{travel}</span>
              </li>
            </ul>
            </div>
          </article>
        </div>
          </div>
       </div>
    </div>
  )
}

export default DestinationPicker