import { prepareModalToOpen } from './modal.js';
import { addToCard, cleanCart, printCart } from './cart.js';

const prepareProductAddToCartInteraction = () => {
    const buttons = document.querySelectorAll('button[data-product-id]');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const id = button.dataset.productId;
            addToCard(id);
        });
    });
}

const prepareCleanCartInteraction = () => {
    const button = document.getElementById('clean-cart');

    button && button.addEventListener('click', () => {
        cleanCart();
    });
}

const open_modal = () =>  {
    printCart();
}

prepareProductAddToCartInteraction();
prepareCleanCartInteraction();
prepareModalToOpen(open_modal);