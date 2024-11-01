function validate()
{
    let namee=document.getElementById('namee').value;
    let email=document.getElementById('email').value;
    let age=document.getElementById('age').value;
    let contact=document.getElementById('contact').value;
    let pass=document.getElementById('pass').value;
    let cpass=document.getElementById('cpass').value;

    
    if(namee=="")
    {
        alert("Name is required")
        document.getElementById('namee').focus()
        return false
    }
    else if(namee.match(/[0,1,2,3,4,5,6,7,9]/)){
        alert("Name should be in charater")
        document.getElementById('namee').focus()
        return false
    }
    else if(email=="")
    {
        alert("Email is required")
        document.getElementById('email').focus()
        return false;
    }
    else if(!(email.includes('@')))
    {
        alert("@ is compulsary in email")
        document.getElementById('email').focus()
        return false
    }
    else if(contact=="")
    {
        alert("Contact is required")
        document.getElementById('contact').focus();
        return false;
    }
    else if(isNaN(contact))
    {
        alert("contact in number")
        document.getElementById("contact").focus()
        return false
    }
    else if(contact.length>10 || contact.length<10)
    {
        alert("Contact should be 10 digit")
        document.getElementById("contact").focus();
        return false;
    }
    else if(isNaN(age))
    {
        alert("Only number allowed")
        document.getElementById("age").focus()
        return false;
    }
    else if(age=="")
    {
        alert("age is required")
        document.getElementById("age").focus()
        return false
    }
    else if(pass=="")
    {
        alert("age is required")
        document.getElementById("pass").focus()
        return false
    }
    else if(!(pass.match(/[!,@,#,>,<,.]/)))
    {
        alert("Special charater is required in password")
        document.getElementById("pass").focus()
        return false
    }
    else if(cpass=="")
    {
        alert("cpass is required")
        document.getElementById("cpass").focus()
        return false
    }
    else if(pass!=cpass)
    {
        alert("Doesn't match password")
        document.getElementById("cpass").focus()
        return false
    }
}