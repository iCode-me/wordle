const key = document.querySelectorAll(".key-box");
const box = document.querySelectorAll(".box");
const enter = document.getElementById("enter");

let newArr = [];
const correctWord = "RIGHT";



key.forEach(item => {
  item.addEventListener("click", event => {
    for (let i = 0; i < 5; i++) {
      if (box[i].innerHTML === "") {
        box[i].innerHTML = event.target.innerHTML;
        newArr.push(event.target.innerHTML);
        return;
      }
    }
  })
})

enter.addEventListener("click", event => {
    let attemptedWord = newArr.join("");
  
    if ( attemptedWord === correctWord) {
      alert("You have won!!!");
    } else {
      let newArr = [];
      key.forEach(item => {
        item.addEventListener("click", event => {
          for (let i = 5; i < 10; i++) {
            if (box[i].innerHTML === "") {
              box[i].innerHTML = event.target.innerHTML;
              newArr.push(event.target.innerHTML);
              return;
            }
          }
        })
      })
    }
})


















// When any letter key from the keyboard is pressed then it should be displayed on the game box starting from the left and moving horizontally up to five numbers.

// After enter is pressed it should move to the next row if all the letters don't match the correct word.

// After the sixth try if all the letters don't match then the correct word would be displayed

// After any row matches all the words "You won" should be displayed
