import { useEffect } from "react";
import { Link } from "react-router-dom"
import spaceVideo from '../data/assets/home/space.mp4'
import HomeBanner from "./HomeBanner";
import reserve from "../data/assets/home/rideshare_pricing.webp"
import RocketSlider from "./RocketSlider";

export default function Home(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    return (
        <>
        {/*hero section */}
        <section className="home">
            <div className="relative">
                <video className="absolute opacity-90 w-full h-screen object-cover " autoPlay loop muted>
                    <source className="w-full h-screen" src={spaceVideo} />
                </video>
            </div>
            <div className="relative flex overlay pt-32">
               <article className=" md:text-right  lg:w-1/2 lg:mr-20">
               <h1 className="text-2xl text-gray-300"
               data-aos='fade-left'
               data-aos-delay='100'
               >THE SKY IS NO LONGER THE LIMIT, LET'S REACH FOR</h1>
               <h2 className="mb-10 mt-5 text-white text-4xl block lg:text-6xl">SPACE</h2>
                <p className="text-gray-400" data-aos='fade-left'
               data-aos-delay='300'>The World's first civilian Space Travel Agency. Sputnik offers the next big step in Human Travel. We offer affordable commercial flights to both Earth and Lunar orbit. Learn about our ambitious Mars Colonization Project. Start your journey today.</p>
               </article>
               <article className="mt-8 pb-8">
                <button className="sm:w-48 w-32  sm:h-48 h-32  rounded-full bg-white text-gray-800 uppercase font-bold sm:text-4xl  lg:text-4xl animate-pulse">
                    <Link to='/destination'>Explore</Link>
                </button>
               </article>
            </div>
        </section>
        {/*mid-banner section */}
        <section>
            <HomeBanner />
        </section>
        {/*reserve section */}
        <section className="overflow-hidden">
            <div className="relative h-screen">
                <div className="object-cover">
                    <img src={reserve} className='w-full brightness-90  h-[100vh] object-cover' alt="" />
                </div>
                <div className="m-auto z-[1000] flex flex-col gap-2  md:w-2/3  lg:w-[50%] xl:w-[40%] 2xl:w-1/4 absolute text-white overflow-hidden text-left top-[15%] px-8 md:left-[5%] xl:left-[10%] 2xl:left-[20%] dancing -translate-x-1/2"
                data-aos='fade-left'
                data-aos-delay='400'>
                    <h1 className="text-3xl sm:text-2xl lg:text-4xl font-bold">RESERVE YOUR RIDE ONLINE</h1>
                    <p className="text-sm sm:text-md">Find all the information you need to make a reservation online, everything from port size to technical specifications to licensing information. Once your reservation request is approved, SpaceX will provide you with a welcome package outlining next steps for launch.</p>
                    <p className="text-sm sm:text-md">Payloads are received at the launch site around L-30 and processed in a Sputnik facility. More details can be found in the Rideshare User’s Guide.</p>            
                </div>
            </div>
        </section>
                {/*Rockets section */}
        <section className="overflow-hidden bg-black">
                    <RocketSlider />
        </section>
        </>
    )
}; 