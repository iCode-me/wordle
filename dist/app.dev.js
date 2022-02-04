"use strict";

var key = document.querySelectorAll(".key-box");
var box = document.querySelectorAll(".box");
var enter = document.getElementById("enter"); // const backSpace = document.querySelector("back");

var newArr = [];
var correctWord = "RIGHT";
var counter = 0;

var guessWord = function guessWord(firstNum, lastNum) {
  newArr.length = 0;
  key.forEach(function (item) {
    item.addEventListener("click", function (event) {
      for (var i = firstNum; i < lastNum; i++) {
        if (box[i].innerHTML === "") {
          box[i].innerHTML = event.target.innerHTML;
          newArr.push(event.target.innerHTML);
          return;
        }
      }
    });
  });
};

guessWord(0, 5);
enter.addEventListener("click", function (event) {
  var attemptedWord = newArr.join("");

  if (attemptedWord.length !== 5) {
    alert("Not enough letters!");
    return;
  }

  if (attemptedWord === correctWord) {
    alert("Congratulations.. You have won!!!");
  } else {
    counter++;

    if (counter === 1) {
      guessWord(5, 10);
    } else if (counter === 2) {
      guessWord(10, 15);
    } else if (counter === 3) {
      guessWord(15, 20);
    } else if (counter === 4) {
      guessWord(20, 25);
    } else if (counter === 5) {
      guessWord(25, 30);
    } else {
      alert("No more moves left. The correct word is \"".concat(correctWord, "\"."));
    }
  }

  ;
}); // backSpace.addEventListener("click",(event) => {
// })
// When any letter key from the keyboard is pressed then it should be displayed on the game box starting from the left and moving horizontally up to five numbers.
// After enter is pressed it should move to the next row if all the letters don't match the correct word.
// After the sixth try if all the letters don't match then the correct word would be displayed
// After any row matches all the words "You won" should be displayed