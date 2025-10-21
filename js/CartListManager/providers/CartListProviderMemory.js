
class CartListMemory {
  constructor() {
    this.cartList = [];
  }

  getCartList() {
    return this.cartList;
  }

  setCardList(cartList) {
    this.cartList = cartList;
  }
}

export default CartListMemory;