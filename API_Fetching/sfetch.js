
//map function data fetch krne ka kaam krta hai
//call by function hota hai
async function fun()
{
    let sh = document.getElementById("showdata")
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let b= await a.json()

   let p = b.map((e)=>`
          <tr>
          <td>${e.id}</td>
          <td>${e.userId}</td>
          <td>${e.title}</td>
          </tr>
   
   `).join("") // for comma remove and add
  sh.innerHTML=p;
}
