let obj1 = [
  "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  "Be yourself; everyone else is already taken.",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  "So many books, so little time.",
  "A room without books is like a body without a soul.",
];

let obj2 = [
  "― Marilyn Monroe",
  "― Oscar Wilde",
  "― Albert Einstein",
  "― Marcus Tullius Cicero",
  "― Frank Zappa",
];

document.write("<div>");
document.write("<h1>Quote of the Day</h1>");
document.write("<p class=press>Press the button below to recieve a random quote!</p>");
document.write("<button id=button>New Qoute</button>");
document.write("<p id=quateOutput></p>");
document.write("<p id=authorOutput></p>");
document.write("</div>");

let button = document.getElementById("button");
let quateOutput = document.getElementById("quateOutput");
let authorOutput = document.getElementById("authorOutput");

// styling both paragraph


console.log(obj1.length)

button.addEventListener("click",function (){
    quateOutput.textContent= obj1[Math.ceil(Math.random()*4)]
    authorOutput.textContent= obj2[Math.ceil(Math.random()*4)]
    

})

console.log(Math.ceil(Math.random()*10))