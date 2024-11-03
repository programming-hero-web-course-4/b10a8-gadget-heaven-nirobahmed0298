import React, { useEffect, useState } from 'react';
const Products = () => {
    let [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('/')
    },[])
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-3xl font-bold text-center'>Explore Cutting-Edge Gadgets</h1>
            <div className='flex gap-6'>
                <div className='w-1/3 bg-white'>
                    
                </div>
                <div className='w-2/3'>
                
                </div>
            </div>
        </div>
    );
};

export default Products;