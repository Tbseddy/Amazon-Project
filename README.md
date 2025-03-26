

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

**13:34:55**