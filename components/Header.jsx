import Logo from '../data/assets/shared/logo.svg'
import {Link} from 'react-router-dom';
import {CgMenuLeft} from "react-icons/cg"
import {FaTimes } from "react-icons/fa";
import { useState } from 'react';

export default function Header(){
    const [nav, setNav] = useState(false);
    const handleClick = () => {
        const navbar = document.querySelector(".navbar")
        const listItems = document.querySelectorAll(".list-item")
        navbar.classList.toggle("active")

        listItems.forEach((item) =>
        item.addEventListener("click", () => navbar.
        classList.remove("active"))
        )
    }
    return (
        <>
        <header className='header justify-between w-full flex items-center lg:flex-row'>
            <div>
                <Link className='flex' to='/'>
                    <img src={Logo} className='logo-img' alt="Space Tourism" title='Space Tourism' />
                    <h3 className='logo-title hidden lg:block'>sputnik.</h3>
                </Link>
            </div>
            <nav className='navbar'>
                <ul>
                    <li className='list-item'>
                        <Link onClick={() => setNav(!nav)} to='/' className='lg:flex lg:items-center lg:text-white font-bold'><span className='lg:text-2xl lg:font-bold mr-2'>00</span> Home</Link>
                    </li>
                    <li className='list-item'>
                        <Link onClick={() => setNav(!nav)} to='/destination' className='lg:flex lg:items-center lg:text-white font-bold'><span className='lg:text-2xl lg:font-bold mr-2'>01</span> Destination</Link>
                    </li>
                    <li className='list-item'>
                        <Link onClick={() => setNav(!nav)} to='/crew' className='lg:flex lg:items-center lg:text-white font-bold'><span className='lg:text-2xl lg:font-bold mr-2'>02</span> Crew</Link>
                    </li>
                    <li className='list-item'>
                        <Link onClick={() => setNav(!nav)} to='/technology' className='lg:flex lg:items-center lg:text-white font-bold'><span className='lg:text-2xl lg:font-bold mr-2'>03</span> Technology</Link>
                    </li>
                </ul>
            </nav>
            <div className='lg:hidden'>
                <button onClick={() =>{
                    setNav(!nav);
                    handleClick();
                }}>
                    {nav ? <FaTimes className='text-4xl text-white' /> : <CgMenuLeft className='text-4xl text-white' />}
                </button>
            </div>
        </header>
        </>
    )
}