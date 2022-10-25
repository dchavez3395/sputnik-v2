import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {Pagination, Navigation, Autoplay} from 'swiper';
import '../swiper.css';
import { rocketsSlider } from '../data'
import {Link} from 'react-router-dom';


const RocketSlider = () => {
  return (
    <>
    <Swiper 
    className=' heroSlider'
    modules={[Pagination, Navigation, Autoplay]} 
    autoplay={false}
    loop={true}
    pagination={{
      clickable: true,
      dynamicBullets: true,
    }}
    navigation={true}
    >
    <div>
        {/*Carrousell */}
        {rocketsSlider.map((slide, index) => {
          const {title, image, href, first, firstData, firstSpan, second, secondData,
             secondSpan, third, thirdData, thirdSpan,
            fourth, fourthData, fourthSpan, fifth, fifthData, fifthSpan, sixth, sixthData, sixthSpan} = slide;
          return (
            <SwiperSlide>
              <div>
                <div className='bg-black py-8' key='id'>
                  <video className="z-[0] w-full relative h-[50vh] lg:h-screen object-cover " autoPlay loop muted>
                      <source className="w-full" src={image} />
                  </video>
              {/* rocket info */}
                  <div className="lg:absolute z-[0] py-12 px-8 md:px-48 lg:px-0 text-white text-left top-[5%] left-[-10%] lg:left-[15%] 2xl:left-[25%]">
                    <h3 className='text-2xl' data-aos='fade-left' data-aos-delay='400'>{title}</h3>
                    <h1 className="text-[40px]  font-bold uppercase" data-aos='fade-left' data-aos-delay='700'>Overview</h1>
                    {/* table */}
                    <table className="my-4 w-full">
                          <tbody className="pt-16 font-[600] ">
                            <tr className="border-b text-sm border-gray-500 " data-aos='fade-left' data-aos-delay='200'>
                              <td className="text-[14px] py-4  font-[600]  md:py-[20px]">{first}</td>
                              <td className="text-right" >{firstData} <span className="text-[#7F7C82]">{firstSpan}</span></td>
                            </tr>
                            <tr className="border-b text-sm border-gray-500" data-aos='fade-left' data-aos-delay='/300' >
                              <td className="font-[600] py-4  md:py-[20px]" >{second}</td>
                              <td className="text-right" >{secondData} <span className="text-[#7F7C82]"> {secondSpan}</span></td>
                            </tr>
                            <tr className="border-b text-sm border-gray-500 " data-aos='fade-left' data-aos-delay='400'>
                              <td className="font-[600] py-4  md:py-[20px]" >{third}</td>
                              <td className="text-right" >{thirdData} <span className="text-[#7F7C82]">{thirdSpan}</span></td>
                            </tr>
                            <tr className="border-b text-sm border-gray-500" data-aos='fade-left' data-aos-delay='500' >
                              <td className="font-[600] py-4  md:py-[20px]" >{fourth}</td>
                              <td className="text-right" >{fourthData} <span className="text-[#7F7C82]"> {fourthSpan}</span></td>
                            </tr>
                            <tr className="border-b text-sm border-gray-500 " data-aos='fade-left' data-aos-delay='600'>
                              <td className="font-[600] py-4  md:py-[20px]" >{fifth}</td>
                              <td className="text-right" >{fifthData} <span className="text-[#7F7C82]">{fifthSpan}</span></td>
                            </tr>
                            <tr className="border-b text-sm border-gray-500" data-aos='fade-left' data-aos-delay='700' >
                              <td className="font-[600] py-4  md:py-[20px]" >{sixth}</td>
                              <td className="text-right">{sixthData}<span className="text-[#7F7C82]">{sixthSpan}</span></td>
                            </tr>
                          </tbody>
                        </table>
                        <Link className='flex' to={href}>
                        <button className="border-solid transition ease-in-out delay-150 mt-4 border-2 px-8 py-3 hover:bg-white hover:text-black uppercase text-sm font-bold border-white duration-300 ... " data-aos='fade-left' data-aos-delay='600'>LEARN MORE</button>
                        </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
    </div>
    </Swiper>
    </>
  )
}

export default RocketSlider