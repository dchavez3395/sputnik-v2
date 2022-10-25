import { useEffect, useState } from "react"
import destinationImg from "../data/assets/destination/destination.jpeg"
import marsVid from "../data/assets/destination/mars.mp4"
import '../index.css';
import DestinationSlider from "../components/DestinationSlider."
import DestinationPicker from "../components/DestinationPicker";



export default function Destination() {
  {/*planet info buttons*/}
  {/*scroll to top when open */}
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
      <section className="overflow-hidden bg-black">
        {/* top serction */}
      <img src={destinationImg} className='w-full brightness-75 h-[100vh] object-cover' alt=""
      data-aos='fade-zoom-in' />
      <div className="m-auto z-[1000] w-full text-left md:text-center px-12 overflow-hidden absolute top-[40%]">
          <h2 className="text-[3rem] lg:text-[5rem] font-bold text-white"
          data-aos='fade-up'
          data-aos-delay='300'>Explore The Cosmos</h2>
          <p className="text-white text-md uppercase"
          data-aos='fade-up'
          data-aos-delay='400'>humanity's next evolutionary leap is our ability to explore and inhabit space. </p>
        </div>
        <DestinationPicker />
       <div className="relative h-screen">
          <video className=" opacity-50 z-[0]  w-full  h-screen object-cover " autoPlay loop muted>
                    <source className="w-full" src={marsVid} />
          </video>
          <div className="m-auto z-[1000] md:w-2/4 xl:w-3/6 2xl:w-1/4 absolute text-white overflow-hidden text-left top-[10%] px-8 md:left-[10%] 2xl:left-[20%]  -translate-x-1/2"
          data-aos='fade-left'
          data-aos-delay='400'>
            <h3 className="xl:text-lg">Your Planetary Vacation Awaits</h3>
            <h1 className="text-4xl sm:text-4xl lg:text-6xl">TAKING HUMANS TO SPACE</h1>
            <p className="text-sm md:text-md lg:w-5/6">In 2020, Sputnik returned the people's ability to fly to and from the International Space Station, The Moon, Mars, and More by NASA astronauts on the most advanced space vehicles for the first time since 2011. Book your Space Vacation Now!</p>
          </div>
       </div>
       <DestinationSlider />
      </section>
    </>
  )
}