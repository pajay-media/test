<?php
session_start();
error_reporting(0);
  $con= new mysqli('localhost','root','','job_db');

/**
 *
 */
class user
{
  public $name;

  function __construct($name)
  {
  $this->name=$name;
  }

  function get_name(){
    return $this->name;
  }
}
if (isset($_SESSION['user'])) {
$user= new user($_SESSION['user']);
$username= $user->get_name();

//fetch and output necessary informations
$fetch= mysqli_query($con, "SELECT * FROM users WHERE username='$username'");
  if ($fetch) {
    while($key=mysqli_fetch_assoc($fetch)){
    $email=$key['email'];
    $fullname=$key['fullname'];
    $category=$key['category'];
    }

  echo "<input type='hidden' id='user' value=$username>";


}


}

else{
  header('location:index.html');
}

















 ?>
