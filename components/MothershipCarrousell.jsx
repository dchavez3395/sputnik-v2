import React, { useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {Pagination, Navigation, Autoplay} from 'swiper';
import '../swiper.css';
import {MothershipCarousellData} from "../data"


const MothershipCarrousell = () => {
    const [value, setValue] = useState(0)
    const {img} = MothershipCarousellData[value]
  return (
    <div className='text-white'>
    <Swiper 
    className=' heroSlider'
    modules={[Pagination, Navigation, Autoplay]} 
    loop={true}
    autoplay={true}
    pagination={{
      clickable: true,
      dynamicBullets: true,
    }}
    navigation={true}
    >
    <div key='id'>
        {/*Carrousell */}
            <>
            {/* first slide */}

            {MothershipCarousellData.map((item, index) => {
                    const {img} = item;
                    return (
                        <SwiperSlide>
                        <div key='key'>
                          <div className='relative text-white' key='id'>
                              <div className='z-[0] h-screen'>
                                  <img src={img} className='w-full h-full object-cover' alt=""  />
                              </div>                
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                })}
            </>
    </div>
    </Swiper>
    </div>
  )
}

export default MothershipCarrousell