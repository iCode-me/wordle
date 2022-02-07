const key = document.querySelectorAll(".key-box");
const box = document.querySelectorAll(".box");
const enter = document.getElementById("enter");
const backSpace = document.getElementById("back");

let newWordArr = [];
const correctWord = "RIGHT";
const correctWordArr = correctWord.split('');
let counter = 0;



const guessWord = (firstNum, lastNum) => {
  newWordArr.length = 0;
  key.forEach((item) => {
    item.addEventListener("click", (event) => {
      for (let i = firstNum; i < lastNum; i++) {
        if (box[i].innerHTML === "") {
          box[i].innerHTML = event.target.innerHTML;
          newWordArr.push(event.target.innerHTML);
          return;
        } 
      }
    })
  })
}

// const backSpaceClick = () => backSpace.addEventListener("click", (event) => { 
//   for (let i = 0; i < box.length; i++) { 
//     box[i].innerHTML = "";
//   }
// })

// backSpaceClick();

guessWord(0,5);

enter.addEventListener("click", (event) => {
  backgroundColor()
  
  let attemptedWord = newWordArr.join("")

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
    
const backgroundColor = () => { 
    box.forEach((tile, index) => {
    const boxLetter = tile.textContent;

  if (boxLetter === correctWord[index]) {
    tile.classList.add("greenColor")
  } else if (correctWord.includes(boxLetter)) {
    tile.classList.add("yellowColor")
  } else {
    tile.classList.add("greyColor")
  }
})
}

//             if (correctWordArr[i] === (newWordArr[i]) && newWordArr === (newWordArr.slice(0, row.indexOf(newWordArr[i]-1))[i])) {
//                 box[i+counter].style.backgroundColor = "transparant"    
//                 }
//         } else if (correctWordArr.includes(newWordArr[i])) {
//             box[i+count].style.backgroundColor = "yellow"
//             console.log("includes letter");
//             if (correctWordArr.includes(newWordArr[i]) && newWordArr.includes(newWordArr.slice(0, newWordArr.indexOf(newWordArr[i]-1))[i])) {
//                 box[i+count].style.backgroundColor = "transparant"
//         } else {
//             console.log( "doesn't include letter")
//         }
//     }
//     }
//     count += 5;
// }


 

  


// When any letter key from the keyboard is pressed then it should be displayed on the game box starting from the left and moving horizontally up to five numbers.

// After enter is pressed it should move to the next row if all the letters don't match the correct word.

// After the sixth try if all the letters don't match then the correct word would be displayed

// After any row matches all the words "You won" should be displayed
