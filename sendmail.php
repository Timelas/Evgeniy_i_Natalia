<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/PHPMailer.php';

  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru', 'phpmailer/language/');
  $mail->IsHTML(true);

  //от кого письмо
  $mail->setForm('lom.a.s@icloud.com', 'опросник');
  //кому письмо
   $mail->addAddress('lom.a.s@icloud.com');
  //тема письма
  $mail->Subject = 'Форма опроса';

  if($_POST['hot_dish'] == "pork"){
    $hot_dish = "Свинина жареная, под сливочно-грибным соусом";
  }
  if($_POST['hot_dish'] == "chicken"){
    $hot_dish = "Нежное филе цыпленка, запеченное с томатами, цветной капустой, маслинами, итальянскими травами";
  }
  if($_POST['hot_dish'] == "trout"){
    $hot_dish = "Форель под сливочным соусом";
  }

  //Тело письма
  $body = '<h1>Письмо обработки формы</h1>';

  if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
  }
  if(trim(!empty($_POST['alcohol']))){
    $body.='<p><strong>Алкоголь:</strong> '.$alcohol.'</p>';
  }
  if(trim(!empty($_POST['hot_dish']))){
    $body.='<p><strong>Горячее:</strong> '.$hot_dish.'</p>';
  }
  if(trim(!empty($_POST['garnish']))){
    $body.='<p><strong>Гарнир:</strong> '.$garnish.'</p>';
  }
  if(trim(!empty($_POST['presence']))){
    $body.='<p><strong>Присутствие:</strong> '.$presence.'</p>';
  }


  $mail->Body = $body;

  //отправление
  if (!$mail->send()) {
      $message = 'Ошибка';
  } else {
    $message = 'Данные отправлены';
  }

  $response = ['message' => $message];

  header('Content-type: application/json')
  echo json_encode($response);
?>
