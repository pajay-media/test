<?php
require_once 'action_profile.php';

if($category=="mentor"){
}
else {
  header('location:profile_m.php');
}
 ?>
 <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo $fullname ?></title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- mentor block here -->


<section class='main_mentor'>
  <div class='mentor'>
    <div class='m_word'>
      <h1><?php echo"Welcome, Mentor $fullname" ?></h1>
    </div>
  <div class='mentorAction'>
    <div class='mentor_action'>
      <button onclick="display('mentee','mentee','men')">View Mentees</button>
    </div>

    <div class='mentor_action'>
      <button onclick="display('info')">Personal information</button>
    </div>

    <div class='mentor_action'>
      <button onclick="display('find','find','fin')">Find new mentee</button>
    </div>

    <div class='mentor_action'>
      <button onclick="logout()">Logout</button>
    </div>
  </div>
</div>


<!-- responses here for each call to action -->
<div id='mentee' class='mentee'>
  <div class='ment'>

<div class='men' id='men'>
</div>
  </div>
</div>

<div id='find' class='mentee'>
  <div class='ment'>
<div class='men' id='fin'>
</div>
  </div>
</div>

</section>

</body>
<script type="text/javascript" src="admin_action.js">

</script>
</html>
