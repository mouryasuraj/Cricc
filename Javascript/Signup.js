function signUp(){
    let fname1=document.getElementById('fname');
    let lname1=document.getElementById('lname');
    let email1=document.getElementById('email');
    let contact1=document.getElementById('contact');
    let dob1=document.getElementById('dob');
    let pswd1=document.getElementById('pswd');
    let cpswd1=document.getElementById('cpswd');
    let cbx1=document.getElementById('cbx');
    if(fname1.value==='' || lname1.value==='' || email1.value==='' || contact1.value==='' || dob1.value==='' || pswd1.value==='' || cpswd1.value==='' || cbx1.value==='')
        {
            document.getElementById("alert-danger").style.display = "block";
            // setTimeout(()=>{
            //     document.getElementById('alert-danger').style.display='none';
            // },3000)
        } 
        else 
        {
            fname1.value = "";
            lname1.value = "";
            email1.value = "";
            contact1.value = "";
            dob1.value = "";
            pswd1.value = "";
            cpswd1.value = "";
            cbx1.value = "";
            document.getElementById('alert-danger').style.display='none';
            location.href='index.html';
        }
    }

    function input(){
        document.getElementById('alert-danger').style.display='none';
    }