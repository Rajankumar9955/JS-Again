//node js is a run time environment to provide environment jo multiple language ko support krta hai :- js , next js etc
//sync await promise return krta hai
async function fun()
{
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let b = await a.json()
    //console.log(b)

    let p=b.map((e)=>{return e.id})
    console.log(p)
}
fun()