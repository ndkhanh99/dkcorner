import { React, useState, useEffect } from 'react';
import { FaKorvue } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useScrollPosition } from '../Hepler/useScrollPosition';
import { Link } from "react-router-dom";

const Navbar = () => {

    // fetch menu items from db
    let [items, setItems] = useState([]);
    useEffect(() => { getMenuItems() }, []);

    async function getMenuItems() {
        const response = await fetch('http://127.0.0.1:8000/get-menuitems');
        // waits until the request completes...
        // console.log(response);
        const data = await response.json();
        setItems(data);

    }

    const scrollPosition = useScrollPosition();
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };


    // css binding classname // 
    var srollEvent = true;
    var NewClass = scrollPosition > 0 ? 'flex sticky top-0 justify-between items-center h-24 w-full mx-auto px-4 text-white shadow bg-white z-50' : 'flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white z-50';


    // var NewClass = photo.clicked == true ? 'btn btn-secondary btn-lg rounded-pill btn-outline-light' : 'btn btn-secondary btn-lg rounded-pill btn-outline-light pe-none';

    return (
        <div className={NewClass}>
            <div className='flex flex-row text-3xl'>
                <FaKorvue className={scrollPosition > 0 ? 'font-bold text-black mt-[5px]' : 'font-bold text-[#ffed61] mt-[5px]'} size={30} />
                <h1 className={scrollPosition > 0 ? 'w-full font-bold text-black' : 'w-full text-3xl font-bold text-[#ffed61]'}>corner</h1>
            </div>
            <ul className={scrollPosition > 0 ? 'hidden md:flex text-black' : 'hidden md:flex'}>
                {items.map((item, index) =>
                    <li className='p-4 hover:text-yellow-300' key={index}><Link to={item.path}>{item.name}</Link></li>
                )}
            </ul>
            <div onClick={handleNav} className={scrollPosition > 0 ? 'block md:hidden text-black' : 'block md:hidden'}>
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <div className={'p-3'}>
                    <h1 className='w-auto text-3xl font-bold  text-[#ffed61] m-4'>Kcorner</h1>
                    <li className='p-4 border-b border-gray-600'><Link to='/'>Home</Link></li>
                    <li className='p-4 border-b border-gray-600'><Link to='/company'>Company</Link></li>
                    <li className='p-4 border-b border-gray-600'><Link to='/product'>Product</Link></li>
                    <li className='p-4 border-b border-gray-600'><Link to='/about'>About</Link></li>
                    <li className='p-4'><Link>Contact</Link></li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar