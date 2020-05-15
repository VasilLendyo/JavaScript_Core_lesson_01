"use strict"

let name = 'John';
let admin = name;
let login = "Admin";
let password = "TheMaster";

console.log(admin);

console.log("Who is there?")
if (login == "Admin") {
	console.log("Password?");
	if (password == "TheMaster") {
		console.log("Welcome");
	} else if (password == null) {
		console.log("Canceled.");
	} else {
		console.log("Wrong password");
	}
} else if (login == null) {
	console.log("Canceled.");
} else {
	console.log("I do not know you");
}
