import React, { useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {Pagination, Navigation, Autoplay} from 'swiper';
import '../swiper.css';
import firstImg from "../data/assets/Vostok/falcon.mp4"
import VostokSlideSecond from './VostokSlideSecond'
import VostokSlideThird from './VostokSlideThird'



const VostokSliderFirst = () => {
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

            <>
            {/* first slide */}
              <SwiperSlide>
              <div>
                <div className='relative py-4' key='id'>
                <video className="z-[0] w-full relative h-[50vh] lg:h-screen object-cover " autoPlay loop muted>
                    <source className="w-full" src={firstImg} />
                </video>
              {/* rocket info */}
                <div className="lg:absolute z-[0] py-12 px-8 md:px-48 lg:px-0 text-white text-left top-[5%] left-[-10%] lg:left-[15%] 2xl:left-[25%]">
                    <h3 className='text-xl ' data-aos='fade-right' data-aos-delay='400'>Vostok X</h3>
                    <h1 className="text-[40px] 2xl:text-5xl py-2  font-bold uppercase" data-aos='fade-right' data-aos-delay='500'>OVERVIEW</h1>
                    {/* table */}
                    <table className="w-full">
                            <tbody className="pt-16 text-[15.5px] w-full font-[600] " data-aos='fade-right' data-aos-delay='700' >
                                <tr className="border-b border-gray-500  " >
                                    <td className="text-[14px] font-[600]  py-[20px]">HEIGHT</td>
                                    <td className="text-right" >70 m<span className="text-[#868686]">/ 229.6 ft</span></td>
                                </tr>
                                <tr className="border-b border-gray-500" >
                                    <td className="text-[14px] font-[600]  py-[20px]" >DIAMETER</td>
                                    <td className="text-right">3.7 m <span className="text-[#868686]"> 12 ft</span></td>
                                </tr>
                                <tr className="border-b border-gray-500" >
                                    <td className="text-[14px] font-[600]  py-[20px]">MASS</td>
                                    <td className="text-right">549,054 kg <span className="text-[#868686]">/ 1,207,920 lb</span></td>
                                </tr>
                                <tr className="border-b border-gray-500" >
                                    <td className="text-[14px] font-[600]  py-[20px]" >PAYLOAD TO LEO</td>
                                    <td className="text-right" >549,054 kg <span className="text-[#868686]"> / 1,207,920 lb</span></td>
                                </tr>
                                <tr className="border-b border-gray-500" >
                                    <td className="text-[14px] font-[600]  py-[20px]" >PAYLOAD TO GTO</td>
                                    <td className="text-right" >8,300 kg <span className="text-[#868686]">/ 18,300 lb</span></td>
                                </tr>
                                <tr className="border-b border-gray-500" >
                                    <td className="text-[14px] font-[600]  py-[20px]" >PAYLOAD TO MARS</td>
                                    <td className="text-right" >4,020 kg<span className="text-[#868686]">/ 8,860 lb</span></td>
                                </tr>
                            </tbody>
                        </table>
                </div>
                </div>
              </div>
            </SwiperSlide>
            {/* second slide */}
            <SwiperSlide>
              <VostokSlideSecond />
            </SwiperSlide>
            {/* third slide */}
            <SwiperSlide>
              <VostokSlideThird />
            </SwiperSlide>
            </>
    </div>
    </Swiper>
    </>
  )
}

export default VostokSliderFirst


