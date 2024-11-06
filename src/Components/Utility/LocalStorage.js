
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

let getStoredCart = () => {
    let storedCartStr = localStorage.getItem('cart');
    if (storedCartStr) {
        let storedcart = JSON.parse(storedCartStr);
        return storedcart;
    }
    else {
        return [];
    }
}

let addToStoredCart = (id) => {
    let storedcart = getStoredCart();
    if (storedcart.includes(id)) {
        toast.error('Already Added!');
    }
    else {
        storedcart.push(id);
        let storedCartStr = JSON.stringify(storedcart);
        localStorage.setItem('cart', storedCartStr);
        toast.success('Successfully Added!');

    }
}

let handleCartRemove = (id) => {
    let storedcart = getStoredCart();
    let remaining = storedcart.find((product => product.product_id !== id))
    localStorage.removeItem('cart',JSON.stringify(remaining));
    toast.success('Successfully Removed!');
}

let getStoredwish = () => {
    let storedwishStr = localStorage.getItem('wish');
    if (storedwishStr) {
        let storedListwish = JSON.parse(storedwishStr);
        return storedListwish;
    }
    else {
        return [];
    }
}

let addToStoredwish = (id) => {
    let storedwish = getStoredwish();
    if (storedwish.includes(id)) {
        toast.error('Already Added');
    }
    else {
        storedwish.push(id);
        let storedwishStr = JSON.stringify(storedwish);
        localStorage.setItem('wish', storedwishStr);
        toast.success('Successfully Added!');
    }
}


export { addToStoredCart, getStoredCart, addToStoredwish, getStoredwish,handleCartRemove }
