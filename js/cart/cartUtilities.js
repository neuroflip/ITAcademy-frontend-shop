
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

export { getDiscountPrice, createCartTableElements, createOperationButton, createOperationColumnWithButtons, 
  appendCartChildElements, roundTwoDecimals, calculateTotal };