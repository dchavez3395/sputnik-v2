import React  from 'react'

const VostokTable = () => {
  return (
    <>
        <table className="my-4 w-full lg:w-[28rem]">
            <tbody className="pt-16 text-[15.5px] w-full font-[600] ">
                <tr className="border-b border-gray-500  " >
                    <td className="text-[14px] font-[600]  py-[20px]" data-aos='fade-right' data-aos-delay='400'>NUMBER OF ENGINES</td>
                    <td className="text-right" data-aos='fade-right' data-aos-delay='700'>9</td>
                </tr>
                <tr className="border-b border-gray-500" >
                    <td className="text-[14px] font-[600]  py-[20px]" data-aos='fade-right' data-aos-delay='400'>THRUST AT SEA LEVEL</td>
                        <td className="text-right" data-aos='fade-right' data-aos-delay='700'>7,607 kN <span className="text-[#868686]">/ 1,710,000 lbf</span></td>
                </tr>
                <tr className="border-b border-gray-500" >
                    <td className="text-[14px] font-[600]  py-[20px]" data-aos='fade-right' data-aos-delay='400'>THRUST IN VACUUM	</td>
                    <td className="text-right" data-aos='fade-right' data-aos-delay='700'>8,227 kN <span className="text-[#868686]">/ 1,849,500 lbf</span></td>
                </tr>
            </tbody>
        </table>
    </>
  )
}

export default VostokTable