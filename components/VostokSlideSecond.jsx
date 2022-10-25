import React, { useState } from 'react'
import {vostokSliderButtons} from "../data"
import VostokTable from './VostokTable'

const VostokSlideSecond = () => {
    const [value, setValue] = useState(0)
    const {img, bottom1, bottom2} = vostokSliderButtons[value]
  return (
    <div>
        <div>
            <div className='relative bg-black py-12' key='id'>
                <div className=' my-8 z-[0]'>
                    <img src={img} className='w-full h-[50vh] lg:h-screen object-center object-cover' alt=""  />
                </div>
                    {/* rocket info */}
                <div className="lg:absolute z-[0] px-8 md:px-32 lg:px-0 text-white text-center lg:text-left top-[15%] lg:top-[25%] 2xl:top-[20%] lg:left-[15%] 2xl:left-[25%]">
                    <h3 className='text-xl ' data-aos='fade-right' data-aos-delay='400'>Vostok X</h3>
                    <h1 className="text-[40px] 2xl:text-5xl py-2  font-bold uppercase" data-aos='fade-right' data-aos-delay='700'>FIRST STAGE</h1>
                    {/* table */}
                    <div>
                    {vostokSliderButtons.map((item, index) => {
                    const {button} = item;
                    return (
                        <button
                            key='index'
                            onClick={() => setValue(index)}
                            className={`uppercase z-[1000] py-4 text-sm md:text-[1rem] pr-4  font-bold text-[#D1D1D1] ${
                                index === value && "underline underline-offset-4 ..."
                            }`} >
                        {item.button} 
                        </button>
                    )
                })}
                    </div>
                    <div className='lg:w-1/3 text-left w-full  flex flex-col gap-4'>
                        <div data-aos='fade-right' >
                            {bottom1}
                        </div>
                        <div className='w-ful1l'>
                        {bottom2}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VostokSlideSecond