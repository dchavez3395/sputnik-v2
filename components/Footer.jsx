import React, { useEffect, useState } from 'react'
import Logo from '../data/assets/shared/logo.svg'
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-[#000] z-[10000000] bg-cover h-full text-white relative w-full'>
        <div className='flex flex-col lg:flex-row  px-20 py-12 justify-between'>
            <div >
                <Link className='gap-2 flex' to='/'>
                 { /** <img src={Logo} alt="Space Tourism" title='Space Tourism' />**/}
                    <h3 className='lowercase text-3xl'>Sputnik.</h3>
                </Link>
            </div>
            <div className='py-8 lg:py-0'>
              <ul className='py-2 flex flex-col sm:flex-row gap-4'>
                    <li className='list-item'>
                        <Link className='hover:text-gray-800' to='/'>Home</Link>
                    </li>
                    <li className='list-item'>
                        <Link className='hover:text-gray-800' to='/destination'>Destination</Link>
                    </li>
                    <li className='list-item'>
                        <Link className='hover:text-gray-800' to='/crew'>Crew</Link>
                    </li>
                    <li className='list-item'>
                        <Link className='hover:text-gray-800' to='/technology'>Technology</Link>
                    </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
