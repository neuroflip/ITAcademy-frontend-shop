class CartListManager {
  constructor(provider) {
    this.provider = provider;
  }

  getCartList() {
    return this.provider.getCartList();
  }

  setCartList(cartList) {
    this.provider.setCartList(cartList);
  }
}

export default CartListManager;