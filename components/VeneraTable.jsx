import React  from 'react'

const VeneraTable = () => {
  return (
    <>
        <table className="my-4 w-full ">
            <tbody className="pt-16 text-[15.5px] w-full font-[600] " data-aos='fade-right' data-aos-delay='400'>
                <tr className="border-b border-gray-500  "  >
                    <td className="text-[14px] font-[600]  py-[20px]" >NUMBER OF ENGINES</td>
                    <td className="text-right">27</td>
                </tr>
                <tr className="border-b border-gray-500" >
                    <td className="text-[14px] font-[600]  py-[20px]">THRUST AT SEA LEVEL</td>
                        <td className="text-right">22,819 kN <span className="text-[#868686]">/ 5,130,000 lbf</span></td>
                </tr>
                <tr className="border-b border-gray-500" >
                    <td className="text-[14px] font-[600]  py-[20px]">THRUST IN VACUUM	</td>
                    <td className="text-right">24,681 kN  <span className="text-[#868686]">/ 5,548,500 lbf</span></td>
                </tr>
            </tbody>
        </table>
    </>
  )
}

export default VeneraTable