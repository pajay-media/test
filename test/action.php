
<?php
session_start();
error_reporting(0);

class details
{
public $fullname;
public $email;
public $username;
public $category;
public $password;
public $type;

public function __construct($fullname, $email, $username, $category, $password, $type){

$this->fullname=$fullname;
$this->email=$email;
$this->username=$username;
$this->category=$category;
$this->password=$password;
$this->type=$type;

}


function process(){
  $con= new mysqli('localhost','root','','job_db');
  //registeration validate here
if ($this->type=="register") {
$fullname=  mysqli_real_escape_string($con,$this->fullname);
$email= $this->email;
$username= mysqli_real_escape_string($con,$this->username);
$category=  mysqli_real_escape_string($con,$this->category);
$password= password_hash($this->password,PASSWORD_DEFAULT);

if(mysqli_query($con,"INSERT INTO users (fullname, email, username, category, password) VALUES ('$fullname', '$email', '$username', '$category', '$password')")){
  $_SESSION['user']=$this->username;
  echo "1";
}
else {
  //error due to reuse of email or username
  echo "2";
}
}

//login validations here
elseif ($this->type=="login") {
$username= $this->username;
$password= $this->password;


$fetch=mysqli_query($con,"SELECT * FROM users WHERE username='$username'");
if($fetch){
  while ($key= mysqli_fetch_assoc($fetch)) {
  $user=$key['username'];
  $pass=$key['password'];
  }

  if ($user == $username) {
if (password_verify($password,$pass)) {
  //loggin success
  $_SESSION['user']=$username;

  echo "1";
}
else{
  //incorrect password
  echo "3";
}
  }
  else{
    //Incorrect username
  echo "2";
  }
}
}

//fetch mentees attached to a particular mentor here
elseif ($this->type=="mentee") {
$username=$this->username;
$fetch=mysqli_query($con,"SELECT * FROM mentor WHERE mentors='$username'");
$row= mysqli_fetch_row($fetch);
if (implode(null,$row)!= null) {
get('name');
}
else{
echo"0";
}
}

elseif($this->type=="ment"){
  $username=$this->username;
  $fetch=mysqli_query($con,"SELECT * FROM mentor JOIN users on mentor.username=users.username WHERE mentor.mentors='$username' ");
  if ($fetch) {
    while($key=mysqli_fetch_assoc($fetch)){
      echo "<div style='border-bottom: 1px solid black;'>Name: ".$key['fullname']."<br> Mail Address: ".$key['email']."<br> Username: ".$key['username']."</div><br>";

    }
  }
}

//engine to allow admin pick mentor here
elseif($this->type=="find"){
  $fetch=mysqli_query($con,"SELECT * FROM users WHERE category ='mentee'");
  $row= mysqli_fetch_row($fetch);
  if (implode(null,$row)!= null) {
  get('find');
  }
  else{
  echo"0";
  }
}

//fetch users if available
elseif($this->type=="finds"){
  $fetch=mysqli_query($con,"SELECT * FROM users WHERE category='mentee'");
  if ($fetch) {
    $data= array();
    while($key=mysqli_fetch_assoc($fetch)){
$fullname=$key['fullname'];
$email=$key['email'];
$username=$key['username'];
$data[]= array('fullname' =>$fullname , 'email'=>$email, 'username'=>$username);
    }
    echo json_encode($data);
  }
}

elseif($this->type=="add"){
  $username=$this->username;
  $fullname=$this->fullname;
$fetch=mysqli_query($con,"SELECT * FROM mentor WHERE username='$username'");
if ($fetch) {
  while ($key=mysqli_fetch_assoc($fetch)) {
  $mentee=$key['username'];
  $mentor=$key['mentors'];
  }

  if (empty($mentee) || $mentor!=$fullname) {
    if (mysqli_query($con,"INSERT into mentor(username, mentors) VALUES ('$username','$fullname')")) {
    echo"done";
    }
  }
  else {
    echo"User already added";
  }
}
}

//allow users fetch
elseif ($this->type=="mento") {
$username=$this->username;
$fetch=mysqli_query($con,"SELECT * FROM mentor WHERE username='$username'");
$row= mysqli_fetch_row($fetch);
if (implode(null,$row)!= null) {
get('ments');
}
else{
echo"0";
}
}

elseif($this->type=="ments"){
  $username=$this->username;
  $fetch=mysqli_query($con,"SELECT * FROM mentor JOIN users on mentor.mentors=users.username WHERE mentor.username='$username' ");
  if ($fetch) {
    while($key=mysqli_fetch_assoc($fetch)){
      echo "<div style='border-bottom: 1px solid black;'>Name: ".$key['fullname']."<br> Mail Address: ".$key['email']."<br> Username: ".$key['username']."</div><br>";

    }
  }
}

}


}

function get($param){

  if ($param=="name") {
   $details= new details($_REQUEST['fullname'], $_REQUEST['email'], $_REQUEST['username'], $_REQUEST['category'], md5($_REQUEST['password']), 'ment');
  echo $details->process();
}
elseif ($param=="find") {
  $details= new details($_REQUEST['fullname'], $_REQUEST['email'], $_REQUEST['username'], $_REQUEST['category'], md5($_REQUEST['password']), 'finds');
 echo $details->process();
}

elseif ($param=="ments") {
  $details= new details($_REQUEST['fullname'], $_REQUEST['email'], $_REQUEST['username'], $_REQUEST['category'], md5($_REQUEST['password']), 'ments');
 echo $details->process();
}

}

$details= new details($_REQUEST['fullname'], $_REQUEST['email'], $_REQUEST['username'], $_REQUEST['category'], md5($_REQUEST['password']), $_REQUEST['type']);
echo $details->process();








 ?>
