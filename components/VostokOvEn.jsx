import React, { useState } from 'react'
import {vostokSliderButtons} from "../data"


const VostokOvEn = () => {
    const [value, setValue] = useState(0)
    const {button, bottom2, image2} = vostokSliderButtons[value]
  return (
    <>
        {vostokSliderButtons.map((item, index) => {
            const {button} = item;
            return (
                    <button
                        key='index'
                        onClick={() => setValue(index)}
                        className={`uppercase z-[1000] text-sm md:text-[1rem] pr-4  font-bold text-[#D1D1D1] ${
                            index === value && "underline underline-offset-4 ..."
                        }`} >
                    {item.button} 
                    </button>
            )
        })}
        <div className='w-[30rem] ] py-8'>
            {bottom2}
        </div>
    </>
  )
}

export default VostokOvEn