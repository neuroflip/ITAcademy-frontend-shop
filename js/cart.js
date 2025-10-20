import products from "../data/products.js";

let cartList = [];

const addToCard = (id) => {
    const productIsEqual = (product, id) => product.id === id;
    let product = cartList.find((product) => productIsEqual(product, Number(id)));

    if (product) {
        product.quantity++;
    } else {
        product = products.find((product) => productIsEqual(product, Number(id)));
        const productToAdd = { ...product };

        productToAdd.quantity = 1;
        cartList.push(productToAdd);
    }
}

const calculateTotal = () => cartList.reduce((total, product) => total + product.subtotalWithDiscount, 0);

const getDiscountPrice = (price, discount) => price - (price * discount);
const applyPromotionsCart = () =>  {   
    cartList.forEach((product) => {
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

const createCartTableElements = () => {
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdSubtotalPrice = document.createElement('td');
    const tdOperation = document.createElement('td');

    return [tr, th, tdPrice, tdQuantity, tdSubtotalPrice, tdOperation];
}
const createOperationColumn = (tdOperation, product) => {
    const addButton = document.createElement('button');
    addButton.textContent = '+';
    addButton.addEventListener('click', () => {
        addToCard(product.id);
        printCart();
    });

    const removeButton = document.createElement('button');
    removeButton.textContent = '-';
    removeButton.addEventListener('click', () => {
        removeFromCart(product.id);
        printCart();
    });

    tdOperation.appendChild(addButton);
    tdOperation.appendChild(removeButton);
}
const appendCartChildElements = (tr, th, tdPrice, tdQuantity, tdSubtotalPrice, tdOperation) => {
    tr.appendChild(th);
    tr.appendChild(tdPrice);
    tr.appendChild(tdQuantity);
    tr.appendChild(tdSubtotalPrice);
    tr.appendChild(tdOperation);
}
const roundTwoDecimals = (num) => Math.round(num * 100) / 100;
const printCart = () => {
    const tbodyElement = document.getElementById('cart_list');
    
    tbodyElement.innerHTML = '';
    applyPromotionsCart();

    cartList.forEach((product) => {
        const [tr, th, tdPrice, tdQuantity, tdSubtotalPrice, tdOperation] = createCartTableElements();

        th.setAttribute('scope', 'row');
        th.textContent = product.name;
        tdPrice.textContent = `$${product.price}`;
        tdQuantity.textContent = product.quantity;
        tdSubtotalPrice.textContent = `$${roundTwoDecimals(product.subtotalWithDiscount)}`;
        createOperationColumn(tdOperation, product);

        appendCartChildElements(tr, th, tdPrice, tdQuantity, tdSubtotalPrice, tdOperation);
        tbodyElement.appendChild(tr);
    });

    const totalElement = document.getElementById('total_price');
    const total = roundTwoDecimals(calculateTotal());
    totalElement.textContent = total;
}

const cleanCart = () =>  {
    cartList = [];

    printCart();
}

const removeFromCart = (id) => {
    const position = cartList.map(element => element.id).indexOf(id);
    const product = cartList[position];

    if (product.quantity > 1) {
        product.quantity--;
    } else {
        delete cartList[postion];
    }

    applyPromotionsCart();
}

export { addToCard, cleanCart, printCart };