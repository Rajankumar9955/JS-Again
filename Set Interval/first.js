//setinterval is function 
//kisi v function mein parameter pass ho to usse call by function kehte hai
//setInterval mein 2 parameter pass krte hai 1 function and or 1 time


// let a=document.getElementById('count')
// var s
// function startt()
// {
//    s= setInterval(()=>{console.log(1)},2000)
// }
// function stopp()
// {
//     clearInterval(s)
// }


let count=document.getElementById('count')
let a=0;
var x;
function startt()
{
   x= setInterval(() => {
        a++;
        count.innerHTML=a;
    },2000);
}




function stopp()
{
    clearInterval(x);
}

let time=document.getElementById('time')
setInterval(() => {
    let a=new Date();
    let p = a.toLocaleTimeString()
    time.innerHTML=p;
},1000);

