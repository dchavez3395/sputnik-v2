import React from 'react'
import mothershipHeavy from "../data/assets/Mothership/WebsiteSuperHeavy_Render_Desktop.webp"

const MothershipSlideSecond = () => {
  return (
    <div>
        <div>
            <div className='relative bg-black' key='id'>
                <div className=' z-[0]'>
                    <img src={mothershipHeavy} className='w-full h-[50vh] lg:h-[100vh] object-cover' alt=""  />
                </div>
                    {/* rocket info */}
                <div className="lg:absolute z-[0] px-8 md:px-32 py-12 lg:px-0 text-white text-left top-[5%] lg:left-[15%] 2xl:left-[25%]">
                    <h1 className="text-[40px] 2xl:text-5xl py-2  font-bold uppercase" data-aos='fade-right' data-aos-delay='700'>SUPER HEAVY</h1>
                    {/* table */}
                    <div>
                    </div>
                    <div className='lg:w-[27rem] flex flex-col gap-4'>
                        <div data-aos='fade-right' data-aos-delay='400' >
                            <p className='text-sm lg:text-lg'>The first stage, or booster, of our next-generation launch system has a gross liftoff mass of over 3 million kg and uses sub-cooled liquid methane and liquid oxygen (CH4/LOX) propellants. The booster will return to land at the launch site on its 6 legs.</p>
                        </div>
                        <table className="lg:w-[27rem]">
                            <tbody className=" text-[15.5px] w-full font-[600] " data-aos='fade-right' data-aos-delay='400'>
                                <tr className="border-b border-gray-500  " >
                                    <td className="text-[14px] font-[600]  py-[20px]" >HEIGHT</td>
                                    <td className="text-right" >69 m<span className="text-[#868686]"> / 230 ft</span></td>
                                </tr>
                                <tr className="border-b border-gray-500" >
                                    <td className="text-[14px] font-[600]  py-[20px]" >DIAMETER</td>
                                    <td className="text-right" >9 m <span className="text-[#868686]"> / 30 ft</span></td>
                                </tr>
                                <tr className="border-b border-gray-500" >
                                    <td className="text-[14px] font-[600]  py-[20px]" >PROPELLANT CAPACITY	</td>
                                    <td className="text-right" >3400 t <span className="text-[#868686]">/ 6.8 Mlb</span></td>
                                </tr>
                                <tr className="border-b border-gray-500" >
                                    <td className="text-[14px] font-[600]  py-[20px]" >THRUST</td>
                                    <td className="text-right" >7590 tf <span className="text-[#868686]"> / 17 Mlbf</span></td>
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

export default MothershipSlideSecond