async function fun()
{   let Data = document.getElementById("Data")
    let a= await fetch("http://localhost:3000/product")
    let b= await a.json()
    
    let d=b.map((e)=>`
    <tr>
          <td>${e.id}</td>
          <td>${e.pr_name}</td>
          <td>${e.price}</td>
    </tr>
    `).join("")
    Data.innerHTML=d
}
// fun()

