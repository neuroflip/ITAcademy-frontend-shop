
class CartListMemory {
  constructor() {
    this.cartList = [];
  }

  getCartList() {
    return this.cartList;
  }

  setCartList(cartList) {
    this.cartList = cartList;
  }
}

export default CartListMemory;