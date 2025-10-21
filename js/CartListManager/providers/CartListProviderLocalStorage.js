
const SOTRAGE_KEY = 'ITAcademy/shopping-cart';

class CartListLocalStorage {
  getCartList() {
    const cartList = localStorage.getItem(SOTRAGE_KEY);

    return cartList ? JSON.parse(cartList) : [];
  }

  setCardList(cartList) {
    localStorage.setItem(SOTRAGE_KEY, JSON.stringify(cartList));
  }
}

export default CartListLocalStorage;