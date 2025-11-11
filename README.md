

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


##### Testing Framework
This is an external library that helps us write tests easier. There is a popular testing framework called **Jasmine**. Most testing frameworks are similar. Other testing frameworks are: Jest (for ReactJS), MochaJS. 

**Jasmine** has a documentation page that shows you how to use the testing framework. 

##### How to run a test using Jasmine.
1. Open the test-jasmine folder
2. Open the **SpecRunner.html** file. In Jasmine spec is another name for test (This file runs all the test)

##### Best Practice in Testing
1. Test each condition of an if-statement, this is known as **Test Coverage:** It means how much of the code is being tested.
2. Try to maximize test coverage.

##### Testting a different function using Jasmine
* Open the data/cart.js file. Inside the file we have a function called **add to cart** we will create a test for the add to cart function. Since the function is in a different file we are going to create a new test file.
* Inside **test-jasmine** folder we will create another file and name it **cartTest.js** you will then type in the below code:
* import { addToCart, cart } from "../data/cart";
* describe('test suite: addToCart', () => {
*  it('adds an existing product to the cart', () => {
*   
*  }); 
*  
*  it('adds a new product tothe cart', () => {
*    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6'); // to check if this code is working correctly we will check what the cart looks like. first we need to import the cart
*     // let's check if the card.length is correct. To compare values we are going to use the function.
*     expect(cart.length).toEqual(1); 
* }); 
* 
* });

* Unlike the format currency functionadd to cart doesn't return avalue so we can't really compare it to another valueusing expect instead we are going to call add to cart to modify the cart and then check if this cart looks correct. To do that we will call the function **addToCart()** and it takes one string which is the **productId** Now to find the the product Id we can test with , we will then open the **productId** file, we will then take the first product Id (e43638ce-6aa0-4b85-b27f-e1d07eb678c6) and use it in our test

* We are going to use a feature of Jasmine called **Mocks**, it helps us replace a method with a fake version and then we can make the fake version do anything we want. We are going to use another function of Jasmine called **spyON(localStorage, 'getItem');** The first parameter is the object we want to mock the second parameter is the method we want to mock

* 16:36:31 (Unfinished business with Testing Framework)


### Object-Oriented Programming (OOP)

This is another style of programming. OOP is basically organizing our code into objects. The style of programming that we have been using throughout this course is called **Procedural Programming:** This is a set of step by step instructions, it is basically a function. **Procedural Programming** organizes our code into separate functions like 

#### Why do we use OOP?
OOP tries to represent the real world. function inside an object is called a method

loadFromStorage: function() // can also be written as ***loadFromStorage() ***

If we change the name of the Object (cart) the code will no longer work to solve this problem JS has a feature called **this** it gives a object that contains the function. To improve our code we change from using a variable name cart to this

The basic idea behind OOP, we organize our code into objects so we group the data and the functions together into an object 

#### Why do we use OOP?
OOP tries to represent the real world, in the real world a cart is a physical object so in OOPwe represent this physical object as a digital object or in this case a JS object. A physical cart can have products inside so our JS object can also have products inside. A physical cart also has actions we can take to modify the cart, like we add a product or remove a product, our JS object also has actions we can take to modify the cart like the addToCart function or the remove from cart function 

Another reason we use OOP is because it is easy to create multiple objects. How do we create two separate carts in our code? with OOP this is easy. We will just make a copy of the cart object and paste it undeneath, we then rename it for instance businessCart.


To make our code cleaner we use a function for creating multiple objects

OOP has a feature called a **Class** this is specifically designed for generating objects. **Classes** are cleaner and has more features than using a function 

Let's creat a new file cart-class.js 

Use PascalCase for things that generate objects. nside the class we are going to put the properties and methods that we want for each object that we generate 

##### Benefits of Classes 
1. Cleaner than using a function
2. They have extra features for OOP, the first feature is called a **Constructor** which let's us run some setup codeafter creating an object. More details about **constructor**
   * The method has to be named Constructor
   * We should not return anything from a constructor

###### Private properties of methods 

Classes let us make a property or a method private, which means it can only be accessed inside the class. Class property without a hash (#) in front is called a public property meaning it can be accessed anywhere.

Converting an object into a class. Instead of using regular objects in this array we are giong to use a class to generate these objects

#### Inheritance
This let's us reuse code between classes. It allows one class to get all the properties and methods from another class so we don't have to copy and paste the code.

We use inheritance when we have one class which is a more specific type of another class.

Polymorphism is an act of using a method without knowing the class