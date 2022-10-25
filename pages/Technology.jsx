import { useEffect, useState } from "react"
import data from "../data/data"
import technologyImg from "../data/assets/technology/moonbase.webp"
import solarSysVid from "../data/assets/technology/file.mp4"
import capsuleImg from "../data/assets/technology/dragon.2.mp4"
import RocketSlider from "../components/RocketSlider"
import rideshare from "../data/assets/technology/rideshare.mp4"
import {Link} from 'react-router-dom';



export default function Technology() {
  const [cards] = useState(data.technology)
  const [value, setValue] = useState(0)

  const { name, images, description} = data.technology[value]

{/*scroll to top when open */}

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      {/* top serction */}
      <section className="overflow-hidden bg-black">
              {/* top img */}
          <img src={technologyImg} className='w-full brightness-50 h-[100vh] object-cover' alt="" 
          data-aos='fade-zoom-in'/>
              {/* top text */}
          <div className="m-auto z-[100] flex flex-col gap-0 lg:gap-4 absolute text-left xl:text-center justify-center top-[46%] lg:top-[40%] px-8 left-[10%] lg:left-[15%] xl:left-[25%] 2xl:left-[35%]"
            data-aos='fade-up'
            data-aos-delay='300'>
            <h2 className="lg:w-max text-4xl leading-[4rem] md:text-[4rem] sm:w-max lg:text-[4.5rem] font-bold text-white">The Future Is Now</h2>
            <p className="text-white text-sm lg:text-md  uppercase">Sputnik. offers the latest in Interplanetary Technology </p>
        </div>

        <div className="home technology">
          <video className=" absolute opacity-50 z-[0] w-full h-screen object-cover " autoPlay loop muted>
                      <source className="w-full" src={solarSysVid} />
            </video>
          <div className="px-12 w-full flex flex-col xl:flex-row  2xl:px-20 items-center justify-center h-screen lg:grid grid-cols-2 md:items-center lg:max-w-8xl lg:mx-auto">          
            <article className="text-center pt-12 sm:pt-0 z-[100] lg:h-screen items-start lg:items-center flex flex-col lg:flex-row lg:text-left">
            <div 
            className=" md:pb-0"
            data-aos='fade-right'
            data-aos-delay='200'>
            {cards.map((item, index) => (
                  <button
                    key={index}
                      onClick={() => setValue(index)}
                      className={`uppercase rounded-full h-6 lg:h-12 w-6 lg:w-12 text-sm lg:text-lg xl:text-2xl text-white m-2 pb-2 lg:p-2 border-white border-2  ${
                        index === value && "bg-white text-gray-800"
                      }`}
                    >
                      {index + 1}
                    </button>
                ))}
            </div>
              <div className="lg:ml-10 xl:px-2 text-left">
                <h1 className="lg:mx-auto text-white w-auto text-[1rem] xl:text-2xl 2xl:text-4xl uppercase" data-aos='fade-left' data-aos-delay='200'>03<span className="ml-1 xl:ml-5 font-bold">Technology of Tomorrow, Today</span></h1>
                <h4 className="lg:text-2xl 2xl:text-3xl uppercase text-gray-400" data-aos='fade-left' data-aos-delay='300'>How Will We Get There?</h4>
                <h2 className="font-bold text-4xl md:text-5xl text-white uppercase tracking-widest" data-aos='fade-left' data-aos-delay='100'>
                {name}
              </h2>
              <p className="mb-10 2xl:w-2/3 text-sm md:text-md text-gray-400" data-aos='fade-left' data-aos-delay='300'>
                {description}
              </p>
                </div>
            </article>
            <article data-aos='fade-down-left' data-aos-delay='200'>
              <picture className="">
                <source media="(min-width: 768px)" srcSet={images?.landscape} />
                <img src={images.portrait} alt={name} title={name} className='mb-12 block w-full mx-auto ' />
              </picture>
            </article>
          </div>
        </div>

      {/*capsule section */}
        <div className="flex relative flex-col lg:flex-row lg:px-0  lg:py-8 2xl:py-20">
        <video className=" z-[0] opacity-80 w-full h-screen 2xl:h-auto object-cover " autoPlay loop muted>
                    <source className="w-full" src={capsuleImg} />
          </video>
            <div className="absolute flex flex-col lg:flex-row z-[1000] justify-center lg:m-auto gap-4 xl:gap-8 text-sm text-right px-4 sm:left-[40%] lg:left-0 lg:text-left top-[50%] md:top-[50%] lg:top-[70%]">
              <div className="text-white w-full  lg:w-[40%]  2xl:w-1/4 2xl:px-8" data-aos='fade-right' data-aos-delay='400'>
                <h2 className="text-[#FD841F] xl:text-2xl 2xl:text-4xl">- <span className="font-bold text-white uppercase mb-2 md:text-md lg:text-xl 2xl:text-3xl">First Launch</span> -</h2>
                <p className="text-sm w-full  lg:w-full xl:text-lg 2xl:text-xl" >On Dec. 5, 2014, Dracarys launched atop a Vosktek IV Heavy rocket from Toronto Air Force Station's Space Launch Complex 37.</p>
              </div>
              <div className="text-white w-full  lg:w-[40%]  2xl:w-1/4 2xl:px-8" data-aos='fade-right' data-aos-delay='600'>
                <h2 className="text-[#FD841F] xl:text-2xl 2xl:text-4xl">- <span className="font-bold text-white uppercase mb-2 md:text-md lg:text-xl 2xl:text-3xl">FLIGHT TEST</span> -</h2>
                <p className="text-sm  w-full lg:w-full xl:text-lg 2xl:text-xl" >Loaded with over 1,200 sensors, Dracarys completed a two-orbit, 4.5-hour flight to test many of the systems most critical to safety before it carries astronauts.</p>
              </div>
              <div className="text-white w-full  lg:w-[44%]  2xl:w-1/4 2xl:px-8" data-aos='fade-right' data-aos-delay='800'>
                <h2 className="text-[#FD841F] xl:text-2xl 2xl:text-4xl">- <span className="font-bold text-white uppercase mb-2 md:text-md lg:text-xl 2xl:text-3xl">IN THE FUTURE</span> -</h2>
                <p className="text-sm  w-full lg:w-full xl:text-lg 2xl:text-xl">Dracarys will launch on NASA’s new heavy-lift rocket, the Space Launch System. More powerful than any other rocket ever built.</p>
              </div>
            </div>

            <div className="m-auto z-[0] w-full px-4 sm:w-1/3 2xl:w-1/4  absolute text-white overflow-hidden text-left top-[7%] md:top-[10%] lg:top-[20%] left-[50%] sm:left-[20%] md:left-[30%] lg:left-[25%] 2xl:left-[30%] -translate-x-1/2">
            <h2 className="text-3xl lg:text-5xl font-bold pb-4" data-aos='fade-right' data-aos-delay='400'>Dracarys</h2>
            <p className="text-sm lg:text-md 2xl:w-full" data-aos='fade-right' data-aos-delay='400'>The Dracarys spacecraft is capable of carrying up to 7 passengers to and from Earth orbit and beyond. It is the only spacecraft currently flying that is capable of returning significant amounts of cargo to Earth, and is the first private spacecraft to take humans to the space station.</p>
            <Link className='flex' to='/dracarys'>
                <button className="border-solid transition ease-in-out delay-150 mt-4 border-2 px-8 py-3 hover:bg-white hover:text-black uppercase text-sm font-bold border-white duration-300 ... " data-aos='fade-right' data-aos-delay='600'>LEARN MORE</button>
            </Link>
            </div>
          </div>

          <RocketSlider />


     {/*paylooad */}
     <div className="relative py-20">
          <video className="z-[0] w-full relative h-[50vh] lg:h-screen object-left object-cover " autoPlay loop muted>
              <source className="w-full" src={rideshare} />
          </video>
          <div className="m-auto z-[1000] lg:absolute text-white overflow-hidden text-right md:text-left top-[30%] lg:top-[20%] left-[50%] sm:left-[40%] md:left-[65%] 2xl:left-[70%] -translate-x-1/5 px-8 md:px-40 lg:-translate-x-1/2">
            <h2 className="text-xl sm:text-3xl md:text-5xl font-bold pb-4" data-aos='fade-right' data-aos-delay='400'>PAYLOAD CONFIGURATIONS</h2>
            <p className='text-sm xl:text-md' data-aos='fade-right' data-aos-delay='400'>Book your ride on 15” or 24” ESPA class ports. For larger spacecraft, custom configurations and a top slot are available upon request. Contact us directly for payloads that are too small for a 15” port.</p>
            <table className="mt-4 w-full lg:w-[28rem]">
									<tbody className="pt-16 text-[15.5px] w-full font-bold ">
										<tr className="border-b border-gray-500" data-aos='fade-right' data-aos-delay='400'>
											<td className="text-[14px] font-[600]  py-[20px]">15" PORT MASS	</td>
											<td className="text-right">454kg  <span className="text-[#868686]">/ 1,000lb</span></td>
										</tr>
										<tr className="border-b border-gray-500" data-aos='fade-right' data-aos-delay='600' >
											<td className="text-[14px] font-[600]  py-[20px]">24" PORT MASS</td>
											<td className="text-right" >830kg <span className="text-[#868686]"> / 1,830lb</span></td>
										</tr>
									</tbody>
								</table>
          </div>
     </div>
      {/*rocket video carrousel */}
      </section>
    </>
  )
}