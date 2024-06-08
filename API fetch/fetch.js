async function fun()
{   let Data = document.getElementById("Data")
    let a= await fetch("http://localhost:3000/product")
    let b= await a.json()
    
    let d=b.map((e)=>`
    <tr>
          <td>${e.id}</td> 
          <td>${e.pr_name}</td>
          <td>${e.price}</td>
          <td><button onclick="mydelete(${e.id})">Delete</buttton></td>
          <td><button onclick="FormEdit(${e.id})">Edit</buttton></td> 
    </tr>
    `).join("")
    Data.innerHTML=d
    // td<button onclick="mydelete{${e.id}"> this is use for delete section
    // td<button onclick="FormEdit{${e.id}"> this is use for edit section
}
fun()
//==================add section==================
function add()
{
    let frmdata = {
        id:document.getElementById("n1").value,
        pr_name:document.getElementById("n2").value,
        price:document.getElementById("n3").value

    }

    fetch("http://localhost:3000/product",{
        method:"post",
        headers:{
            'Content-type':'application/json',
        },
        body:JSON.stringify(frmdata)
    })
}
//=====================delete section==============


function mydelete(id){
    fetch(`http://localhost:3000/product/${id}`,{
        method:"Delete",
    })
    .then(res=>alert("Data Deleted Successfully"))
}


//===========edit section=======================


let Raj=0;
function FormEdit(id)
{
    Raj=id;
    document.getElementById("frmdata").style.display="block";
}

function EditForm()
{
         let edit = {
             id:document.getElementById("id").value,
             pr_name:document.getElementById("pr_name").value,
             price:document.getElementById("price").value,
         }

         fetch(`http://localhost:3000/product/${Raj}`,{
            method:"PUT",
            headers:{
                'Content-type':'application/json',
           },
           body:JSON.stringify(edit),
         })
         .then(res=>alert("Edit Done"))
  
}