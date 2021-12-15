function Login() {
  let username = document.getElementById("user");
  let pswd = document.getElementById("pass");
  if (username.value === "" || pswd.value === "") {
    document.getElementById("alertdanger").style.display = "block";
    // setTimeout(()=>{
    //     document.getElementById('alertdanger').style.display='none';
    // },3000)

  } else {
    username.value = "";
    pswd.value = "";
    document.getElementById('alertdanger').style.display='none';
    location.href='index.html';
  }
}

function input(){
  document.getElementById('alertdanger').style.display='none';
}