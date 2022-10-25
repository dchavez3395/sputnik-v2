import React, { useEffect } from 'react'
import DestinationSlider from '../components/DestinationSlider.'
import MothershipCarrousell from '../components/MothershipCarrousell';
import MothershipSlider from '../components/MothershipSlider';
import Raptor from '../components/Raptor';
import MothershipImg from "../data/assets/Mothership/mars_landing.webp"

const Mothership = () => {
      {/*scroll to top when open */}
      useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
  return (
    <div className='bg-black'>
        {/*hero*/}
        <div className='h-screen bg-black'>
            <img src={MothershipImg} className='w-full h-[100vh] object-cover' alt="" 
          data-aos='fade-zoom-in'/>
              {/* top text */}
            <div className="m-auto z-[1000] w-full md:w-auto px-8 md:px-0 xl:text-center overflow-hidden absolute text-left top-[46%] lg:top-[40%] left-[50%] 2xl:left-[50%] dancing -translate-x-1/2">
                <h2 className="text-[3rem] lg:w-max sm:w-max lg:text-[6rem] uppercase font-bold text-white"
                data-aos='fade-up'
                data-aos-delay='200'>MOTHERSHIP</h2>
                <p className="text-white text-md uppercase"
                data-aos='fade-up'
                data-aos-delay='400'>SPACE LUXURY AT YOUR REACH
                </p>
             </div>
        </div>
        {/*slider*/}
        <DestinationSlider />
        <MothershipSlider />
        <Raptor />
        <MothershipCarrousell />
    </div>
  )
}

export default Mothership