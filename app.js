let input = document.querySelector(".field_input");//data entered by the user into the input field
let btn = document.querySelector(".field_btn");//examination button von field_input
let help = document.querySelector(".result_help_out");
let count = document.querySelector(".result_count_out");
let chek = document.querySelector(".result_chek_out");
let new_btn = document.getElementById("new_btn");//neu game button
let end_btn = document.getElementById("end_btn");//game over button

let randNum = 1 + Math.floor(Math.random() * 100);

document.addEventListener("keydown", function (event) {
  let keyCode = event.keyCode || event.which;

  if (!((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105))) {
      event.preventDefault();
  }
});

//new game button click
new_btn.onclick = function (event) {
  event.preventDefault();  
  let text = document.getElementById("desc_Subtitle").textContent = "Hallo! Ich habe mir eine Nummer ausgedacht.";
  item = 1; 
  help.textContent = "Geben Sie die Nummer ein";
  count.textContent = 0;
  chek.textContent = "Ein neues Spiel";
};
//text color green (after pressing the button new game)
document.getElementById("new_btn").addEventListener("click", function() {
  let textElement = document.getElementById("mark");
  textElement.style.color = "#A7FFEB";
});

//end game button click
end_btn.onclick = function (event) {
  event.preventDefault();
  let text = document.getElementById("desc_Subtitle").textContent = "Auf Wiedersehen. Vielen Dank für Spiel.";
  help.textContent = "";
  chek.textContent = "Spiel vorbei";  
};
// text color red (after pressing the button end game)
  document.getElementById("end_btn").addEventListener("click", function() {
  let textElement = document.getElementById("mark");
  textElement.style.color = "#FF4081";
});

// text color yellow
  document.getElementById("add").addEventListener("click", function() {
  let textElement = document.getElementById("mark");
  textElement.style.color = "#FFECB3";
});

// button to check the entered number
btn.onclick = function (event) {
  event.preventDefault()

  userNum = input.value
  input.value = "";//clearing the input field from a number after clicking the check button
  userNum == (input == ("")) ? item =  1 : count.textContent = item++;
//counting attempts  = item 
// number from user = userNum 
    if (userNum == (input == (""))) {
    chek.textContent = " Keine Daten";
    help.textContent =  "Geben Sie die Nummer ein";

    } else if (userNum > randNum) {
    chek.textContent = userNum + " Falsch";
    help.textContent = "Die Zahl ist geringer";

    } else if (userNum < randNum) {
    chek.textContent = userNum + " Falsch";
    help.textContent = "Die Zahl ist größer";
    
    } else if (userNum = randNum) {
    chek.textContent = " Du hast gewonnen";
    help.textContent = "Diese Nummer = " + userNum;
    }
};