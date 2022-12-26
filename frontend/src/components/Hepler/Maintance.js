import React from "react";

function Maintance() {
    return (
        <div className="flex items-center justify-center h-full mt-52">
            <div className="flex flex-col items-center justify-center max-w-lg">
                <div className="mb-5">
                    <h1 className="text-5xl font-extrabold text-[#ffed61]">503</h1>
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-300 p-2">
                    This page is being built temporarily
                    We'll be back soon!
                </h3>
                <p className="text-xs md:text-lg text-center text-gray-300 p-2">
                    Sorry for the inconvenience but we're performing some maintenance at the moment.
                    If you need to you can always <a href="https://www.facebook.com/profile.php?id=100014373878417" className="text-blue-600 hover:underline">Contact us </a>, otherwise
                    we'll be back online shortly!
                    — The Team
                </p>
            </div>
        </div>
    )
}

export default Maintance;