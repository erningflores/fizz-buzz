const h1 = document.querySelector("h1");
const div = document.querySelector("div");

let answer = parseInt(prompt("Please enter a number you would like to fizzbuzz to: "));

let message = "";
for(let i=1; i<=answer; i++){
    if(i % 3 === 0 && i % 5 === 0){
        message += "fizzbuzz\n"
    }else if(i % 5 === 0){
        message += "buzz\n"
    }else if(i % 3 === 0){
        message += "fizz\n"
    }else{
        message += `${i}\n`;
    }
}
div.textContent = message;
div.style.whiteSpace = "pre-wrap";
