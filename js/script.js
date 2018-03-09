function random () {
var number = prompt("Enter a number");

var randomNumber = Math.floor(Math.random() * number);

var display = document.getElementById("display");
display.textContent= randomNumber;

}

random();


var button = document.getElementById("button");
var textField = document.getElementById("section");



textField.addEventListener("focus", clear, false);

function clear(){
        textField.value = "";
}



button.addEventListener("click", generate, false);

function generate(){
        var number = textField.value;
        var display = document.getElementById("display2");
        var randomNumber = Math.floor(Math.random() * number);
        display2.textContent = randomNumber;
}
