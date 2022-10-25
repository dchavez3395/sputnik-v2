import React from 'react'
import mothershipStanding from "../data/assets/Mothership/WebsiteStarship_Render_Desktop.webp"

const MothershipSlideSecond = () => {
  return (
    <div>
        <div>
            <div className='relative bg-black' key='id'>
                <div className=' z-[0]'>
                    <img src={mothershipStanding} className='w-full h-[50vh] lg:h-[100vh] object-cover' alt=""  />
                </div>
                    {/* rocket info */}
                <div className="lg:absolute z-[0] px-8 md:px-32 py-12 lg:px-0 text-white text-left top-0 lg:left-[15%] 2xl:left-[15%]">
                    <h1 className="text-[40px] py-2  font-bold uppercase" data-aos='fade-right' data-aos-delay='700'>MOTHERSHIP</h1>
                    {/* table */}
                    <div>
                    </div>
                    <div className='lg:w-1/3 flex flex-col lg:gap-4'>
                        <div data-aos='fade-right' data-aos-delay='400' >
                            <p className='text-sm lg:text-lg'>Mothership is the fully reusable spacecraft and second stage of the Mothership system. It offers an integrated payload section and is capable of carrying passengers and cargo to Earth orbit, planetary destinations, and between destinations on Earth.</p>
                        </div>
                        <table className=" lg:w-full">
                            <tbody className=" text-[15.5px] w-full font-[600] " data-aos='fade-right' data-aos-delay='400'>
                                <tr className="border-b border-gray-500  " >
                                    <td className="text-[14px] font-[600]  py-[20px]">HEIGHT</td>
                                    <td className="text-right">50 m<span className="text-[#868686]"> / 164 ft</span></td>
                                </tr>
                                <tr className="border-b border-gray-500" >
                                    <td className="text-[14px] font-[600]  py-[20px]">DIAMETER</td>
                                    <td className="text-right">9 m <span className="text-[#868686]"> / 30 ft</span></td>
                                </tr>
                                <tr className="border-b border-gray-500" >
                                    <td className="text-[14px] font-[600]  py-[20px]">PROPELLANT CAPACITY	</td>
                                    <td className="text-right">1200 t <span className="text-[#868686]">/ 2.6 Mlb</span></td>
                                </tr>
                                <tr className="border-b border-gray-500" >
                                    <td className="text-[14px] font-[600]  py-[20px]" data-aos='fade-right' data-aos-delay='400'>THRUST</td>
                                    <td className="text-right">1500 tf <span className="text-[#868686]"> / 3.2Mlbf</span></td>
                                </tr>
                                <tr className="border-b border-gray-500" >
                                    <td className="text-[14px] font-[600]  py-[20px]">PAYLOAD CAPACITY	</td>
                                    <td className="text-right">100-150 t orbit dependent</td>
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