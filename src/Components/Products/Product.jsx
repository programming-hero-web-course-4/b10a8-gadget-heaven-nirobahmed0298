import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    let {product_id, product_title, product_image, price} = product;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl flex">
                <figure className="px-2 py-2">
                    <img 
                        src={product_image} alt={product_title}
                        className="rounded-xl h-52" />
                </figure>
                <div className="card-body text-left">
                    <h2 className="font-bold text-md">{product_title}</h2>
                    <p>Price:${price}</p>
                    <div className="card-actions">
                        <Link to={`products/${product_id}`} className="btn btn-outline rounded-full text-[#8333C6] border-[#8333C6]">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;