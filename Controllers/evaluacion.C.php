<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../correo/Exception.php';
require '../correo/PHPMailer.php';
require '../correo/SMTP.php';

// $ubicacionFormulario =  substr($_SERVER["SCRIPT_NAME"], 17);
include '../entorno/conexion.php';
require '../Models/evaluacion.M.php';
$respuesta = array();
try {
    if (getenv('HTTP_CLIENT_IP')) {
        $ip = getenv('HTTP_CLIENT_IP');
    } elseif (getenv('HTTP_X_FORWARDED_FOR')) {
        $ip = getenv('HTTP_X_FORWARDED_FOR');
    } elseif (getenv('HTTP_X_FORWARDED')) {
        $ip = getenv('HTTP_X_FORWARDED');
    } elseif (getenv('HTTP_FORWARDED_FOR')) {
        $ip = getenv('HTTP_FORWARDED_FOR');
    } elseif (getenv('HTTP_FORWARDED')) {
        $ip = getenv('HTTP_FORWARDED');
    } else {
        $ip = $_SERVER['REMOTE_ADDR'];
    }
    
    $nombre1 = $_POST['nombre1'];
    $nombre2 = $_POST['nombre2'];
    $nombre3 = $_POST['nombre3'];
    $nombre4 = $_POST['nombre4'];
    $nombre5 = $_POST['nombre5'];
    $valor1 = $_POST['valor1'];
    $valor2 = $_POST['valor2'];
    $valor3 = $_POST['valor3'];
    $valor4 = $_POST['valor4'];
    $valor5 = $_POST['valor5'];
    $respuesta['Ip'] = $ip;
    // $respuesta['respuesta'] = 'Su IP parece ser: ' . $ip;

    //Instantiation and passing `true` enables exceptions
    $mail = new PHPMailer(true);

    $mail->SMTPOptions = array(
        'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
        )
    );
    //Server settings
    $mail->SMTPDebug = 0; //Enable verbose debug output
    $mail->isSMTP(); //Send using SMTP
    $mail->Host = 'smtp.gmail.com'; //Set the SMTP server to send through
    $mail->SMTPAuth = true; //Enable SMTP authentication
    $mail->Username = 'videoqualityasessment@gmail.com'; //SMTP username
    $mail->Password = 'W;Q~FzjHqsykIV2ygt\I'; //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port = 587; //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
    // $mail->Port = 465; //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('videoqualityasessment@gmail.com', 'Video Quality Asessment');
    $mail->addAddress('edurado.andres@gmail.com', 'Eduardo'); //Add a recipient

    //Content
    $mail->isHTML(true); //Set email format to HTML
    $mail->Subject = 'Nueva evaluacion subjetiva enviada';
    $mail->Body = '
    <h2>Formulario de evaluacion de calidad de video</h2></br></br>
    <h3><b>Direccion de IP de evaluacion: </b>'.$ip.'</h3></br></br>
    <h3><b>Secuencia 1: </b>'.$nombre1.'</h3></br>
    <h3><b>Puntaje 1: </b>'.$valor1.'</h3></br></br>
    <h3><b>Secuencia 2: </b>'.$nombre2.'</h3></br>
    <h3><b>Puntaje 2: </b>'.$valor2.'</h3></br></br>
    <h3><b>Secuencia 3: </b>'.$nombre3.'</h3></br>
    <h3><b>Puntaje 3: </b>'.$valor3.'</h3></br></br>
    <h3><b>Secuencia 4: </b>'.$nombre4.'</h3></br>
    <h3><b>Puntaje 4: </b>'.$valor4.'</h3></br></br>
    <h3><b>Secuencia 5: </b>'.$nombre5.'</h3></br>
    <h3><b>Puntaje 5: </b>'.$valor5.'</h3></br></br>
    ';

    $mail->send();

    $respuesta['respuesta'] = "Los datos fueron enviados correctamente";
} catch (Exception $e) {
    $respuesta['respuesta'] = "Error, los datos no se pudieron enviar. Mailer Error: {$mail->ErrorInfo}";
}

echo json_encode($respuesta);