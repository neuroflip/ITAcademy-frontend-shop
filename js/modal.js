import CartManager from './CartManager/CartManager.js';

const MODAL_ID = 'cartModal';
const cart = new CartManager();

const open_modal = () =>  {
    cart.printCart();
}

const prepareModalToOpen = () => {
  const modalFragmentElement = document.getElementById(MODAL_ID);

  modalFragmentElement.addEventListener('show.bs.modal', function () {
    open_modal();
  });
};

export { prepareModalToOpen };