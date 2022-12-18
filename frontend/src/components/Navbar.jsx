import { React, useState } from 'react';
import { FaKorvue } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useScrollPosition } from './Hepler/useScrollPosition';

const Navbar = () => {
    const scrollPosition = useScrollPosition();
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    var srollEvent = true;
    var NewClass = scrollPosition > 0 ? 'flex sticky top-0 justify-between items-center h-24 w-full mx-auto px-4 text-white shadow bg-white z-50' : 'flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white z-50';


    // var NewClass = photo.clicked == true ? 'btn btn-secondary btn-lg rounded-pill btn-outline-light' : 'btn btn-secondary btn-lg rounded-pill btn-outline-light pe-none';

    return (
        <div className={NewClass}>
            <h1 className={scrollPosition > 0 ? 'w-full text-3xl font-bold text-black' : 'w-full text-3xl font-bold text-[#ffed61]'}>Kcorner</h1>
            <ul className={scrollPosition > 0 ? 'hidden md:flex text-black' : 'hidden md:flex'}>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div onClick={handleNav} className={scrollPosition > 0 ? 'block md:hidden text-black' : 'block md:hidden'}>
                {nav ? <AiOutlineClose size={30} /> : <FaKorvue size={30} />}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <div className={'p-3'}>
                    <h1 className='w-auto text-3xl font-bold  text-[#ffed61] m-4'>Kcorner</h1>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Company</li>
                    <li className='p-4 border-b border-gray-600'>Resources</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4'>Contact</li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar