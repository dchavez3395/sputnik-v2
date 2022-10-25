import React, { useEffect } from 'react'
import VostokImg from "../data/assets/Vostok/technology-top.jpg"
import CountUp from 'react-countup';
import VostokSliderFourth from '../components/VostokSliderFourth'
import VostokSliderFirst from '../components/VostokSliderFirst';
import VostokCarrousell from '../components/VostokCarrousell';
import VisibilitySensor from 'react-visibility-sensor';

export default function Vostok() {
  {/*scroll to top when open */}
    useEffect(() => {
      window.scrollTo(0, 0)
    }, []);
  
    return (
        <div className='bg-black'>
            <div className='h-screen bg-black'>
            <img src={VostokImg} className='w-full brightness-75 h-[100vh] object-cover' alt="" 
          data-aos='fade-zoom-in'/>
              {/* top text */}
          <div className="m-auto z-[1000] w-full md:w-auto px-4 md:px-0 overflow-hidden absolute text-left top-[46%] lg:top-[40%] left-[50%] 2xl:left-[50%] dancing -translate-x-1/2">
            <h2 className="text-[3.5rem] lg:w-max sm:text-[4rem] sm:w-max lg:text-[6rem] uppercase font-bold text-white"
            data-aos='fade-up'
            data-aos-delay='200'>Vostok 9</h2>
            <p className="text-white text-md uppercase"
            data-aos='fade-up'
            data-aos-delay='400'>FIRST ORBITAL CLASS ROCKET CAPABLE OF REFLIGHT
            </p>
             </div>
            </div>
            {/*mid count up/*/}
            <div className='bg-black text-white py-12 flex flex-col md:flex-row md:gap-8 2xl:gap-48 m-auto justify-center '>
              <div className='text-center'>
              <CountUp duration={2} start={0} end={250} redraw={false}>
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span className='text-[5rem] 2xl:text-[8rem]' ref={countUpRef} />
                    </VisibilitySensor>
                )}
            </CountUp>
              <p className='mt-[-5%] md:mt-[-13%] xl:text-xl 2xl:text-2xl'>TOTAL LAUNCHES</p>
              </div>
              <div className='text-center'>
              <CountUp duration={2} start={0} end={235} redraw={false}>
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span className='text-[5rem] 2xl:text-[8rem]' ref={countUpRef} />
                    </VisibilitySensor>
                )}
            </CountUp>
              <p className='mt-[-5%] md:mt-[-13%] xl:text-xl 2xl:text-2xl'>TOTAL LANDINGS</p>
              </div>
              <div className='text-center'>
              <CountUp duration={2} start={0} end={203} redraw={false}>
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span className='text-[5rem] 2xl:text-[8rem]' ref={countUpRef} />
                    </VisibilitySensor>
                )}
            </CountUp>
              <p className='mt-[-5%] md:mt-[-13%] xl:text-xl 2xl:text-2xl'>TOTAL REFLIGHTS</p>
              </div>
            </div>
            <VostokSliderFirst />
            <VostokSliderFourth />
            <VostokCarrousell />
        </div>
    )
  }