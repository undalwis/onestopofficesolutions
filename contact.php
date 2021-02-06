<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$formcontent=" From: $name \n Email: $email \n Phone: $phone \n Message: $message";
$recipient = "umeesha.dalwis@pepperdine.edu";
$subject = "onestop.com Customer Contact";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error! Try again.");
echo "Thank You!" . " -" . "<a href='notguiltysurvey.html' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
?>
