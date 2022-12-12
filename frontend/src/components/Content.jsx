import { useEffect, useRef, React } from "react";
import Typed from "typed.js";

const Content = () => {
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Handy", "Mandy", "Candy", "More.."], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#ffed61] font-bold p-2'>
                    GROWING WITH DATA ANALYTICS
                </p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                    Grow with data.
                </h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                        Fast, flexible financing for
                    </p>
                    <div className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'>
                        {/* Element to display typing strings */}
                        <span ref={el}></span>
                    </div>
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
                <button className='bg-[#ffed61] w-[200px] hover:bg-white rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
            </div>
        </div>
    );
};

export default Content;