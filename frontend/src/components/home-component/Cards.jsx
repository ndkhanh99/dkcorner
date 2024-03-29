import React from 'react';
import Single from '../../assets/avatar.png';
import Double from '../../assets/double.png';
import Triple from '../../assets/triple.png';
import Python from '../../assets/python1.png';
import Laravel from '../../assets/la-ravel.png';
import Reactjs from '../../assets/images.png';

const Cards = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-25 mx-auto mt-[-3rem] bg-white' src={Python} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$139</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='bg-[#ffed61] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-25 mx-auto mt-[-2rem] bg-transparent rounded-lg' src={Laravel} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$139</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='bg-black text-[#ffed61] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-25 mx-auto mt-[-12px] bg-white' src={Reactjs} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8 mt-[25px]'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$139</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='bg-[#ffed61] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;