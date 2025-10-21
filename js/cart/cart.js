import products from "../../data/products.js";
import { getDiscountPrice } from "./cartUtilities.js";
import CartListProvider from "../CartList/CartListProvider.js";
import CartListLocalStorage from "../CartList/CartListLocalStorage.js";
import { createCartTableElements, createOperationColumnWithButtons, appendCartChildElements, roundTwoDecimals, calculateTotal } from "./cartUtilities.js";

const cartListProvider = new CartListProvider(new CartListLocalStorage());
const cartList = cartListProvider.getCartList();

const addToCard = (id) => {
    const productIsEqual = (product, id) => product.id === id;
    let product = cartList.find((product) => productIsEqual(product, Number(id)));

    if (product) {
        product.quantity++;
    } else {
        product = products.find((product) => productIsEqual(product, Number(id)));
        const productToAdd = { ...product };

        productToAdd.quantity = 1;
        cartList.push(productToAdd);
    }

    cartListProvider.setCartList(cartList);
}

const applyPromotionsCart = () =>  {   
    cartList.forEach((product) => {
        if (product.offer && product.offer.number && product.offer.percent) {
            if(product.quantity >= product.offer.number) {
                product.subtotalWithDiscount = product.quantity * getDiscountPrice(product.price, product.offer.percent / 100);
            } else {
                product.subtotalWithDiscount = product.price * product.quantity;    
            }
        } else {
            product.subtotalWithDiscount = product.price * product.quantity;
        }
    });
}

const printCart = () => {
    const modalTable = document.getElementById('modal-cart-table');
    const modalTotal = document.getElementById('modal-cart-total');
    const modalButtons = document.getElementById('modal-cart-buttons');
    const modalEmptyH1 = document.getElementById('modal-cart-empty');

    //Encapsular estos dos casos en funciones (en el utils?) y formatear bien el empty
    if (cartList.length === 0) {
        modalTable.classList.add('d-none');
        modalTotal.classList.add('d-none');
        modalButtons.classList.add('d-none');
        modalEmptyH1.classList.remove('d-none');
    } else {
        const tbodyElement = document.getElementById('cart-list');

        modalTable.classList.remove('d-none');
        modalTotal.classList.remove('d-none');
        modalButtons.classList.remove('d-none');
        modalEmptyH1.classList.add('d-none');

        applyPromotionsCart();
        tbodyElement.innerHTML = '';

        cartList.forEach((product) => {
            printProduct(product, tbodyElement);
        });

        const totalElement = document.getElementById('total_price');
        const total = roundTwoDecimals(calculateTotal(cartList));
        totalElement.textContent = total;
    }

}

const printProduct = (product, tbodyElement) => {
    const [tr, th, tdPrice, tdQuantity, tdSubtotalPrice, tdOperation] = createCartTableElements();

    th.setAttribute('scope', 'row');
    th.textContent = product.name;
    tdPrice.textContent = `$${product.price}`;
    tdQuantity.textContent = product.quantity;
    tdSubtotalPrice.textContent = `$${roundTwoDecimals(product.subtotalWithDiscount)}`;
    createOperationColumnWithButtons(tdOperation, 
        () => { 
            addToCard(product.id); 
            printCart(); 
        }, () => { 
            removeFromCart(product.id);
            printCart(); 
        });
    appendCartChildElements(tr, th, tdPrice, tdQuantity, tdSubtotalPrice, tdOperation);
    tbodyElement.appendChild(tr);
}

const cleanCart = () =>  {
    cartList = [];
    printCart();
    cartListProvider.setCartList(cartList);
}

const removeFromCart = (id) => {
    const position = cartList.map(element => element.id).indexOf(id);
    const product = cartList[position];

    if (product.quantity > 1) {
        product.quantity--;
    } else {
        cartList.splice(position, 1);
    }

    if (cartList.length === 0) {
        printCart();
    } else {
        applyPromotionsCart();
    }

    cartListProvider.setCartList(cartList);
}

export { addToCard, cleanCart, printCart };