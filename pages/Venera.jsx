import React, { useEffect } from 'react'
import VostokImg from "../data/assets/Venera/FH_7.webp"
import CountUp from 'react-countup';
import VeneraSlider from '../components/VeneraSlider';
import VeneraVideo from '../data/assets/Venera/fh_performance.mp4';
import VeneraEngines from '../components/VeneraEngines';
import VeneraCarrousell from '../components/VeneraCarrousell';
import VisibilitySensor from 'react-visibility-sensor';

export default function Venera() {
  {/*scroll to top when open */}
    useEffect(() => {
      window.scrollTo(0, 0)
    }, []);
  
    return (
        <div className='bg-black overflow-hidden'>
            <div className='h-screen opacity-90 bg-black'>
            <img src={VostokImg} className='w-full brightness-75 h-[100vh] object-cover' alt="" 
          data-aos='fade-zoom-in'/>
              {/* top text */}
          <div className="m-auto z-[1000] w-full md:w-auto px-4 md:px-0 xl:text-center overflow-hidden absolute text-left top-[46%] lg:top-[40%] left-[50%] 2xl:left-[50%] dancing -translate-x-1/2">
            <h2 className="text-[3.5rem] lg:w-max sm:text-[4rem] sm:w-max lg:text-[6rem] uppercase font-bold text-white"
            data-aos='fade-up'
            data-aos-delay='200'>Venera Heavy</h2>
            <p className="text-white text-md uppercase"
            data-aos='fade-up'
            data-aos-delay='400'>THE WORLD’S MOST POWERFUL ROCKET
            </p>
             </div>
            </div>
            {/*mid count up/*/}
            <div className='bg-black text-white py-12 flex flex-col md:flex-row md:gap-8 2xl:gap-48 m-auto justify-center '>
              <div className='text-center'>
              <CountUp duration={2} start={0} end={190} redraw={false}>
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span className='text-[5rem] 2xl:text-[8rem]' ref={countUpRef} />
                    </VisibilitySensor>
                )}
            </CountUp>
              <p className='mt-[-5%] md:mt-[-13%] xl:text-xl 2xl:text-2xl'>TOTAL LAUNCHES</p>
              </div>
              <div className='text-center'>
              <CountUp duration={2} start={0} end={205} redraw={false}>
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span className='text-[5rem] 2xl:text-[8rem]' ref={countUpRef} />
                    </VisibilitySensor>
                )}
            </CountUp>
              <p className='mt-[-5%] md:mt-[-13%] xl:text-xl 2xl:text-2xl'>TOTAL LANDINGS</p>
              </div>
              <div className='text-center'>
              <CountUp duration={2} start={0} end={193} redraw={false}>
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span className='text-[5rem] 2xl:text-[8rem]' ref={countUpRef} />
                    </VisibilitySensor>
                )}
            </CountUp>
              <p className='mt-[-5%] md:mt-[-13%] xl:text-xl 2xl:text-2xl'>TOTAL REFLIGHTS</p>
              </div>
            </div>
            <VeneraSlider />
            {/*take off section/*/}
            <div className='flex relative flex-col m-auto px-8 items-center lg:flex-row gap-12 py-40 justify-center'>
                <div className='xl:w-2/4 2xl:w-1/4'>
                    <video className="z-[0] relative" autoPlay loop muted>
                        <source className="" src={VeneraVideo} />
                    </video>
                </div>
                <div className='text-white flex flex-col w-full  gap-4  bottom-[50%] xl:w-1/3'>
                    <h2 className='text-4xl 2xl:text-5xl font-bold'>UNMATCHED PERFORMANCE</h2>
                    <p className='text-sm lg:text-md xl:text-lg'>With more than 5 million pounds of thrust at liftoff, Venera Heavy is the most capable rocket flying. By comparison, the liftoff thrust of the Venera Heavy equals approximately eighteen 747 aircraft at full power. Venera Heavy can lift the equivalent of a fully loaded 737 jetliner—complete with passengers, luggage and fuel—to orbit.</p>
                </div>
            </div>
            <VeneraEngines />
            <VeneraCarrousell />
        </div>
    )
  }