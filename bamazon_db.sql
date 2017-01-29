CREATE DATABASE Bamazon

USE Bamazon

CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
	item_id VARCHAR(50) NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INTEGER(10) NOT NULL,
    PRIMARY KEY(id)
);
    
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
values ("01234DJ", "Denim Jacket", "Men's Clothing", 59.99, 7), 
	   ("02234BL", "Blanket", "Bedding", 20, 5),
       ("03234TV", "TV", "Electronics", 300, 3),
       ("04234GR", "Gold Ring", "Jewelry", 1256.90, 6),
       ("05234CG", "Cocktail Glasses", "Home & Kitchen", 29.99, 10),
       ("06234LM", "Reel Lawn Mower", "Lawn & Garden", 88.41, 13),
       ("07234RS", "Running Shoes", "Footwear", 75, 11),
       ("08234AF", "Antifreeze & Coolant", "Automotive", 8.49, 9),
       ("09234HP", "Headphones", "Electronics", 11.89, 17),
       ("10234CT", "Coffee Table", "Home & Kitchen", 92.57, 2);