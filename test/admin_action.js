const display= (params1,params2,params3) =>{
if(params1=="mentee"){
  let user= document.getElementById('user');
  let ment=document.getElementById(params1);
  let resp=document.getElementById(params3);
let find=document.getElementById('find');
find.style.display="none";
  //fetch infos from database here
  var xml =  window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
  var elem = new FormData;
  elem.append('username', user.value);
  elem.append('type',params2);
  xml.onreadystatechange = ()=>{
  if (xml.readyState!=4) {
      ment.style.display="block";
      resp.innerHTML="loading, please wait....";
  }
  else if (xml.readyState == 4) {
      if (xml.responseText != 'false') {
        var element = xml.responseText;
if(element==0){
  ment.style.display="block";
  resp.innerHTML="Sorry, You currently have no mentee, Kindly go and Find a new  mentee";
}
else{
  ment.style.display="block";
  resp.innerHTML=element;
}
      }

    }else{
      console.log('not working');
    }
  }
  xml.open('POST', 'action.php', true);
  xml.send(elem);
}

else if (params1=="find") {
  let mentee=document.getElementById('mentee');
  mentee.style.display="none";


  let ser= document.getElementById('user');
  let ment=document.getElementById(params1);
  let resp=document.getElementById(params3);
  //fetch infos from database here
  var xml =  window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
  var elem = new FormData;
  elem.append('type',params2);
  xml.onreadystatechange = ()=>{

  if (xml.readyState!=4) {
      ment.style.display="block";
      resp.innerHTML="loading, please wait....";
  }
  else if (xml.readyState == 4) {
        resp.innerHTML="";

      if (xml.responseText != 'false') {

        var element = JSON.parse(xml.responseText);
for (let key in element) {
  if (element.hasOwnProperty(key)) {

      ment.style.display="block";
let news= document.createElement('button');
news.innerHTML="add";
let div= document.createElement('div');
div.innerHTML=element[key]['fullname'];
div.appendChild(news);
resp.appendChild(div);
news.onclick=()=>{
  //add user HERE
  var xml =  window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
  var elem = new FormData;
  elem.append('username', element[key]['username']);
    elem.append('fullname', user.value);
  elem.append('type','add');
  xml.onreadystatechange = ()=>{
  if (xml.readyState!=4) {

  }
  else if (xml.readyState == 4) {
      if (xml.responseText != 'false') {
        var element = xml.responseText;
alert(element);
      }

    }else{
      console.log('not working');
    }
  }
  xml.open('POST', 'action.php', true);
  xml.send(elem);

    }
  }
}

      }

    }else{
      console.log('not working');
    }
  }
  xml.open('POST', 'action.php', true);
  xml.send(elem);
}

if(params1=="mentor"){
  let user= document.getElementById('user');
  let ment=document.getElementById(params1);
  let resp=document.getElementById(params3);
  //fetch infos from database here
  var xml =  window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
  var elem = new FormData;
  elem.append('username', user.value);
  elem.append('type',params2);
  xml.onreadystatechange = ()=>{
  if (xml.readyState!=4) {
      ment.style.display="block";
      resp.innerHTML="loading, please wait....";
  }
  else if (xml.readyState == 4) {
      if (xml.responseText != 'false') {
        var element = xml.responseText;
if(element==0){
  ment.style.display="block";
  resp.innerHTML="Sorry, You currently have no mentor, it will show once a mentor adds you up";
}
else{
  ment.style.display="block";
  resp.innerHTML=element;
}
      }

    }else{
      console.log('not working');
    }
  }
  xml.open('POST', 'action.php', true);
  xml.send(elem);
}
};

const logout=()=>{
  window.location="logout.php";
};
