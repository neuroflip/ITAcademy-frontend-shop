# Sprint 2 IT Academy | Shop

## Introduction

![alt basic screenshot from the project](https://github.com/neuroflip/ITAcademy-frontend-shop/blob/main/etc/screenshot.png)

<br>

This repo contains the solution for the IT Academy Sprint 2.2 Frontend Shop

## Install and run

1. Clone this repo
```bash
$ git clone https://github.com/neuroflip/ITAcademy-frontend-shop.git
```
2. Install the dependencies
```bash
$ npm install
```
3. Build the project
```bash
$ npm run build
```
4. Run the project in production mode:
```bash
$ npm run preview
```

Or run the project in developement mode:
```bash
$ npm run dev
```

<br>

## Project structure

The project is structured as follows:

<pre>
  -/css/                      All the bootstrap css code
  -/data/                     The mocked products data file used to manage the cart
  -/etc/                      screenshot for the README file
  -/images/                   product image files used in articles at index.html
  -/js/            
    -/CartListManager/        Cart list manager that allows to manage the cart items for the user.
      - /providers/           Providers of the cart list manager to get and set data
    -/CartManager/            Cart manager with functionality to add, remove or print the cart
    -/CheckoutFormValidator/  Form validation code
    - checkout.js             UI management fot the checkout form interaction
    - modal.js                functionality to open the modal cart  capturing the bootstrap click event
    - shop.js                 UI management for the shop interaction (add products to the cart list)
</pre>


## Considerations

- ***Object oriented*** code (CartListManager, CartManager and CheckoutFormValidator)
- the cart is managed using the ***js/CartManager/CartManager.js*** offering the main logic to add, remove or print the cart. It uses ***CartManager/cartUtilities.js*** that implements some functions as utilities for the CartManager. It manages the dom manipulation operations mainly.
- the cart list is managed by ***CartListManager/CartListManager.js***. It uses a data provider to manage the cart list items. The providers are implemented at ***CartListManager/providers/*** There are 2 implemented CartList data providers: ***CartListManager/providers/CartListMemoryProvider.js*** (that stores the cart data using an array in memory so it does not do persistance) and ***CartListManager/providers/CartListLocalStorageProvider.js*** (that stores the cart list in localstorage providing persistance between page loads and different pages). The dependency injection is done at CartManager constructor. This dependency injection decouples dependencies between the CartListManager and the data provider resulting in a more modular and clean code. This provides reusability, easy testing and maintenability.
- The ***CheckoutFormValidator/CheckoutFormValidator.js*** implements the Form validation using the individual validators in validators.js
- This way shop.js, modal.js and shop.js are just preparing the ui interaction and not managing the main logic of the site providing a clean arquitecture.



