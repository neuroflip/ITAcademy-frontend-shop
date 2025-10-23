import products from "../../data/products.js";
import { getDiscountPrice } from "./cartUtilities.js";
import CartListManager from "../CartListManager/CartListManager.js";
import CartListLocalStorage from "../CartListManager/providers/CartListProviderLocalStorage.js";
import { createCartTableElements, createOperationColumnWithButtons, appendCartChildElements, roundTwoDecimals,
  calculateTotal, showEmptyCart, showFullCart } from "./cartUtilities.js";

class CartManager {
    constructor() {
        this.cartListManager = new CartListManager(new CartListLocalStorage());
        this.cartList = this.cartListManager.getCartList();
        this.#updateItemsCounter();
    }

    addToCard(id) {
        const productIsEqual = (product, id) => product.id === id;
        let product = this.cartList.find((product) => productIsEqual(product, Number(id)));

        if (product) {
            product.quantity++;
        } else {
            product = products.find((product) => productIsEqual(product, Number(id)));
            const productToAdd = { ...product };

            productToAdd.quantity = 1;
            this.cartList.push(productToAdd);
        }

        this.cartListManager.setCartList(this.cartList);
        this.#updateItemsCounter();
    }

    #updateItemsCounter() {
        const counterElement = document.getElementById('count_product');
        const totalValue = this.cartList.reduce((total, item) => { return total + item.quantity}, 0);

        counterElement.textContent = totalValue;
    }

    printCart() {
        if (this.cartList.length === 0) {
          showEmptyCart();
        } else {
          const tbodyElement = document.getElementById('cart-list');
          const totalElement = document.getElementById('total_price');

          showFullCart();
          this.#applyPromotionsCart();
          tbodyElement.innerHTML = '';

          this.cartList.forEach((product) => {
              this.#printProduct(product, tbodyElement);
          });

          const total = roundTwoDecimals(calculateTotal(this.cartList));
          totalElement.textContent = total;
        }
    }

    cleanCart() {
        this.cartList = [];
        this.printCart();
        this.cartListManager.setCartList(this.cartList);
        this.#updateItemsCounter();
    }

    removeFromCart(id) {
        const position = this.cartList.map(element => element.id).indexOf(id);
        const product = this.cartList[position];

        if (product.quantity > 1) {
            product.quantity--;
        } else {
            this.cartList.splice(position, 1);
        }

        if (this.cartList.length === 0) {
            this.printCart();
        } else {
            this.#applyPromotionsCart();
        }

        this.cartListManager.setCartList(this.cartList);
        this.#updateItemsCounter();
    }

    #printProduct(product, tbodyElement) {
        const [tr, th, tdPrice, tdQuantity, tdSubtotalPrice, tdOperation] = createCartTableElements();

        th.setAttribute('scope', 'row');
        th.textContent = product.name;
        tdPrice.textContent = `$${product.price}`;
        tdQuantity.textContent = product.quantity;
        tdSubtotalPrice.textContent = `$${roundTwoDecimals(product.subtotalWithDiscount)}`;
        createOperationColumnWithButtons(tdOperation,
            () => {
                this.addToCard(product.id);
                this.printCart();
            }, () => {
                this.removeFromCart(product.id);
                this.printCart();
            });
        appendCartChildElements(tr, th, tdPrice, tdQuantity, tdSubtotalPrice, tdOperation);
        tbodyElement.appendChild(tr);
    }

    #applyPromotionsCart() {
        this.cartList.forEach((product) => {
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
}

export default CartManager;