import React from 'react';
import bookImg from "../../assets/banner.png"

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-[70vh]  container mx-auto rounded-2xl my-8 p-10">
                <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
                    <img
                        src={bookImg}
                        alt='banner image'
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                      
                        <button className="btn mt-10 bg-[#23BE0A]">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;