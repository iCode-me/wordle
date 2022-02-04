const key = document.querySelectorAll(".key-box");
const box = document.querySelectorAll(".box");
const enter = document.getElementById("enter");
// const backSpace = document.querySelector("back");

let newArr = [];
const correctWord = "RIGHT";
let counter = 0;

const guessWord = (firstNum, lastNum) => {
  newArr.length = 0;
  key.forEach((item) => {
    item.addEventListener("click", (event) => {
      for (let i = firstNum; i < lastNum; i++) {
        if (box[i].innerHTML === "") {
          box[i].innerHTML = event.target.innerHTML;
          newArr.push(event.target.innerHTML);
          return;
        }
      }
    })
  })
}

guessWord(0,5);

enter.addEventListener("click", (event) => {
  
  let attemptedWord = newArr.join("")

  if(attemptedWord.length !==5) {
    alert("Not enough letters!")
    return;
  }
    
  if (attemptedWord === correctWord) {
    alert("Congratulations.. You have won!!!");
  } else { counter++
      if (counter === 1) {
        guessWord(5,10);
      } else if (counter === 2) {
        guessWord(10,15);
      } else if (counter === 3) {
        guessWord(15,20)
      } else if (counter === 4){
        guessWord(20,25)
      } else if (counter === 5){
        guessWord(25,30)
      } else {
        alert(`No more moves left. The correct word is "${correctWord}".`);
      }
    };
  })
  
  // backSpace.addEventListener("click",(event) => {
    
  // })
  


// When any letter key from the keyboard is pressed then it should be displayed on the game box starting from the left and moving horizontally up to five numbers.

// After enter is pressed it should move to the next row if all the letters don't match the correct word.

// After the sixth try if all the letters don't match then the correct word would be displayed

// After any row matches all the words "You won" should be displayed
