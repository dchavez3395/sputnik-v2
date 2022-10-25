import { useEffect, useState } from "react"
import crewImg from "../data/assets/crew/space-crew.jpg"
import crewBg from "../data/assets/crew/crew-02.jpg"
import Missions from "../components/Missions"
import CrewIntro from "../components/CrewIntro"


export default function Crew() {

  //open at top of page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <section className="bg-black overflow-hidden">
        {/* top serction */}
        <div className="relative">
        {/* top image */}
          <img src={crewImg} className='w-full brightness-50 h-[100vh] object-cover' alt="" data-aos='fade-zoom-in' />
        </div>
        {/* top text */}
        <div className="m-auto z-[1000] overflow-hidden absolute text-center top-[46%] lg:top-[40%] left-[50%] 2xl:left-[50%] dancing -translate-x-1/2">
          <h2 className="text-[3.5rem] lg:w-max sm:text-[4rem] sm:w-max lg:text-[5rem] font-bold text-white"
          data-aos='fade-up'
          data-aos-delay='100'>Human Spaceflight</h2>
          <p className="text-white text-ns uppercase"
          data-aos='fade-up'
          data-aos-delay='200'>the world's first commercial interplanetary space travel</p>
        </div>
        <CrewIntro />
        {/*astronauts crew*/}
        <div className="relative h-screen">
          <div className="object-cover">
            <img src={crewBg} className='w-full brightness-75 h-[100vh] object-cover' alt="" />
          </div>
          <div className="m-auto z-[1000] px-8 sm:w-2/3 xl:w-2/4 2xl:w-2/4 absolute text-white overflow-hidden text-left top-[20%]  md:left-[10%] 2xl:left-[20%] dancing -translate-x-1/2"
          data-aos='fade-left'
          data-aos-delay='400'>
            <h3 className="md:text-4xl md:w-full 2xl:w-[65%]">You Are In Great Hands</h3>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mt-2 mb-2">FLY WITH NASA ASTRONAUTS</h1>
            <p className="text-sm">DEDICATED INTERPLANETARY MISSIONS AS LOW AS $1 BTC*</p>
          </div>
       </div>
       <Missions />
      </section>
    </>
  )
}