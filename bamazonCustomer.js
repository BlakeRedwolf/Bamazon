var mysql = require("mysql");
var inquirer = require("inquirer");
var consoletable = require("console.table");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "F0ll0wthewhiterabbit",
	database: "bamazon_db"
});

connection.connect(function(err) {
	console.log("Connection id: " + connection.threadId);
	//listInventory();
	bamazonWelcome();
});

var bamazonWelcome = function() {
	inquirer.prompt({
		type: "confirm",
		name: "bamazonWelcome",
		message: 'Welcome to Bamazon cli! Ready to start shopping?',
		//choices: vartypes
	}).then(function(answer) {
		if (answer.bamazonWelcome !==0) {
			listInventory();
		}
		else {
			console.log("Well screw you!");
		}
	});
};

var listInventory = function() {
	connection.query("SELECT * FROM inventory", function(err,res) {
		if (err) throw err;
		console.table('Bamazon Gaming Center',res);
	});
		inquirer.prompt([{
		type: "prompt",
		name: "SelectProduct",
		message: 'Enter the Product ID you wish to purchase',
		//choices: vartypes
	}, {
		type: "input",
		name: "SelectQty",
		message: 'How many would you like?'

		}]).then(function(answer) {
		if (isNaN(answer.SelectQty)) {
			listInventory();
		}
		else{
			//console.log('Product: '+ answer.SelectProduct);
			//console.log('Qty: '+ answer.SelectQty);
			var ProdID = answer.SelectProduct;
			var Qty = answer.SelectQty
			UpdateStock(ProdID, Qty);

		}
	})
}

function UpdateStock(ProdID, Qty){
	//console.log('Product: '+ProdID);
	//console.log('Qty: '+Qty);
	//var q = ''
	connection.query("select * FROM inventory WHERE id="+ProdID, function(err,res) {
	if (err) throw err;
	//console.table(res);
	//console.log('Stock: '+res[0].stock);
	var InStock = parseInt(res[0].stock);
	var Wants = parseInt(Qty);
	if(InStock >= Wants){
		var NewStock = InStock - Wants;
		// Update The Stock
		connection.query("UPDATE inventory SET stock="+NewStock+" WHERE id="+ProdID), function(err,res) {
				if (err) throw err;
				else listInventory();
		}
	}
	else console.log('Not Enough Inventory');
	listInventory();
	})
}

/*
var listInventory = function() {
	connection.query("SELECT * FROM inventory", function(err,res){
		//if (err) throw err;
		//console.table(res);
		inquirer.prompt({
			name: "choice",
			type: "list",
			message: "What product # would you like to purchase?",
			//choices: ["Cat", "Dog", "Mouse"]

			choices: (function(value){
				//console.log(res[2].item_id);
				//return;
				console.log(res.length);
				//return;
			}).then(function(answer){
				console.log(answer.choice);
		
				})
		})
});
}
*/
// var addProduct = function() {
// 	inquirer.prompt([{
// 		name: "product",

// 	}])
// }


// var productSearch = function() {
// 	inquirer.prompt({
// 		name: "products",
// 		type: "rawList",
// 		message: "Enter the id of the product you would like to purchase: ",
// 		choices: ["111", "112", "113", "114", "115", "116", "117", "118", "119", "120", ]
// 	}).then(function(answer) {
// 		console.log(answer.products);
// 		//connection.query("SELECT * FROM inventory WHERE ?", )
// 	});
// };

//connection.end();

// inquirer.prompt([questions here]).then(function (answers) {

// });

// create MySQL 'bamazon_db'
// add 10 products with item_id, product_name, department_name, price, stock_quantity

// display all available products for sale

// inquirer prompt "Enter the id of the product you would like to purchase"
// inquirer prompt "Enter the quantity you wish to purchase"

//.then check inventory

// if not enough quantity in stock, throw error
// else update quantity in db

// show grand total of purchase