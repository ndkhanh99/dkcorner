import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
import AboutImg from '../../assets/about.jpeg';
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex flex-col items-center py-18 px-8'>
            <div className='text-white flex-col justify-center items-center mt-5'>
                <div className='text-center text-xl'><p>THIS IS ABOUT OUR COMPANY</p></div>
            </div>
            <div className='text-center w-1/2 text-white mt-5'>
                <div>
                    <p>
                        Founded in 12/2022, We offer you solutions for technology, software
                        as well as website systems and mobile applications with the most economical
                        cost
                    </p>
                </div>
            </div>
            <div className='mt-10 md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#ffed61]'>
                        About
                    </p>
                    <h2 className='py-4 text-white font-bold italic'>Who I Am</h2>
                    <p className='py-2 text-gray-300'>
                        I specialize in building mobile responsive front-end UI applications
                        that connect with API's and other backend technologies. I'm
                        passionate about learning new technologies and understand there is
                        more than one way to accomplish a task. Though I am most proficient
                        in building front-end applications using HTML, CSS, Javascript, and
                        React, I am a quick learner and can pick up new tech stacks as
                        needed. I believe that being a great developer is not using one
                        specific language, but choosing the best tool for the job.
                    </p>
                    <p className='py-2 text-gray-300'>
                        I started web developement in 2013 managing multiple e-commerce
                        websites on CMS platforms such as WordPress, BigCommerce, and
                        Shopify. I have experience working directly with clients and taking
                        mock wireframes all the way to deployed applications. In my spare
                        time I run Code Commerce, a Youtube channel where I teach web
                        developement and various front-end technologies.
                    </p>
                    <a href='https://github.com/ndkhanh99'>
                        <p className='py-2 text-gray-600 underline cursor-pointer'>
                            Check out some of my latest projects.
                        </p>
                    </a>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 py-5'>
                    <img src={AboutImg} className='rounded-xl' alt='/' />
                </div>
            </div>
        </div>
    );
};

export default About;