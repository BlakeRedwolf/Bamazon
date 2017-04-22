# HW Week 12 - {Bamazon}
An Amazon-like storefront command line application (CLI) using MySQL to store inventory data.

## Live Link
 - https://blakeredwolf.github.io/Bamazon/

## Description
In this activity, you'll be creating an Amazon-like storefront with the MySQL skills you learned this week. The app will take in orders from customers and deplete stock from the store's inventory. As a bonus task, you can program your app to track product sales across your store's departments and then provide a summary of the highest-grossing departments in the store.
Make sure you save and require the MySQL and Prompt npm packages in your homework files--your app will need them for data input and storage.

## Requirements
####

- Create a MySQL Database called Bamazon.
- Then create a Table inside of that database called products.
- The products table should have each of the following columns:
-item_id (unique id for each product)
product_name (Name of product)
department_name
price (cost to customer)
stock_quantity (how much of the product is available in stores)
- Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).
- Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
- The app should then prompt users with two messages.
- The first should ask them the ID of the product they would like to buy.
- The second message should ask how many units of the product they would like to buy.
- Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
- If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
- However, if your store does have enough of the product, you should fulfill the customer's order.
- This means updating the SQL database to reflect the remaining quantity.
- Once the update goes through, show the customer the total cost of their purchase.

## Technologies Used
####

- NodeJS
- MySQL (Workbench)
- NPM
- Packages: Inquirer, MySQL & Console.table.

## Code Explaination

Started by requiring all node packages. Then i created a database that would hold all of my product/inventory data. Next i established a connection with my databse through gitbash, and psuedo coded a basic outline of what my application would do and was sure to include keywords. I created functions for starting the program, listing inventory, calculating a total cost, deducting the quantity purchased from the inventory and finally updated the inventory to my sql database.

-------------

![hw1](https://cloud.githubusercontent.com/assets/22486834/25304189/03805406-2717-11e7-8bb2-6b412ae4e532.JPG)
![hw2](https://cloud.githubusercontent.com/assets/22486834/25304190/03815748-2717-11e7-8b30-a07006821fd5.JPG)
![hw3](https://cloud.githubusercontent.com/assets/22486834/25304185/037d18c2-2717-11e7-91e0-0d1caa651609.JPG)
![hw4](https://cloud.githubusercontent.com/assets/22486834/25304186/037d5756-2717-11e7-8200-c8f7e43e826c.JPG)
![hw5](https://cloud.githubusercontent.com/assets/22486834/25304187/037e82f2-2717-11e7-9937-8e440a058ed0.JPG)
![hw6](https://cloud.githubusercontent.com/assets/22486834/25304188/037f6b18-2717-11e7-9e06-62ca58bc8eb9.JPG)

-------------