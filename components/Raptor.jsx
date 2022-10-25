import React from 'react'
import raptorIMG from "../data/assets/Mothership/Raptor.webp"

const Raptor = () => {
  return (
    <div>
        <div>
            <div className='relative bg-black py-20 lg:py-12' key='id'>
                <div className='z-[0]'>
                    <img src={raptorIMG} className='w-full h-[50vh] lg:h-screen object-cover' alt=""  />
                </div>
                    {/* rocket info */}
                <div className="lg:absolute z-[0] px-8 lg:pt-[10%] xl:pt-[5%] lg:px-0 m-auto text-white text-left w-1/4 top-[5%] lg:left-[15%] 2xl:left-[10%]">
                    <h3 className='text-xl ' data-aos='fade-right' data-aos-delay='400'>Engines</h3>
                    <h1 className="text-[40px] 2xl:text-5xl py-2  font-bold uppercase" data-aos='fade-right' data-aos-delay='700'>Raptor</h1>
                    <p className='text-left text-sm lg:text-lg'>The Raptor engine is a reusable methalox staged-combustion engine that powers the Starship launch system. Raptor engines began flight testing on the Starship prototype rockets in July 2019, becoming the first full-flow staged combustion rocket engine ever flown.</p>
                    {/* table */}
                    <div className='w-full'>
                        <table className=" w-full text-left" data-aos='fade-right' data-aos-delay='400'>
                            <tbody className="pt-16 text-[15.5px] font-[600] ">
                            <tr className="border-b border-gray-500 " >
                                    <td className="text-[14px] font-[600]  py-[20px]" >DIAMETER</td>
                                    <td className="text-right">1.3 m<span className="text-[#868686]">/ 4 ft</span></td>
                                </tr>
                                <tr className="border-b border-gray-500 ">
                                    <td className="text-[14px] font-[600]  py-[20px]">HEIGHT</td>
                                    <td className="text-right">3.1 m<span className="text-[#868686]">/ 10.2 ft</span></td>
                                </tr>
                                <tr className="border-b border-gray-500" >
                                    <td className="text-[14px] font-[600]  py-[20px]">THRUST</td>
                                        <td className="text-right">230 tf <span className="text-[#868686]">/ 500 klbf</span></td>
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

export default Raptor