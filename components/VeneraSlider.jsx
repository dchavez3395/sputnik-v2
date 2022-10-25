import React, { useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {Pagination, Navigation, Autoplay} from 'swiper';
import '../swiper.css';
import firstImg from "../data/assets/Venera/WebsiteFHFairings_Anim_Render_Desktop.mp4"
import VeneraSlideSecond from './VeneraSlideSecond'
import payloadImg from "../data/assets/Venera/WebsiteFHSoloFairings_Render_Desktop.webp"



const VeneraSlider = () => {
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
                <div className='relative  md:py-8' key='id'>
                <video className="z-[0] w-full relative h-[50vh] lg:h-screen object-cover " autoPlay loop muted>
                    <source className="w-full" src={firstImg} />
                </video>
              {/* rocket info */}
                <div className="lg:absolute z-[0] px-4 md:px-32 py-12 md:py-8 lg:px-0 text-white text-center lg:text-left top-[5%] left-[-10%] lg:left-[15%] 2xl:left-[25%]">
                    <h3 className='text-xl ' data-aos='fade-right' data-aos-delay='400'>VENERA HEAVY</h3>
                    <h1 className="text-[40px] 2xl:text-5xl py-2  font-bold uppercase" data-aos='fade-right' data-aos-delay='600'>OVERVIEW</h1>
                    {/* table */}
                    <table className="my-4 lg:w-full text-left w-full m-auto lg:m-0">
                            <tbody className="pt-16 text-[15.5px]  font-[600] " data-aos='fade-right' data-aos-delay='800'>
                                <tr className="border-b border-gray-500" >
                                    <td className="text-[14px] font-[600]  py-[20px]">HEIGHT</td>
                                    <td className="text-right">70 m<span className="text-[#868686]">/ 229.6 ft</span></td>
                                </tr>
                                <tr className="border-b border-gray-500" >
                                    <td className="text-[14px] font-[600]  py-[20px]">WIDTH</td>
                                    <td className="text-right" >12 m <span className="text-[#868686]"> 39.9 ft </span></td>
                                </tr>
                                <tr className="border-b border-gray-500" >
                                    <td className="text-[14px] font-[600]  py-[20px]">MASS</td>
                                    <td className="text-right">1,420,788 kg <span className="text-[#868686]">/ 3,125,735  lb</span></td>
                                </tr>
                                <tr className="border-b border-gray-500" >
                                    <td className="text-[14px] font-[600]  py-[20px]">PAYLOAD TO LEO</td>
                                    <td className="text-right">63,800 kg <span className="text-[#868686]"> / 140,660 lb</span></td>
                                </tr>
                                <tr className="border-b border-gray-500" >
                                    <td className="text-[14px] font-[600]  py-[20px]">PAYLOAD TO GTO</td>
                                    <td className="text-right" >26,700 kg <span className="text-[#868686]">/ 58,860 lb</span></td>
                                </tr>
                                <tr className="border-b border-gray-500" >
                                    <td className="text-[14px] font-[600]  py-[20px]">PAYLOAD TO MARS</td>
                                    <td className="text-right" >16,800 kg<span className="text-[#868686]">/ 37,040  lb</span></td>
                                </tr>
                            </tbody>
                        </table>
                </div>
                </div>
              </div>
            </SwiperSlide>
            {/* second slide */}
            <SwiperSlide>
              <VeneraSlideSecond />
            </SwiperSlide>
            {/* third slide */}
            <SwiperSlide>
            <div className='relative' key='id'>
                <div className=' z-[0]'>
                     <img src={payloadImg} className='w-full h-[50vh] lg:h-[100vh] object-cover' alt=""  />
                </div>
              {/* rocket info */}
                <div className="lg:absolute z-[0] px-4 md:px-32 lg:px-0 text-white text-center lg:text-left top-[15%] lg:top-[25%] 2xl:top-[20%] lg:left-[15%] 2xl:left-[25%]">
                    <h3 className='text-2xl ' data-aos='fade-right' data-aos-delay='400'>Vostok X</h3>
                    <h1 className="text-[40px] 2xl:text-5xl py-2  font-bold uppercase" data-aos='fade-right' data-aos-delay='700'>PAYLOAD</h1>
                    <p className='lg:w-1/3 text-left'>Made of a carbon composite material, the fairing protects satellites on their way to orbit. SpaceX is recovering fairing for reuse on future missions.</p>
                    {/* table */}
                    <table className="my-4 w-full text-left lg:w-1/3">
                            <tbody className="pt-16 text-[15.5px] w-full font-[600] ">
                                <tr className="border-b border-gray-500  " >
                                    <td className="text-[14px] font-[600]  py-[20px]" data-aos='fade-right' data-aos-delay='400'>HEIGHT</td>
                                    <td className="text-right" data-aos='fade-right' data-aos-delay='700'>13.1 m<span className="text-[#868686]"> / 43 ft</span></td>
                                </tr>
                                <tr className="border-b border-gray-500" >
                                    <td className="text-[14px] font-[600]  py-[20px]" data-aos='fade-right' data-aos-delay='400'>DIAMETER</td>
                                    <td className="text-right" data-aos='fade-right' data-aos-delay='700'>5.2 m <span className="text-[#868686]"> / 17.1 ft</span></td>
                                </tr>
                            </tbody>
                        </table>
                </div>
                </div>
            </SwiperSlide>
            </>
    </div>
    </Swiper>
    </>
  )
}

export default VeneraSlider


