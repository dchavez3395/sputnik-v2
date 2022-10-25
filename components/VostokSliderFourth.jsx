import React, { useState } from 'react'
import {engines} from "../data"

const VostokSlideFourth = () => {
    const [value, setValue] = useState(0)
    const {img, bottom1, height, heightSpan, diameter, diameterSpan} = engines[value]
  return (
    <div>
        <div>
            <div className='relative bg-black py-20 lg:py-8' key='id'>
                <div className='z-[0]'>
                    <img src={img} className='w-full h-[50vh] lg:h-screen object-cover' alt=""  />
                </div>
                    {/* rocket info */}
                <div className="lg:absolute z-[0] px-8 md:px-32 py-12 lg:px-0 text-white text-center lg:text-left top-[10%] lg:left-[15%] 2xl:left-[25%]">
                    <h3 className='text-2xl ' data-aos='fade-right' data-aos-delay='400'>ENGINES</h3>
                    <h1 className="text-[40px] 2xl:text-5xl py-2  font-bold uppercase" data-aos='fade-right' data-aos-delay='700'>RASPUTIN</h1>
                    {/* table */}
                    <div>
                    {engines.map((item, index) => {
                    const {button} = item;
                    return (
                        <button
                            key='index'
                            onClick={() => setValue(index)}
                            className={`uppercase z-[1000] py-3 text-sm md:text-[1rem] pr-4  font-bold text-[#D1D1D1] ${
                                index === value && "underline underline-offset-4 ..."
                            }`} >
                        {item.button} 
                        </button>
                    )
                })}
                    <div className='text-left text-md xl:text-lg w-full lg:w-2/5 xl:w-1/3'>
                        {bottom1}
                        <table className=" w-full" data-aos='fade-right' data-aos-delay='600'>
                            <tbody className="pt-16 text-[15.5px] w-full font-[600] ">
                                <tr className="border-b border-gray-500  " >
                                    <td className="text-[14px] font-[600]  py-4">HEIGHT</td>
                                    <td className="text-right" >{height}<span className="text-[#868686]">{heightSpan}</span></td>
                                </tr>
                                <tr className="border-b border-gray-500" >
                                    <td className="text-[14px] font-[600]  py-4">DIAMETER</td>
                                        <td className="text-right">{diameter} <span className="text-[#868686]">{diameterSpan}</span></td>
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

export default VostokSlideFourth