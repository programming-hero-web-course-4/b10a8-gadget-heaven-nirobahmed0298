import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getStoredCart } from '../Utility/LocalStorage';
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiAnalyse } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Dashboard = () => {
    let [isActive, setisActive] = useState({ cart: true, status: 'cart' });
    let handleToggolebtn = (status) => {
        if (status === 'cart') {
            setisActive({ cart: true, status: 'cart' })
        }
        else {
            setisActive({ cart: false, status: 'wishlist' })
        }
    }
    let [carts, setCarts] = useState([]);
    let allProducts = useLoaderData();
    useEffect(() => {
        const storedcart = getStoredCart();
        const storedCartInt = storedcart.map(id => parseInt(id));
        const addCart = allProducts.filter(product => storedCartInt.includes(product.product_id));
        setCarts(addCart);
    }, []);
    function handleBuy(){
        toast.success('Purchase SuccessFully!')
    }
    let [sorted, setsorted] = useState([]);
    let handleSortByPrice = (carts) => {

    }
    return (
        <>
            <ToastContainer position='top-center'></ToastContainer>
            <section className='bg-[#9538E2] text-white text-center py-10'>
                <div className='w-10/12 mx-auto space-y-3'>
                    <h1 className='text-2xl font-bold'>Dashboard</h1>
                    <p className='text-sm'>Explore the latest gadgets that will take your experience to the next level. <br /> From smart devices to the coolest accessories, we have it all!</p>
                    <button onClick={() => handleToggolebtn('cart')} className={`${isActive.cart ? 'btn rounded-full px-12 bg-white mr-4' : ' btn rounded-full px-12 text-white bg-[#9538E2]'}`}>Cart</button>
                    <button onClick={() => handleToggolebtn('wishlist')} className={`${isActive.cart ? ' btn rounded-full px-12 text-white bg-[#9538E2]' : 'btn rounded-full px-12 bg-white ml-4'}`}>Wishlist</button>
                </div>
            </section>
            {
                isActive.cart ?
                    <section>
                        <div className='w-10/12 mx-auto my-6'>
                            <div className='md:flex items-center justify-between'>
                                <h1 className='font-bold'>Cart</h1>
                                <div className='md:flex items-center gap-32'>
                                    <p className='font-semibold'>Total Cost:</p>
                                    <div>
                                        <button onClick={() => handleSortByPrice(carts)} className='btn btn-outline border-[#9538E2] px-10 rounded-full'>Sort by Price<BiAnalyse className='text-[#9538E2] text-xl'></BiAnalyse></button>
                                        <button  onClick={() =>{handleBuy();document.getElementById('my_modal_1').showModal()}} className='btn btn-outline bg-[#9538E2] text-white ml-3 rounded-full'>Purchase</button>
                                    </div>
                                    {/* Modal */}
                                    <dialog id="my_modal_1" className="modal w-[450px] mx-auto">
                                        <div className="modal-box text-center">
                                            <img className='ml-auto mr-auto' src="https://img.icons8.com/?size=100&id=cL95UuXTO0nU&format=png&color=000000" alt="" />
                                            <h3 className="font-bold text-lg border-b-2 pb-2">Payment Successfully</h3>
                                            <p className="py-4">Thanks for purchasing.</p>
                                            <p>Total:2449.96</p>
                                            <div className="modal-action text-left">
                                                <form method="dialog">
                                                    <Link to='/' className="btn px-16 rounded-full w-full">Close</Link>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>

                                </div>
                            </div>
                            <div>
                                <div className='my-5'>
                                    {carts.map((cart, index) =>
                                        <div key={index} className='relative border-2 mt-4 p-4 rounded-xl md:flex items-center gap-10'>
                                            <img className='w-52 h-40' src={cart.product_image} alt="" />
                                            <div className='w-full space-y-2'>
                                                <h1 className='text-2xl font-bold'>{cart.product_title}</h1>
                                                <p className='text-sm'>{cart.description}</p>
                                                <p className='font-semibold'>Price:${cart.price}</p>
                                            </div>
                                            <button className='border border-red-500 p-2 rounded-full absolute top-6 right-6'><RiDeleteBin5Line className='text-red-600 text-xl'></RiDeleteBin5Line></button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                    :
                    <section>
                        <div className='w-11/12 mx-auto my-6'>
                            <div className='md:flex items-center justify-between'>
                                <h1 className='font-bold'>WishList</h1>
                                <div>

                                </div>
                            </div>
                        </div>
                    </section>
            }



        </>

    );
};

export default Dashboard;
