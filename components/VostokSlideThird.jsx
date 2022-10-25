import React, { useState } from 'react'
import {payload} from "../data"

const VostokSlideThird = () => {
    const [value, setValue] = useState(0)
    const {img, bottom1, height, heightSpan, diameter, diameterSpan} = payload[value]
  return (
    <div>
        <div>
            <div className='relative bg-black' key='id'>
                <div className=' my-8 z-[0]'>
                    <img src={img} className='w-full h-[50vh] lg:h-[100vh] object-cover' alt=""  />
                </div>
                    {/* rocket info */}
                <div className="lg:absolute z-[0] px-8 md:px-32 lg:px-0 text-white text-center lg:text-left top-[10%] lg:top-[15%] 2xl:top-[10%] lg:left-[15%] 2xl:left-[25%]">
                    <h3 className='text-2xl ' data-aos='fade-right' data-aos-delay='400'>Vostok X</h3>
                    <h1 className="text-[40px] 2xl:text-6xl py-2  font-bold uppercase" data-aos='fade-right' data-aos-delay='700'>PAYLOAD</h1>
                    {/* table */}
                    <div>
                    {payload.map((item, index) => {
                    const {button} = item;
                    return (
                        <button
                            key='index'
                            onClick={() => setValue(index)}
                            className={`uppercase z-[1000] py-8 text-sm md:text-[1rem] pr-4  font-bold text-[#D1D1D1] ${
                                index === value && "underline underline-offset-4 ..."
                            }`} >
                        {item.button} 
                        </button>
                    )
                })}
                    <div className='text-left text-md xl:text-lg lg:w-1/3'>
                        {bottom1}
                    </div>
                    </div>
                        <table className="my-4 text-left w-full lg:w-1/3" data-aos='fade-right' data-aos-delay='400'>
                            <tbody className="text-md w-full font-[600]">
                                <tr className="border-b border-gray-500">
                                    <td className="text-[14px] font-[600] py-[20px]">HEIGHT</td>
                                    <td className="text-right">{height}<span className="text-[#868686]">{heightSpan}</span></td>
                                </tr>
                                <tr className="border-b border-gray-500">
                                    <td className="text-[14px] font-[600]  py-[20px]">DIAMETER</td>
                                        <td className="text-right">{diameter} <span className="text-[#868686]">{diameterSpan}</span></td>
                                </tr>
                            </tbody>
                        </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VostokSlideThird