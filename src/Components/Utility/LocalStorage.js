
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

let getStoredCart = () => {
    let storedCartStr = localStorage.getItem('cart');
    if (storedCartStr) {
        let storedList = JSON.parse(storedCartStr);
        return storedList;
    }
    else {
        return [];
    }
}

let addToStoredCart = (id) => {
    let storedcart = getStoredCart();
    if (storedcart.includes(id)) {
        console.log('already exists');
    }
    else {
        storedcart.push(id);
        let storedCartStr = JSON.stringify(storedcart);
        localStorage.setItem('cart', storedCartStr);
    }
}



// let handleCartRemove = (id) => {
//     let storedcart = getStoredCart();
//     let remaining = storedcart.filter((product => product.id !== id))
//     localStorage.setItem('cart', remaining);
// }





export { addToStoredCart, getStoredCart, }
