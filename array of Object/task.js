
let A1=[
    {
        price:201261464,
    },
    {
        price:38676,
    },
    {
        price:2363,
    },
    {
        price:201254,
    },
    {
        price:52155,
    }  
]

let fil=A1.filter((e)=>{return e.price>20000})
console.log(fil)