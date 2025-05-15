

### Main Idea of JavaScript
1. Save the data
2. Generate the HTML
3. Make it interactive


To change the HTML inside the element use **.innerHTML**


11:56 or 11:34

#### Data Attribute
This is just another HTML attribute

It also allows us to attach any information to an element

#### Syntax for a Data Attribute
* It is just an HTML attribute 
* The Data attribut have to start with "data-"
* You can then give it any name 


**12:23:28**

#### Create a Module
1. Create a file 
2. Don't load the file with a <script></script> by doing this any variables we create inside the file will be contained inside the file and it won't cause naming conflict

#### How to get a varaible out of a file
1. Add type="module" attribute (it let the file get variable out of other files)
2. Export e.g export const cart = [];
3. Import e.g import {cart} from '../data/cart.js';

* Put all imports at the top of the file.
* We need to use Live Server in other for modules to work

#### Benefits of Modules
1. It helps us to avoid naming conflicts
2. We don't have to worry about the order of our files
3. It's a better way to organize our code

**13:34:55**

#### Steps for Creating a function for removing a product from the cart 

1. Create a new array
2. Loop through the cart
3. Add each product to the new array, except for this productId

#### When we click delete we want to remove the product from the page

1. Use the DOM to get the element to remove
2. Use **.remove()** method


* LocalStorage can only save string. **JSON.stringify(cart)** this will convert the cart into a string

* **JSON.parse(localStorage.getItem('cart'));** this is to convert the string 'cart' to an array

#### External Libraries 
It is basically code that is outside of our project and we can load the code using the below script tag

<script src="https://unpkg.com/supersimpledev@1.0.1/hello.js"></script> **You can learn how to put code on the 
internet (SuperSimpleDev)**

How to Put a Website on the Internet: https://youtu.be/p1QU3kLFPdg

#### Why we use External Libraries
1. It let us share code
2. It saves time
3. It avoids duplicating work

#### To get the dates in the delivery option
1. Get today's date
2. Do calculations with the date (add 7 days, or add 3 days)
3. We need to display the date in easy to read format.

We will use an external library called **DayJS** it is a popular library that helps us work with date. First we will load **DayJS** into our project

**Minification** is an act of compressing a code for easy loading online and for easy accessing 

External libraries usually have a documenetation page that shows us how to use the library. We can find the documentation page by searching on Google the library name e.g. **dayjs documentation** or ask AI how to use DayJS


The **.add()** method takes two parameters: the first one is number of times we want to add; the second is the length of time that we want to add 

If we want to add seven days to the present date **today.add(7, 'days');**

#### Best Practice in Programing

When we need to do something complicated, try to find an external library first before writing the code ourselves.

#### How to find External Libraries
We can search on Google or AI tool like this: **javascript date library**

#### How to use External Library + JavaScript Module
We are going to use a special version of the library called **ESM Version** 

ESM = EcmaScript Module. (EcmaScript is just another name for JavaScript) The ESM version of a library is just a version that works with JavaScript modules 

Hello (ESM version): https://unpkg.com/supersimpledev@1.0.1/hello.esm.js
 **import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';** 

 DayJS (ESM version): https://unpkg.com/dayjs@1.11.10/esm/index.js 

Not every library has ESM function

#### Default Export

This is another way of exporting something from a file, we can use when we only want to export one thing from a file e.g **export default formatCurrency;**

**import formatCurrency from './utils/money.js';** 


#### Named Export 

export function formatCurrency(priceCents) {
   return (priceCents / 100).toFixed(2);
}

**import {formatCurrency} from './utils/money.js';**


If you get an error in and your project code looks correct, you might have some bad data saved in your localStorage. To fix it just type **localStorage.clear()** in your console to remove everthing from localStorage and then refresh the page 


#### Creating a function to generate the delivery option HTML

* function deliveryOptionsHTML() {
*    deliveryOptions.forEach((deliveryOptions) => {
*        `
*            <div class="delivery-option">
*                <input type="radio"
*                class="delivery-option-input"
*                name="delivery-option-${matchingProduct.id}">
*                <div>
*                <div class="delivery-option-date">
*                    Wednesday, June 15
*                </div>
*                <div class="delivery-option-price">
*                    $4.99 - Shipping
*                </div>
*                </div>
*            </div>
*            <div class="delivery-option">
*                <input type="radio"
*                class="delivery-option-input"
*                name="delivery-option-${matchingProduct.id}">
*                <div>
*                <div class="delivery-option-date">
*                    Monday, June 13
*                </div>
*                <div class="delivery-option-price">
*                    $9.99 - Shipping
*                </div>
*                </div>
*            </div>
*        `
*    });
* }

**14:30:00**


${isChecked ? 'Checked' : ''}  // Using Tenary operator here //

Recursion is when a function re-run itself



const priceString = deliveryOption.priceCents === 0
*            ? 'FREE'
*            : `$${deliveryOption.priceCents}`
How Tenary operator works: If the first part returns true the value is whatever is after the ?. If it is false the value is whatever is after the :. It is just like an if statement except that we can save the result in a variable


#### How to put a code inside a function
* let matchingProduct;
* 
*        products.forEach((product) => {
*            if (product.id === productId) {
*                matchingProduct = product;
*            }
*        });
*        

