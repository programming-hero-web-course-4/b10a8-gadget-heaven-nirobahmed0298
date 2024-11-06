import { useLoaderData, useParams } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { GiShoppingCart } from 'react-icons/gi';
import { addToStoredCart } from '../Utility/LocalStorage';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductDetails = () => {
    let { product_id } = useParams();
    let id = parseInt(product_id);
    let data = useLoaderData();
    let product = data.find(product => product.product_id === id);
    let { product_title, product_image, price, description, specification, availability, rating, storage } = product;
    let [cost, setCost] = useState(0);
    let handleAddtoCart = (id, price) => {
        addToStoredCart(id);
        toast.success('Successfully Cart Added!');
    }
    return (
        <div>
            <ToastContainer position='top-center'></ToastContainer>
            <div className='text-center space-y-3 pb-32 relative mb-96 bg-[#9538E2] text-white'>
                <h1 className='font-semibold text-2xl'>Product Details</h1>
                <p className='text-sm'>Explore the latest gadgets that will take your experience to the next level. <br />From smart devices to the coolest accessories, we have it all!</p>
                <div className='md:w-[650px] text-black absolute top-[320px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full'>
                    <div className='md:flex items-center gap-2 bg-white rounded-xl'>
                        <div className='w-72 h-full flex-1 '>
                            <img className='w-full h-full' src={product_image} alt="" />
                        </div>
                        <div className='text-left space-y-2 md:flex-1 p-2 py-4'>
                            <h1 className='text-lg md:text-xl font-semibold'>{product_title}</h1>
                            <p className='font-[600] text-sm'>Price:${price}</p>
                            {
                                availability ? <button className='border border-green-400 px-3 py-1 text-sm rounded-full'>In Stock</button> : <button className='border border-red-500 px-3 py-1 text-sm rounded-full'>No Stock</button>
                            }
                            <p className='text-sm opacity-60'>{description}</p>
                            <p>Specification:
                                {
                                    specification.map((specific, index) => <li className='text-sm' key={index}>{specific}</li>)
                                }
                            </p>
                            <p>Rating:</p>
                            <div className='flex gap-16 items-center'>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <h1 className='px-2 py-1 rounded-full bg-slate-300'>{rating}</h1>
                            </div>
                            <div className='flex items-center'>
                                <button onClick={() => handleAddtoCart(product_id, price)} className='btn bg-[#9538E2] rounded-full px-6 text-white font-[500]'>Add to Card<GiShoppingCart></GiShoppingCart></button>
                                <button className=' rounded-full border p-3 text-black bg-white ml-4'><FaRegHeart></FaRegHeart></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProductDetails;