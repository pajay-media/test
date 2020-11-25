// user parameters here for login
let username= document.getElementById('username');
let password= document.getElementById('password');
let resp= document.getElementById('resp');
let login=document.getElementById('login');

//user registration parameters HERE
let fullName= document.getElementById('fullname');
let email= document.getElementById('email');
let user= document.getElementById('user');
let pass= document.getElementById('pass');
let cpass= document.getElementById('cpass');
let resp1= document.getElementById('resp1');
let signUp=document.getElementById('SignUp');
let sign= document.getElementById('sign');
let category=document.getElementById('category');
sign.style.display="none";

// registeration procedure, validation
signUp.onclick= () =>{
  // check for empty variables here
if(fullname.value=="" || email.value=="" || user.value=="" || pass.value=="" || cpass.value=="" || category.value==""){
resp1.style.color="red";
resp1.innerHTML="All fields are required, please fill all fields";
}

// check for invalid mail here
else{
  if (email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
//backend registeration validation and database storage HERE
resp1.innerHTML="";

var xml =  window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

var elem = new FormData;
elem.append('fullname', fullname.value);
elem.append('email', email.value);
elem.append('username', user.value);
elem.append('password', cpass.value);
elem.append('category',category.value);
elem.append('type','register');

xml.onreadystatechange = function(){

if (xml.readyState!=4) {
resp1.style.color="green";
resp1.innerHTML="Registering, Please Wait...";
}
else if (xml.readyState == 4) {
    if (xml.responseText != 'false') {
      let element = xml.responseText;

      if (element==1) {
        resp1.innerHTML="Registration Successful, proceeding to login...";
        fullname.value="";
        email.value="";
        user.value="";
        cpass.value="";
        category.value="";
        cpass.value="";
        pass.value="";
        setTimeout(()=>window.location="profile.php",3000);
      }

      //used email or username
      else if (element==2) {
        resp1.innerHTML="Sorry, the username or email has already been used by another user, please another one";
      }
    }

  }else{
    console.log('not working');
  }
}
xml.open('POST', 'action.php', true);
xml.send(elem);

}

else{
  resp1.style.color="red";
  resp1.innerHTML="PLease enter a valid mail address";
}
}
}

//check password match HERE
cpass.onkeyup=()=>{
  if (cpass.value!=pass.value) {
    resp1.innerHTML="Password does not match";
  }
  else{
    resp1.innerHTML="";
    sign.style.display="block";
  }
}
//registeration ends HERE

// login here

login.onclick=()=>{

if(username.value=="" || password.value==""){
  resp.style.color="red";
  resp.innerHTML="All fields are required";
}

else{
//validate login and login

var xml =  window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

var elem = new FormData;
elem.append('username', username.value);
elem.append('password', password.value);
elem.append('type','login');

xml.onreadystatechange = function(){

if (xml.readyState!=4) {
resp.style.color="green";
resp.innerHTML="loggin in, Please Wait...";
}
else if (xml.readyState == 4) {
    if (xml.responseText != 'false') {
      let element = xml.responseText;
      if (element==1) {
          resp.style.color="green";
        resp.innerHTML="login Successful, redirecting...";
        username.value="";
        password.value="";
        setTimeout(()=>window.location="profile.php",2000);
      }

      //used email or username
      else if (element==2) {
          resp.style.color="red";
        resp.innerHTML="Incorrect Username";
      }

      else if(element==3){
        resp.style.color="red";
        resp.innerHTML="Incorrect Password";
      }

    }

  }else{
    console.log('not working');
  }
}
xml.open('POST', 'action.php', true);
xml.send(elem);


}
}
