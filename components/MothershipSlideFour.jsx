import React, { useState } from 'react'
import {mothershipPayload} from "../data"

const MothershipSlideFour = () => {
    const [value, setValue] = useState(0)
    const {img} = mothershipPayload[value]
  return (
    <div>
        <div>
            <div className='relative bg-black' key='id'>
                <div className=' z-[0]'>
                    <img src={img} className='w-full h-[50vh] lg:h-[100vh] object-cover' alt=""  />
                </div>
                    {/* rocket info */}
                <div className="lg:absolute z-[0] px-8 py-12 md:px-32 lg:px-0 text-white text-center lg:text-left top-0 lg:left-[10%] 2xl:left-[15%]">
                    <h3 className='text-2xl ' data-aos='fade-right' data-aos-delay='400'>MOTHERSHIP</h3>
                    <h1 className="text-[40px] 2xl:text-6xl py-2  font-bold uppercase" data-aos='fade-right' data-aos-delay='700'>PAYLOAD</h1>
                    {/* table */}
                    <div className='text-center lg:text-left'>
                    {mothershipPayload.map((item, index) => {
                    const {button} = item;
                    return (
                        <button
                            key='index'
                            onClick={() => setValue(index)}
                            className={`uppercase z-[1000] py-4 text-sm md:text-[1rem] pr-4 font-bold text-[#D1D1D1] ${
                                index === value && "underline underline-offset-4 ..."
                            }`} >
                        {item.button} 
                        </button>
                    )
                })}
                    </div>
                        <table className="w-full lg:w-[28rem] text-left">
                            <tbody className=" text-[15.5px] w-full font-[600] " data-aos='fade-right' data-aos-delay='400'>
                                <tr className="border-b border-gray-500  " >
                                    <td className="text-[14px] font-[600]  py-[20px]">PAYLOAD VOLUME HEIGHT	</td>
                                    <td className="text-right" >18 m<span className="text-[#868686]">/ 59 ft</span></td>
                                </tr>
                                <tr className="border-b border-gray-500" >
                                    <td className="text-[14px] font-[600]  py-[20px]" >PAYLOAD FAIRING DIAMETER</td>
                                        <td className="text-right" >9 m <span className="text-[#868686]"> / 30 ft</span></td>
                                </tr>
                                <tr className="border-b border-gray-500" >
                                    <td className="text-[14px] font-[600]  py-[20px]" >PAYLOAD VOLUME	</td>
                                        <td className="text-right" >1,100 m3  <span className="text-[#868686]">/ 38,800 ft3</span></td>
                                </tr>
                                <tr className="border-b border-gray-500" >
                                    <td className="text-[14px] font-[600]  py-[20px]" >USEFUL MASS	</td>
                                        <td className="text-right" >100+ t <span className="text-[#868686]">/ 220+ klb</span></td>
                                </tr>
                            </tbody>
                        </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MothershipSlideFour