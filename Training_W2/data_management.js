console.log("¡Data management with Objects, Sets and Maps!");
console.log("");


//Defining the object "products"
const products = {
    1:{id: 1, name:"Quiche", price: 7500},
    3:{id: 3, name:"Tarte", price: 2500},
    2:{id: 2, name:"Eclair", price: 5000},
};

console.log("Object products: ", products);
console.log("");



//Creating a Set with the products names
const setProducts = new Set (Object.values(products).map(product => product.name));
console.log("Unique products Set: ", setProducts);
console.log("");



//Creating a Map to add categories to the products
const mapProducts = new Map([
    ["cuisine","Quiche"],
    ["desserts","Tarte"],
    ["desserts","Eclair"],
]);

console.log("Products and categories Map", mapProducts);
console.log("");


//Touring the products object
console.log("Touring the products object:");

for (const id in products){
    console.log(`Product ID:  ${id}, Details:` , products[id]);
};
console.log("");


//Touring the products Set
console.log("Touring the Set products object:");

for (const product of setProducts){
    console.log("Unique product: ", product);
};
console.log("");



//Touring the products Map
console.log("Touring the Map products object:");

mapProducts.forEach((product, category) => {
    console.log(`Category: ${category}, Product: ${product}`);
});
console.log("");



//Output
console.log("Data management complete tests:");
console.log("Products list (Object):", products);
console.log("Unique products list (Set): ", setProducts);
console.log("Categories and products (Map): ", mapProducts);