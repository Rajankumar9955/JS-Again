import add from "./comp.js"

let x=parseInt(prompt("enter the first number"))
let y=parseInt(prompt("enter the second number"))

let ans=add(x,y);
let g=document.getElementById("raj")
g.innerHTML=ans;

