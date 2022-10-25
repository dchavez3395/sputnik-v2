import React, { useState } from 'react'
import {engines} from "../data"

const VeneraEngines = () => {
    const [value, setValue] = useState(0)
    const {img, bottom1, height, heightSpan, thrust, thrustSpan} = engines[value]
  return (
    <div>
        <div>
            <div className='relative bg-black py-12' key='id'>
                <div className='z-[0]'>
                    <img src={img} className='w-full h-[50vh] lg:h-screen object-cover' alt=""  />
                </div>
                    {/* rocket info */}
                <div className="lg:absolute z-[0] px-4 md:px-32 w-full py-12 md:py-16 lg:py-0 lg:px-0 text-white text-center lg:text-left top-[15%] lg:left-[15%] 2xl:left-[25%]">
                    <h3 className='text-xl ' data-aos='fade-right' data-aos-delay='400'>ENGINES</h3>
                    <h1 className="text-[40px] 2xl:text-5xl py-2  font-bold uppercase" data-aos='fade-right' data-aos-delay='700'>RASPUTIN</h1>
                    {/* table */}
                    <div className='md:text-center lg:text-left'>
                    {engines.map((item, index) => {
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
                    <div className='lg:w-1/3 w-full text-left xl:w-[35%] 2xl:w-1/4'>
                        {bottom1}
                        <table className="my-4 w-full">
                            <tbody className="pt-16 text-[15.5px] font-[600] ">
                                <tr className="border-b border-gray-500  " >
                                    <td className="text-[14px] font-[600]  py-[20px]" data-aos='fade-right' data-aos-delay='400'>HEIGHT</td>
                                    <td className="text-right" data-aos='fade-right' data-aos-delay='700'>{height}<span className="text-[#868686]">{heightSpan}</span></td>
                                </tr>
                                <tr className="border-b border-gray-500" >
                                    <td className="text-[14px] font-[600]  py-[20px]" data-aos='fade-right' data-aos-delay='400'>THRUST</td>
                                        <td className="text-right" data-aos='fade-right' data-aos-delay='700'>{thrust} <span className="text-[#868686]">{thrustSpan}</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VeneraEngines