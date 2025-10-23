# Sprint 2 IT Academy | Shop

## Introduction

This repo contains the solution for the IT Academy Sprint 2.2 Frontend Shop:

![alt basic screenshot from the project](https://github.com/neuroflip/ITAcademy-frontend-shop/blob/main/etc/screenshot.png)

Take a look at the live demo at: [https://neuroflip.github.io/ITAcademy-frontend-shop/](https://neuroflip.github.io/ITAcademy-frontend-shop/)
<br>

## Install and run

1. Clone this repo:
```bash
$ git clone https://github.com/neuroflip/ITAcademy-frontend-shop.git
```
2. Install the dependencies:
```bash
$ npm install
```
3. Run in dev mode:
```bash
$ npm install
```

4. Or run it on production mode:
```bash
$ npm run build
$ npm run preview
```

5. Run the tests:
```bash
$ npm run test
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
    -/CartListManager/        Cart list data manager with persistence between page loads.
      - /providers/           Providers of the cart list manager to get and set the cart data. 
    -/CartManager/            Cart manager with functionality to add items, remove items, clean the cart or print it.
    -/CheckoutFormValidator/  Form validation code
    - checkout.js             UI management fot the checkout form interaction
    - modal.js                functionality to open the modal cart capturing the bootstrap click event
    - shop.js                 UI management for the shop interaction (add products to the cart list)
</pre>

<br>

## Considerations

- ***Object oriented*** code (CartListManager, CartManager and CheckoutFormValidator)
- the cart is managed using the ***js/CartManager/CartManager.js*** offering the main logic to add items, remove items, clean the cart or print it. It uses ***CartManager/cartUtilities.js*** that implements some functions as utilities for the CartManager.
- the cart list data persistency is managed by ***CartListManager/CartListManager.js***. It uses a data provider to get and set the cart list. The providers are implemented at ***CartListManager/providers/*** There are 2 implemented CartList data providers:
  - ***CartListManager/providers/CartListProviderMemory.js***: stores the cart data using an array in memory so it does not do persistance between loads
  - ***CartListManager/providers/CartListProviderLocalStorage.js***: stores the cart list in localstorage providing persistance between page loads and different pages.
- The CartListManager dependency injection for the provider is done at CartManager constructor. This dependency injection decouples dependencies between the CartListManager and the data provider resulting in a more modular and clean code. This provides reusability, easy testing and maintenability.
- The ***CheckoutFormValidator/CheckoutFormValidator.js*** implements the Form validation using the individual validators in validators.js
- This way shop.js, modal.js and shop.js are just preparing the ui interaction and not managing the main logic of the site providing a clean arquitecture.
- some use cases explained:
  - if the cart list is empty, it will be reflected when the user opens the cartlist. In that case, the checkout or clean cart will not be available.
  - the form validation is done individually at every input keystroke for the input changed. If the data entered is not valid, the submit button will be disabled
  - when the user clicks to submit the checkout form it will be cliend side validated. If there is any error on the form data it will be shown to the user and the button will be disabled until the user enters the correct data.
- smartphone compatible: added some bootstrap css rules to manage the flex layout of the products section to be compatible with small screens. Same for the checkout form.

## Testing
The tests are implemented using vitest. To be able to mock the localstorage usage i'm using a developement dependency with vitest-localstorage-mock.

Only tested the CartListManager and dependencies:
 - CartListManager itself
 - and providers: CartListProviderMemory and CartListProviderLocalStorage

## Issues from p2p review

After the p2p review I decided to apply some useful UX changes requested in the review:

 - applied call to action changes:
    - the checkout form is the first element on page. This removes the need for scroll to access the form
    - at the modal cart list:
      - the + and - buttons for quantities are now near the product quantity
      - there is a new offer badge when an offer is applied

![alt basic screenshot from the mopdal cartlist](https://github.com/neuroflip/ITAcademy-frontend-shop/blob/main/etc/cartList.png)

Thanks to the reviewer Ana! This were great tips on UX!!!