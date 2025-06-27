# Data management with Objects, Sets and Maps
-----------------------------------------------
This program shows how to manage data with Objects, Sets and Maps.
It is an interactive practice aimed at learning basic data structures.


# Estructura del Proyecto
--------------------------
The project consists of the following files:

- index.html: Main HTML file that loads the JavaScript script.
- script.js: Contains all the JavaScript code with the data management logic.


# Code description
----------------------
The JavaScript code does the following::

- Create a `products` object that stores the products with their attributes (id, name and price).
- Use a Set to get a unique list of product names.
- Define a Map to relate products to categories.
- Displays data via console by looping through each structure.


# Technical Details
--------------------
Object `products`:

const products = {
1: { id: 1, name: "Quiche", price: 7500 },
3: { id: 3, name: "Tarte", price: 2500  },
2: { id: 2, name: "Eclair", price: 5000 },
};

Set `setProducts`:

const setProducts = new Set(Object.values(products).map(product => product.name));

Map `mapProducts`:

const mapProducts = new Map([
["cuisine","Quiche"],
["desserts","Tarte"],
["desserts","Eclair"],
]);

Loops: The script loops through each structure and displays results in the console.

# How to use the project
-------------------------
1. Open the index.html file in a browser.
2. Open the browser console (F12 or right click -> "Inspect" -> "Console").
3. You will see the output of the JavaScript script running automatically..

# Author
----------
Isabella Jiménez Lázaro
