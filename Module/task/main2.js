import mul from "./comp2.js"

let a=parseInt(prompt("enter the first number"))
let b=parseInt(prompt("enter the second number"))
 
let ans=mul(a,b)
let aa=document.getElementById("mul")
aa.innerHTML=ans

import div from "./comp3.js"

let anss=div(a,b)
let aaa=document.getElementById("div")
aaa.innerHTML=anss