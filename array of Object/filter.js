let emp=[
    {
        namee:"Rajan kumar",
        age:20,
        city:"sitamarhi",
        contact:9955236973,
        designation:"Junior engineer"
    },
    {
        namee:"suraj kumar",
        age:21,
        city:"Bairgania",
        contact:6206546029,
        designation:"Junior engineer"

    },
    {
        namee:"Hariom kumar",
        age:30,
        city:"joriyahi",
        contact:9955236973,
        designation:"manager"
    },
    {
        namee:"vikash kumar",
        age:19,
        city:"parsauni",
        contact:9855685688,
        designation:"student"
    }
]


let a=emp.filter((e)=>{return e.age>20})
console.log(a)