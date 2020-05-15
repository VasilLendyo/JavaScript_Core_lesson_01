"use strict"

let login = "Admin";
let password = "TheMaster";

switch(login){
case "Admin":{
	console.log("Password?");
	switch(password){
	case "TheMaster":{
		console.log("Welcome");
		break;
	}
	case null:{
		console.log("Canceled");
		break;
	}
	default:{
		console.log("Wrong password");
		break;
	}
	}
	break;
}
case null:{
	console.log("Canceled");
}
default:{
	console.log("I do not know you");
}
}