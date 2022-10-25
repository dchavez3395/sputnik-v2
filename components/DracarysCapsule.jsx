import React, { useState } from 'react'
import {dracarysSliderButtons} from "../data"

const DracarysCapsule = () => {
    const [value, setValue] = useState(0)
    const {img, bottom1, first, firstData, firstSpan, second, secondData, secondSpan} = dracarysSliderButtons[value]
  return (
    <div>
        <div>
            <div className='relative bg-black' key='id'>
                <div className=' z-[0]'>
                    <img src={img} className='w-full lg:opacity-100 h-[50vh] lg:h-[100vh] object-cover' alt=""  />
                </div>
                    {/* rocket info */}
                <div className="lg:absolute z-[0] px-4 md:px-32 lg:px-0 text-white text-center lg:text-left top-[15%] lg:top-[25%] 2xl:top-[15%] lg:left-[15%] 2xl:left-[20%]">
                    <h3 className='text-2xl ' data-aos='fade-right' data-aos-delay='400'>Venera Heavy</h3>
                    <h1 className="text-[40px] 2xl:text-6xl py-2  font-bold uppercase" data-aos='fade-right' data-aos-delay='700'>FIRST STAGE</h1>
                    {/* table */}
                    <div>
                    {dracarysSliderButtons.map((item, index) => {
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
                    </div>
                    <div className='lg:w-[27rem] text-left w-full flex text-md flex-col gap-4'>
                        <div data-aos='fade-right' data-aos-delay='400' >
                            {bottom1}
                        </div>
                        <table className="my-4 lg:w-[28rem]">
                            <tbody className="pt-16 text-[15.5px] w-full font-[600] ">
                                <tr className="border-b border-gray-500 " data-aos='fade-right' data-aos-delay='400'>
                                    <td className="text-[14px] font-[600]  py-[20px]">{first}</td>
                                    <td className="text-right">{firstData} <span className="text-[#868686]"> {firstSpan}</span></td>
                                </tr>

                                <tr className={`${
                                second?.length > 0
                                ? 'border-b border-gray-500'
                                : 'border-none border-transparent'
                            } pb-4 mb-12`} data-aos='fade-right' data-aos-delay='700'>
                                    <td className="text-[14px] font-[600]  py-[20px]" data-aos='fade-right' data-aos-delay='400'>{second}</td>
                                    <td className="text-right" >{secondData} <span className="text-[#868686]"> {secondSpan}</span></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DracarysCapsule