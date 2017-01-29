var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});


connection.connect(function(err) {
  if (err) throw err;
  displayAvailable();
});


var userChoice = [];
var userQuantity = [];


var displayAvailable = function() {
	connection.query("SELECT * FROM products", function(err, res) {
	  if (err) throw err;
    console.log('');
    console.log('===================================================');
	  console.log("Welcome to Bamazon! Here\'s what we have in stock: ");
    console.log('===================================================');
    console.log('');
    for (var i = 0; i < res.length; i++) {
        console.log("Item ID: " + res[i].item_id + " || Product: " + res[i].product_name + " || Price: $" + res[i].price + '\n');
    }
    userPrompt();
	});
}


var userPrompt = function() {
  inquirer.prompt([{
    name: "action",
    type: "list",
    message: "What is the ID of the product you would like to buy?",
    choices: ["01234DJ", "02234BL","03234TV", "04234GR", "05234CG", "06234LM", 
      "07234RS", "08234AF", "09234HP", "10234CT"]
  }, {
    name: "quantity",
    type: "input",
    message: "How many would you like to buy?",
    default: "Enter number",
    validate: function(value) {
      if (isNaN(value) === false) {
        return true;
      } 
      return false;
    }
  }]).then(function(answer) {
    userChoice.push(answer.action);
    console.log(userChoice);
    userQuantity.push(answer.quantity);
    console.log(userQuantity);
  });
}

