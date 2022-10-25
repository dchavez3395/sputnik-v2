import React, { useState } from 'react'
import capsuleImg from "../data/assets/crew/spacesuit-01.jpg"
import data from "../data/data"
import { BsCircle } from "react-icons/bs"


const Missions = () => {
    const [destinations] = useState(data.missions)
    const [value, setValue] = useState(0)
    const {title, first, firstData, second, secondData,
        third, thirdData,fourth, fourthData, fifth, fifthData, 
        sixth, sixthData } = data.missions[value]
  return (
    <div className='relative'>
        <div className='opacity-80 z-[0]'>
            <img src={capsuleImg} className='w-full opacity-50 h-[100vh] object-cover' alt=""  />
        </div>
        <div className="m-auto z-[1000] w-full px-8 md:w-2/3 lg:w-2/4 2xl:w-2/5 absolute text-white overflow-hidden text-left top-[5%] sm:top-[20%] 2xl:top-[15%] left-[50%] sm:left-[50%] lg:left-[60%] xl:left-[70%] 2xl:left-[80%] dancing -translate-x-1/2">
        <div>
            <h2 className='font-bold uppercase pb-4 text-5xl xl:text-4xl'>Our Missions</h2>
            <p className='md:text-md lg:text-lg md:w-[80%]'>All Sputnik missions have the ability to conduct scientific research to improve life back on Earth as well as raise awareness to a global audience.</p>
            {destinations.map((item, index) => (
            <button
            key='index'
            onClick={() => setValue(index)}
            className={`uppercase py-4 md:pr-4 text-sm md:text-md 2xl:text-lg font-bold text-[#D1D1D1] mx-2 pb-2 ${
              index === value && "!text-white underline underline-offset-4 ..."
            }`} >
                    {item.title}
            </button>
              ))}
        </div>
        <div>
        <table className="md:w-[80%]" data-aos='fade-right' data-aos-delay='400'>
									<tbody className="pt-16 text-sm md:text-md text-left w-full font-[600] ">
										<tr className="border-b border-gray-500  " >
											<td className="font-[600]  py-4 md:py-[15px]" >{first}</td>
											<td className="text-right">{firstData}</td>
										</tr>
										<tr className="border-b border-gray-500" >
											<td className="font-[600]  py-4 md:py-[15px]">{second}</td>
											<td className="text-right">{secondData}</td>
										</tr>
										<tr className="border-b border-gray-500" >
											<td className="font-[600]  py-4 md:py-[15px]">{third}</td>
											<td className="text-right">{thirdData}</td>
										</tr>
										<tr className="border-b border-gray-500" >
											<td className="font-[600]  py-4 md:py-[15px]">{fourth}</td>
											<td className="text-right">{fourthData}</td>
										</tr>
										<tr className="border-b border-gray-500" >
											<td className="font-[600]  py-4 md:py-[15px]">{fifth}</td>
											<td className="text-right">{fifthData}</td>
										</tr>
										<tr className="border-b border-gray-500" >
											<td className="font-[600]  py-4 md:py-[15px]">{sixth}</td>
											<td className="text-right">{sixthData}</td>
										</tr>
									</tbody>
		</table>
        </div>
        </div>
    </div>
  )
}

export default Missions