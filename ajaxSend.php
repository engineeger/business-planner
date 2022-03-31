<?php
    $to = 'vladimirovich.aleksei.ru@gmail.com';
    $subject = 'the subject';
    $headers = 'X-Mailer: PHP/' . phpversion();
    $message = "С формы\n Телефон: " . $_POST['phone'] . "\n";
    $message .= "Имя: " . $_POST['fio'] . "\n";
    $message .= "Сообщение: " . $_POST['comment'] . "\n";

    $r = mail($to, $subject, $message, $headers);

    if ($r) {
        header("Location: ".$_SERVER['HTTP_REFERER']);
        echo 'send';
        die();
    }else{
        header("Location: ".$_SERVER['HTTP_REFERER']);
        echo 'error';
        die();
    }
?>
