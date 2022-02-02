"use strict";

var key = document.querySelectorAll(".key-box");
var box = document.querySelectorAll(".box");
var enter = document.getElementById("enter");
var newArr = [];
var correctWord = "RIGHT";
key.forEach(function (item) {
  item.addEventListener("click", function (event) {
    for (var i = 0; i < 5; i++) {
      if (box[i].innerHTML === "") {
        box[i].innerHTML = event.target.innerHTML;
        newArr.push(event.target.innerHTML);
        console.log(newArr);
        return;
      }
    }
  });
});
enter.addEventListener("click", function (event) {
  var attemptWord = newArr.join("");

  if (attemptWord === correctWord) {
    alert("You have won!!!");
  } else {
    key.forEach(function (item) {
      item.addEventListener("click", function (event) {
        for (var i = 5; i < 10; i++) {
          if (box[i].innerHTML === "") {
            box[i].innerHTML = event.target.innerHTML;
            newArr.push(event.target.innerHTML);
            return;
          }
        }
      });
    });
  }
}); // When any letter key from the keyboard is pressed then it should be displayed on the game box starting from the left and moving horizontally up to five numbers.
// After enter is pressed it should move to the next row if all the letters don't match the correct word.
// After the sixth try if all the letters don't match then the correct word would be displayed
// After any row matches all the words "You won" should be displayed