* function getProduct(productId) {
*  let matchingProduct;
* 
*        products.forEach((product) => {
*            if (product.id === productId) {
*                matchingProduct = product;
*            }
*        });
* 
*        return matchingProduct();
* }


##### MVC Model View Controller
MVC is a design pattern, it's a way to organize and design our code. In MVC we split our code into 3 parts:
1. Model: All the codes that saves and manages the data
2. View: This is the code that takes the data and displays it on the page
3. Controller: This run some code when we interact with the page e.g eventlistener

#### Working on paymentSummary.js

1. Save the data (Model)
2. Generate the HTML
3. Make it interactive

### Save the data (Model)  in the paymentSummary.js
#### Calculating the items
Let's start by calculating the cost of the products: Steps
1. Loop through the cart 
2. For each product, price * quantity
3. Add everything together

* export function renderPaymentSummary() {
*    let productPriceCents = 0;
* 
*    cart.forEach((cartItem) => {
*        const product = getProduct(cartItem.productId);
*        productPriceCents += product.priceCents * cartItem.quantity;
*    })
* }

#### Calculating the Cost of Shipping Steps:
1. Loop through the cart 
2. Add all the shipping costs together 

##### Creating a function with the below code:
*     let deliveryOption;
* 
*        deliveryOptions.forEach((option) => {
*            if(option.id === deliveryOptionId) {
*                deliveryOption = option;
*            }
*        });
*        


* export function getDeliveryOption(deliveryOptionId) {
*    let deliveryOption;
* 
*    deliveryOptions.forEach((option) => {
*        if(option.id === deliveryOptionId) {
*            deliveryOption = option;
*        }
*    });
* 
*    return deliveryOption || deliveryOptions[0];
* }


* function renderPaymentSummary() {
*    let productPriceCents = 0;
*    let shippingPriceCents = 0;
* 
*    cart.forEach((cartItem) => {
*        const product = getProduct(cartItem.productId);
*        productPriceCents += product.priceCents * cartItem.quantity;
* 
*        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
*        shippingPriceCents += deliveryOption.priceCents;
*    });
*     const totalBeforeTaxCents = productPriceCents + shippingPriceCents; // Calculating Total before Tax
*     const taxCents = totalBeforeTaxCents * 0.1;  // calculating estimated tax of 10% (10/100 = 0.1)
*     const totalCents = totalBeforeTaxCents + taxCents; // 
*     
* **To Generate the HTML (View)**
*  
* const paymentSummaryHTML = 
*  `
*        <div class="payment-summary-title">
*                Order Summary
*        </div>
* 
*            <div class="payment-summary-row">
*                <div>Items (3):</div>
*                <div class="payment-summary-money">$${formatCurrency(productPriceCents)}/div>
*            </div>
* 
*            <div class="payment-summary-row">
*                <div>Shipping &amp; handling:</div>
*                <div class="payment-summary-money">$${formatCurrency(shippingPriceCents)}</div>
*            </div>
* 
*            <div class="payment-summary-row subtotal-row">
*                <div>Total before tax:</div>
*                <div class="payment-summary-money">$${formatCurrency(totalBeforeTaxCents)}</div>
*            </div>
* 
*            <div class="payment-summary-row">
*                <div>Estimated tax (10%):</div>
*                <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
*            </div>
* 
*            <div class="payment-summary-row total-row">
*                <div>Order total:</div>
*                <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
*            </div>
* 
*            <button class="place-order-button button-primary">
*                Place your order
*            </button>
*   `;
*   
* **// To put the HTML on the page**
*   document.querySelector('.js-payment-summary')
*     
* **To change the HTML inside the element using .innerHTML**
*  .innerHTML = paymentSummaryHTML;
* }


### Make it Interactive(Controller) in the orderSummary.js

Firstly we will import from the paymentSummary.js

* import { renderPaymentSummary } from './paymentSummary.js';

We will then use the function in the eventListener putting it under the **container.remove()**

*  renderOrderSummary();



**15:33:50** 

Always JSON.stringify() before saving to localStorage.

### Lesson 16 Testing **15:34:37**

Easiest way to test a code is just to open the website and try out the code. 

#### Manual Testing: 
When you manually open the website and try our code

##### Disadvantages of Manual Testing 
1. Hart to test every situation
2. It is hard to re-test the code.

#### Automated Testing 
This means using code to test code.

Create a folder to group all of our test code together. Create a file **moneyTest.js** we will then create an HTML file to run our test **test.html**

##### Code inside **moneyTest.js** 
* import {formatCurrency} from '../scripts/utils/money.js';
*   
* if (formatCurrency(2095) === '20.95') {
*    console.log('passed');
* } else {
*    consloe.log('failed');s
* }

Remember we can't run javascript file directly we need to load this javascript file using an HTML file. We will then create an HTML file to run this test. Create a new file inside the test folder, and name it test.html.

##### Two Types of Test Cases
1. Basic test cases: test if the code is working or not (the first test case)
2. Edge cases: We test the case with values that are a little bit tricky (the last three test cases)

* When naming test it is best we group related tests together. A group of related tests is called **test suite**