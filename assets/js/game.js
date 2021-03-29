// this creates a function named "fight"
function fight (){
window.alert("The fight has begun!");
}
//adding a prompt function so the User can input what they want. 
var playerName = window.prompt("What is your robot's name?");

// Note the lack of quotation marks around playerName
//this will store the User's input of playerName, console.log can be viewed in the "Inspect" (right click on browser) and "Console" tab
console.log(playerName);

console.log("This logs a string, good for leaving yourself a message");

//this will do math and log 20
console.log(10 + 10);

//this will display "Our robot's name is " and input the Users text for playerName in the console tab 
console.log("Our robot's name is " + playerName);

//this will call the function. It will then display "The fight has begun!" as an alert when you open the browser. 
//fight ();