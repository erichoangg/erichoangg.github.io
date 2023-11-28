// console.log('TEST');

const x = 1;
const y = 2;

if (x === y) {
    console.log("SUCCESS");
}
else {
    console.log("FAIL");
}

const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');
const phrase = document.getElementById("randomPhrase");
let pArr = ["This is a phrase", "Hello", "What's good?", "This is another phrase", "I ran out of ideas"];

document.addEventListener("DOMContentLoaded", () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
  });

  function random(num){
    return Math.floor(Math.random() * num); 
  }

  function random2(num1){
    return Math.random() * num1;
  }

function draw(){
    ctx.clearRect(0,0, canvas.width, canvas.height); 
    for (let i = 0; i < 500; i++){
        ctx.beginPath();
        let red = random(255);
        let green = random(255);
        let blue = random(255);
        let alpha = random2(1);
        let color = "rgba("+red+","+green+","+blue+","+alpha+")";
        ctx.fillStyle = color;
        ctx.arc(
            random(canvas.width),
            random(canvas.height),
            random(100), 
            0,
            2 
        )
        ctx.fill();
    }
}

function randP(arr){
    const random = Math.floor(Math.random()*arr.length);
    return arr[random];
}
btn.addEventListener("click", draw);

randomPhrase.innerHTML = randP(pArr);