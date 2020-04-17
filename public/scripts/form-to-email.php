<?php
echo "Im php prro";
// if(!isset($_POST['submit'])){
  //   echo "Error; you need o submit he form";
  // }

if(empty($_POST['name'])  ||
   empty($_POST['email']) ||
   empty($_POST['message']))
{
    $errors .= "\n Error: all fields are required";
}

$errors = '';
$name = $_POST['name'];
$visitor_email = $_POST['email']
$myemail = 'inesherald@gmail.com';//<-----Put Your email address here.

if (!preg_match(
  "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
  $visitor_email))
  {
      $errors .= "\n Error: Invalid email address";
  }

  if( empty($errors))

{

$to = $myemail;

$email_subject = "Contact form submission: $name";

$email_body = "You have received a new message. ".

" Here are the details:\n Name: $name \n ".

"Email: $vistor_email \n Message \n $message";

$headers = "From: $myemail\n";

$headers .= "Reply-To: $vistor_email ";

mail($to,$email_subject,$email_body,$headers);

//redirect to the 'thank you' page

// header('Location: ./');

}

>