import React, { useEffect } from 'react'
import CountUp from 'react-countup';
import DracarysCarrousell from '../components/DracarysCarrousell';
import DracarysSlider from '../components/DracarysSlider';
import Dracos from '../components/Dracos';
import DracarysImg from "../data/assets/Dracarys/dracarys.webp"
import dracarysParachute from '../data/assets/Dracarys/I4_Splashdown_Desktop.jpg';
import dracarysCall from '../data/assets/Dracarys/SpinningDragon_I4_Web_Callouts_Reloop.mp4';
import VisibilitySensor from 'react-visibility-sensor';


const Dracarys = () => {
      {/*scroll to top when open */}
      useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
  return (
    <div>
        {/*hero*/}
        <div className='h-screen !overflow-hidden bg-black'>
            <img src={DracarysImg} className='w-full brightness-90 h-[100vh] object-cover' alt="" 
            data-aos='fade-zoom-in'/>
              {/* top text */}
            <div className="m-auto z-[1000] w-full md:w-auto px-4 md:px-0 xl:text-center overflow-hidden absolute text-left top-[46%] lg:top-[40%]  left-[50%] 2xl:left-[50%] -translate-x-1/2">
                <h2 className="text-[3.5rem] lg:w-max sm:text-[4rem] sm:w-max lg:text-[6rem] uppercase font-bold text-white"
                data-aos='fade-up'
                data-aos-delay='200'>Dracarys</h2>
                <p className="text-white text-md uppercase"
                data-aos='fade-up'
                data-aos-delay='400'>SENDING HUMANS AND CARGO INTO SPACE
                </p>
             </div>
        </div>
        {/*slider*/}
            {/*mid count up/*/}
            <div className='bg-black text-white py-12 flex flex-col md:flex-row md:gap-8 2xl:gap-48 m-auto justify-center '>
              <div className='text-center'>
              <CountUp duration={2} start={0} end={390} redraw={false}>
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span className='text-[5rem] 2xl:text-[8rem]' ref={countUpRef} />
                    </VisibilitySensor>
                )}
            </CountUp>
              <p className='mt-[-5%] md:mt-[-13%] xl:text-xl 2xl:text-2xl'>TOTAL LAUNCHES</p>
              </div>
              <div className='text-center'>
              <CountUp duration={2} start={0} end={375} redraw={false}>
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span className='text-[5rem] 2xl:text-[8rem]' ref={countUpRef} />
                    </VisibilitySensor>
                )}
            </CountUp>
              <p className='mt-[-5%] md:mt-[-13%] xl:text-xl 2xl:text-2xl'>TOTAL LANDINGS</p>
              </div>
              <div className='text-center'>
              <CountUp duration={2} start={0} end={369} redraw={false}>
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span className='text-[5rem] 2xl:text-[8rem]' ref={countUpRef} />
                    </VisibilitySensor>
                )}
            </CountUp>
              <p className='mt-[-5%] md:mt-[-13%] xl:text-xl 2xl:text-2xl'>TOTAL REFLIGHTS</p>
              </div>
            </div>  
        <DracarysSlider />
        {/*take off section/*/}
        <div className='bg-black'>
            <div className='flex relative flex-col m-auto px-4 items-center lg:flex-row gap-12 py-40 justify-center'>
                    <div className='xl:w-2/4 2xl:w-1/4'>
                        <img className='w-full h-full object-cover' src={dracarysParachute} alt="" />
                    </div>
                    <div className='text-white text-right flex flex-col w-full md:w-3/4 gap-4 xl:w-[22%]'>
                        <h2 className='text-4xl 2xl:text-5xl font-bold'>DRACARYS PARACHUTE SYSTEM</h2>
                        <p>The Dracarys spacecraft is equipped with two drogue parachutes to stabilize the spacecraft following reentry and four main parachutes to further decelerate the spacecraft prior to landing.</p>
                    </div>
                </div>
        </div>
              <video className="z-[0] w-full relative h-[50vh] object-left lg:h-screen object-cover " autoPlay loop muted>
                    <source className="w-full" src={dracarysCall} />
                </video>
        <Dracos />
        <DracarysCarrousell />
    </div>
  )
}

export default Dracarys