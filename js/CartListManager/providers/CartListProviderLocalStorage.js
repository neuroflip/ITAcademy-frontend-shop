
const STORAGE_KEY = 'ITAcademy/shopping-cart';

class CartListLocalStorage {
  getCartList() {
    const cartList = localStorage.getItem(STORAGE_KEY);

    return cartList ? JSON.parse(cartList) : [];
  }

  setCartList(cartList) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartList));
  }
}

export default CartListLocalStorage;