class CartListProvider {
  constructor(provider) {
    this.provider = provider;
  }

  getCartList() {
    return this.provider.getCartList();
  }

  setCartList(cartList) {
    this.provider.setCardList(cartList);
  }
}

export default CartListProvider;