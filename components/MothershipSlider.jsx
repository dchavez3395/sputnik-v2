import React, { useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {Pagination, Navigation, Autoplay} from 'swiper';
import '../swiper.css';
import mothership from "../data/assets/Mothership/mothership.webm"
import MothershipSlideSecond from './MothershipSlideSecond'
import MothershipSlideThird from './MothershipSlideThird'
import MothershipSlideFour from './MothershipSlideFour'



const MothershipSlider = () => {
    const [value, setValue] = useState(0)
  return (
    <>
    <Swiper 
    className=' heroSlider'
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

            <div className='bg-black py-8'>
            {/* first slide */}
              <SwiperSlide>
              <div>
                <div className='relative' key='id'>
                <video className="z-[0] w-full relative h-[50vh] lg:h-screen object-cover " autoPlay loop muted>
                    <source className="w-full" src={mothership} />
                </video>
              {/* rocket info */}
                <div className="lg:absolute z-[0] px-8 md:px-32 py-8 lg:px-0 text-white text-center lg:text-left top-[15%] lg:top-[25%] 2xl:top-[20%] lg:left-[15%] 2xl:left-[25%]">
                    <h3 className='text-xl ' data-aos='fade-right' data-aos-delay='400'>MOTHERSHIP</h3>
                    <h1 className="text-[40px] 2xl:text-5xl py-2  font-bold uppercase" data-aos='fade-right' data-aos-delay='600'>OVERVIEW</h1>
                    {/* table */}
                    <table className="my-4 lg:w-[25rem] w-full text-left" data-aos='fade-right' data-aos-delay='800'>
                            <tbody className="pt-16 text-[15.5px] w-full font-[600] ">
                                <tr className="border-b border-gray-500  " >
                                    <td className="text-[14px] font-[600]  py-[20px]" data-aos='fade-right' data-aos-delay='400'>HEIGHT</td>
                                    <td className="text-right" data-aos='fade-right' data-aos-delay='700'>120 m<span className="text-[#868686]">/ 394 ft</span></td>
                                </tr>
                                <tr className="border-b border-gray-500" >
                                    <td className="text-[14px] font-[600]  py-[20px]" data-aos='fade-right' data-aos-delay='400'>DIAMETER</td>
                                    <td className="text-right" data-aos='fade-right' data-aos-delay='700'>9 m<span className="text-[#868686]"> 30 ft </span></td>
                                </tr>
                                <tr className="border-b border-gray-500" >
                                    <td className="text-[14px] font-[600]  py-[20px]" data-aos='fade-right' data-aos-delay='400'>PAYLOAD TO LEO	</td>
                                    <td className="text-right" data-aos='fade-right' data-aos-delay='700'>100+ t <span className="text-[#868686]">/ 220+ klb</span></td>
                                </tr>
                            </tbody>
                        </table>
                </div>
                </div>
              </div>
            </SwiperSlide>
            {/* second slide */}
            <SwiperSlide>
                <MothershipSlideSecond />
            </SwiperSlide>
            {/* Third slide */}
            <SwiperSlide>
                <MothershipSlideThird />
            </SwiperSlide>
            {/* Fourth slide */}
            <SwiperSlide>
                <MothershipSlideFour />
            </SwiperSlide>
            </div>
    </div>
    </Swiper>
    </>
  )
}

export default MothershipSlider


