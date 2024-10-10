<?php
$host = 'ep-restless-moon-a4x8trn5.us-east-1.aws.neon.tech';  
$dbname = 'DSCOTECA';  
$username = 'DSCOTECA_owner';
$password = 'VJqgRHc2udj5';  

try {
    // Criando uma nova conexão PDO com PostgreSQL
    $conn = new PDO("pgsql:host=$host;dbname=$dbname;sslmode=require", $username, $password);
    
    // Definindo o modo de erro do PDO para exceções
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Consulta SQL para selecionar os dados da tabela 'feedback'
    $query = 'SELECT * FROM feedback';
    $stmt = $conn->prepare($query);
    $stmt->execute();
    
    // Fetch all data from the table
    $feedbacks = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Exibindo os dados da tabela 'feedback'
    foreach ($feedbacks as $feedback) {
        echo "ID: " . $feedback['id'] . "<br>";
        echo "Name: " . $feedback['name'] . "<br>";
        echo "Rating: " . $feedback['rating'] . "<br>";
        echo "Message: " . $feedback['message'] . "<br>";
        echo "Date: " . $feedback['created_at'] . "<br><br>";
    }
    
} catch (PDOException $e) {
    echo "Erro na conexão: " . $e->getMessage();
}
?>
