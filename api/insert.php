<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 

$method = $_SERVER['REQUEST_METHOD'];

if ($method == "OPTIONS") {
    die();
}

 
if ($_SERVER['REQUEST_METHOD'] !== 'POST') :
    http_response_code(405);
    echo json_encode([
        'success' => 0,
        'message' => 'Bad Request!.Only POST method is allowed',
    ]);
    exit;
endif;
 
require 'db_connect.php';
$database = new Operations();
$conn = $database->dbConnection();
 
$data = json_decode(file_get_contents("php://input"));

if (empty(trim($data->nome)) || empty(trim($data->cpf)) || empty(trim($data->telefone)) || empty(trim($data->email)) || empty(trim($data->senha))) :
 
    echo json_encode([
        'success' => 0,
        'message' => 'Por favor, preencha o(s) campo(s) vazio(s).',
    ]);
    exit;
 
endif;
 
try {
 
    $tipoUsuario = "Cliente";
    $nomeUsuario = htmlspecialchars(trim($data->nome));
    $cpfUsuario = htmlspecialchars(trim($data->cpf));
    $telefoneUsuario = htmlspecialchars(trim($data->telefone));
    $emailUsuario = htmlspecialchars(trim($data->email));
    $senhaUsuario = $data->senha;
 
    $query = "INSERT INTO `usuarios`(
    tipoUsuario,
    nomeUsuario,
    cpfUsuario,
    telefoneUsuario,
    emailUsuario,
    senhaUsuario
    ) 
    VALUES(
    :tipoUsuario,
    :nomeUsuario,
    :cpfUsuario,
    :telefoneUsuario,
    :emailUsuario,
    :senhaUsuario
    )";
 
    $stmt = $conn->prepare($query);
 
    $stmt->bindValue(':tipoUsuario', $tipoUsuario, PDO::PARAM_STR);
    $stmt->bindValue(':nomeUsuario', $nomeUsuario, PDO::PARAM_STR);
    $stmt->bindValue(':cpfUsuario', $cpfUsuario, PDO::PARAM_STR);
    $stmt->bindValue(':telefoneUsuario', $telefoneUsuario, PDO::PARAM_STR);
    $stmt->bindValue(':emailUsuario', $emailUsuario, PDO::PARAM_STR);
    $stmt->bindValue(':senhaUsuario', $senhaUsuario, PDO::PARAM_STR);
    

    if ($stmt->execute()) {
 
        http_response_code(201);
        echo json_encode([
            'success' => 1,
            'message' => 'Dados inseridos com sucesso!.'
        ]);
        exit;
    }
    
    echo json_encode([
        'success' => 0,
        'message' => 'Houve um problema :('
    ]);
    exit;
 
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => 0,
        'message' => $e->getMessage()
    ]);
    exit;
}
