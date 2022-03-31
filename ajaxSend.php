
<?php

$to      = 'vladimirovich.aleksei.ru@gmail.com';
$subject = 'the subject';
$headers = 'X-Mailer: PHP/' . phpversion();
    

if (isset($_POST['send'])){
$message = "С формы\n Телефон: " . $_POST['phone'] . "\n";
$message .= "Имя: " . $_POST['fio'] . "\n";
$message .= "Сообщение: " . $_POST['comment'] . "\n";

echo $message;
die();
// $r = mail($to, $subject, $message, $headers);

// if($r){
//     header("Location: ".$_SERVER['HTTP_REFERER']);
//     echo $message;
//     die();
// }
// }else{
//     echo $message;
//     header("Location: ".$_SERVER['HTTP_REFERER']);
// }