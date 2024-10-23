<?php
$host = 'ep-restless-moon-a4x8trn5.us-east-1.aws.neon.tech';  
$dbname = 'DSCOTECA';  
$username = 'DSCOTECA_owner';
$password = 'VJqgRHc2udj5';  

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erro ao conectar ao banco de dados: " . $e->getMessage());
}

?>
