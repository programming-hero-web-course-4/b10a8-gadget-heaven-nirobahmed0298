import React from 'react';
import banner from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <div>
            <div className='px-5 pb-5'>
                <div className='text-center space-y-5 pb-60 relative mb-96 bg-[#9538E2] text-white rounded-b-xl py-10'>
                    <h1 className='text-2xl md:text-4xl font-bold'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                    <p className='text-sm'>Explore the latest gadgets that will take your experience to the next level. <br />From smart devices to the coolest accessories, we have it all!</p>
                    <button className='btn rounded-full px-10 text-[#9538E2]'>Shop Now</button>
                    <img className='w-[750px] absolute top-[550px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border p-4 rounded-xl' src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;