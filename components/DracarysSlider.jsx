import React, { useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {Pagination, Navigation, Autoplay} from 'swiper';
import '../swiper.css';
import firstImg from "../data/assets/Dracarys/dragon.mp4"
import trunkImg from "../data/assets/Dracarys/Trunk_Render_Desktop.webp"

import VeneraSlideSecond from './VeneraSlideSecond'
import DracarysCapsule from './DracarysCapsule'



const DracarysSlider = () => {
    const [value, setValue] = useState(0)
  return (
    <>
    <Swiper 
    className=' heroSlider bg-black'
    modules={[Pagination, Navigation]} 
    loop={true}
    pagination={{
      clickable: true,
      dynamicBullets: true,
    }}
    navigation={true}
    >
    <div>
        {/*Carrousell */}

            <>
            {/* first slide */}
              <SwiperSlide>
              <div>
                <div className='relative' key='id'>
                <video className="z-[0] w-full relative h-[50vh] lg:h-screen object-cover " autoPlay loop muted>
                    <source className="w-full" src={firstImg} />
                </video>
              {/* rocket info */}
                <div className="lg:absolute z-[0] px-8 md:px-32 py-12 lg:px-0  text-white text-center lg:text-left top-[15%] lg:top-[25%] 2xl:top-[10%] lg:left-[15%] 2xl:left-[20%]">
                    <h3 className='text-xl ' data-aos='fade-right' data-aos-delay='400'>DRACARYS</h3>
                    <h1 className="text-[40px] 2xl:text-5xl py-2  font-bold uppercase" data-aos='fade-right' data-aos-delay='700'>OVERVIEW</h1>
                    {/* table */}
                    <table className="my-4 text-left w-full lg:w-[28rem]">
                            <tbody className="pt-16 text-[15.5px] w-full font-[600] " data-aos='fade-right' data-aos-delay='400'>
                                <tr className="border-b border-gray-500  " >
                                    <td className="text-[14px] font-[600]  py-[20px]" >HEIGHT</td>
                                    <td className="text-right" >8.1 m <span className="text-[#868686]"> / 26.7 ft</span></td>
                                </tr>
                                <tr className="border-b border-gray-500" data-aos='fade-right' data-aos-delay='700'>
                                    <td className="text-[14px] font-[600]  py-[20px]">DIAMETER</td>
                                    <td className="text-right">4 m <span className="text-[#868686]"> / 13 ft </span></td>
                                </tr>
                                <tr className="border-b border-gray-500  ">
                                    <td className="text-[14px] font-[600]  py-[20px]">CAPSULE VOLUME	</td>
                                    <td className="text-right">9.3 m³ <span className="text-[#868686]"> / 328 ft³</span></td>
                                </tr>
                                <tr className="border-b border-gray-500">
                                    <td className="text-[14px] font-[600]  py-[20px]">TRUNK VOLUME</td>
                                    <td className="text-right">37 m³ <span className="text-[#868686]">  / 1300 ft³</span></td>
                                </tr>
                                <tr className="border-b border-gray-500  ">
                                    <td className="text-[14px] font-[600]  py-[20px]">LAUNCH PAYLOAD MASS</td>
                                    <td className="text-right">6,000 kg <span className="text-[#868686]">  / 13,228 lbs</span></td>
                                </tr>
                                <tr className="border-b border-gray-500">
                                    <td className="text-[14px] font-[600]  py-[20px]">RETURN PAYLOAD MASS</td>
                                    <td className="text-right">3,000 kg <span className="text-[#868686]"> / 6,614 lbs</span></td>
                                </tr>
                            </tbody>
                        </table>
                </div>
                </div>
              </div>
            </SwiperSlide>
            {/* second slide */} 
            <SwiperSlide>
            <div className='relative py-12' key='id'>
                <div className=' z-[0]'>
                     <img src={trunkImg} className='w-full h-[50vh] lg:h-[100vh]  object-cover' alt=""  />
                </div>
              {/* rocket info */}
                <div className="lg:absolute z-[0] px-4 py-12 m-auto  lg:px-0 w-full md:px-32 xl:w-2/6 2xl:w-1/4 text-white text-center lg:text-left top-[15%] lg:top-[25%] 2xl:top-[15%] lg:left-[15%] 2xl:left-[20%]">
                    <h3 className='text-xl ' data-aos='fade-right' data-aos-delay='400'>DRACARYS</h3>
                    <h1 className="text-[40px] 2xl:text-5xl py-2  font-bold uppercase" data-aos='fade-right' data-aos-delay='700'>TRUNK</h1>
                    <p className='leading-6 text-left'>Dracary's trunk not only carries unpressurized cargo but also supports the spacecraft during ascent. One half of the trunk is covered in solar panels that provide power to Dragon during flight and while on-station. The trunk remains attached to Dragon until shortly before reentry into Earth’s atmosphere.</p>
                    {/* table */}
                    <table className="my-4 text-left w-full">
                            <tbody className="pt-16 text-[15.5px] font-[600] ">
                                <tr className="border-b border-gray-500 " data-aos='fade-right' data-aos-delay='400' >
                                    <td className="text-[14px] font-[600]  py-[20px]">VOLUME</td>
                                    <td className="text-right">37 m³ <span className="text-[#868686]"> / 1300 ft³</span></td>
                                </tr>
                            </tbody>
                        </table>
                </div>
                </div>
            </SwiperSlide>
            {/* third slide */} 
            <SwiperSlide>
                <DracarysCapsule />
            </SwiperSlide>
            </>
    </div>
    </Swiper>
    </>
  )
}

export default DracarysSlider


