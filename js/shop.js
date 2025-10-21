import { prepareModalToOpen } from './modal.js';
import CartManager from './CartManager/CartManager.js';
import CartListLocalStorage from './CartListManager/providers/CartListProviderLocalStorage.js';

const cart = new CartManager();

const prepareProductAddToCartInteraction = () => {
    const buttons = document.querySelectorAll('button[data-product-id]');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const id = button.dataset.productId;
            cart.addToCard(id);
        });
    });
}

const prepareCleanCartInteraction = () => {
    const button = document.getElementById('clean-cart');

    button.addEventListener('click', () => {
        cart.cleanCart();
    });
}

const open_modal = () =>  {
    cart.printCart();
}

prepareProductAddToCartInteraction();
prepareCleanCartInteraction();
prepareModalToOpen(open_modal);