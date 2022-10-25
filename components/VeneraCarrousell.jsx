import React, { useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {Pagination, Navigation, Autoplay} from 'swiper';
import '../swiper.css';
import {VeneraCarousellData} from "../data"


const VeneraCarrousell = () => {
    const [value, setValue] = useState(0)
    const {img} = VeneraCarousellData[value]
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

            {VeneraCarousellData.map((item, index) => {
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

export default VeneraCarrousell