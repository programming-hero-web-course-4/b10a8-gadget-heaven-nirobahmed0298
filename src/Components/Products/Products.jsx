import React, { useEffect, useState } from 'react';
import Product from './Product';
import { Link, useLoaderData, useParams } from 'react-router-dom';
const Products = () => {
    let { category } = useParams();
    let categories = useLoaderData();
    let [data, setData] = useState([]);
    useEffect(() => {
        fetch('../Products.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    let [products, setProducts] = useState([])
    useEffect(() => {
        if (category) {
            let categoryBtn = [...data].filter(product => product.category === category)
            setProducts(categoryBtn);
        }
        else {
            setProducts(data);
        }
    }, [category, data])
    return (
        <div className='w-10/12 mx-auto'>
            <h1 className='text-3xl font-bold text-center'>Explore Cutting-Edge Gadgets</h1>
            <div className='flex gap-6 my-8'>
                <div className='w-1/4 bg-white rounded-xl px-4'>
                    <div className='flex flex-col items-center my-6 space-y-4'>
                        {
                            categories.map((category, index) => <Link to={`/category/${category.category}`} key={index} className="btn w-full rounded-full font-[400]">{category.category}</Link>
                            )
                        }
                    </div>
                </div>
                <div className='w-4/4'>
                    <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            products.map((product, index) => <Product key={index} product={product}></Product>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;