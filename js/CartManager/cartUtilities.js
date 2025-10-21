
const getDiscountPrice = (price, discount) => price - (price * discount);
const createCartTableElements = () => {
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdSubtotalPrice = document.createElement('td');
    const tdOperation = document.createElement('td');

    return [tr, th, tdPrice, tdQuantity, tdSubtotalPrice, tdOperation];
}

const createOperationButton = (text) => {
    const button = document.createElement('button');

    button.textContent = text;
    button.classList.add('rounded-3');

    return button;
}

const createOperationColumnWithButtons = (tdOperation, addCallback, removeCallback) => {
    const addButton = createOperationButton('+');
    const removeButton = createOperationButton('-');

    addButton.addEventListener('click', addCallback);
    removeButton.addEventListener('click', removeCallback);

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
const calculateTotal = (cartList) => cartList.reduce((total, product) => total + product.subtotalWithDiscount, 0);


const showFullCart = () => {
    const modalTable = document.getElementById('modal-cart-table');
    const modalTotal = document.getElementById('modal-cart-total');
    const modalButtons = document.getElementById('modal-cart-buttons');
    const modalEmptyH1 = document.getElementById('modal-cart-empty');

    modalTable.classList.remove('d-none');
    modalTotal.classList.remove('d-none');
    modalButtons.classList.remove('d-none');
    modalEmptyH1.classList.add('d-none');
}

const showEmptyCart = () => {
    const modalTable = document.getElementById('modal-cart-table');
    const modalTotal = document.getElementById('modal-cart-total');
    const modalButtons = document.getElementById('modal-cart-buttons');
    const modalEmptyH1 = document.getElementById('modal-cart-empty');

    modalTable.classList.add('d-none');
    modalTotal.classList.add('d-none');
    modalButtons.classList.add('d-none');
    modalEmptyH1.classList.remove('d-none');
}

export { getDiscountPrice, createCartTableElements, createOperationButton, createOperationColumnWithButtons, 
  appendCartChildElements, roundTwoDecimals, calculateTotal, showEmptyCart, showFullCart };