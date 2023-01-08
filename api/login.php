<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connect.php';

$database = new Operations();
$conn = $database->dbConnection();
 
$data = json_decode(file_get_contents("php://input"));

if (empty(trim($data->email)) || empty(trim($data->senha))) :
 
    echo json_encode([
        'success' => 0,
        'message' => 'Campo(s) vazio(s)',
    ]);
    exit;
 
endif;
 
try {

    $emailUsuario = htmlspecialchars(trim($data->email));
    $senhaUsuario = $data->senha;
 
    $sql = "SELECT * FROM `usuarios` WHERE emailUsuario='$emailUsuario' AND senhaUsuario='$senhaUsuario'";
 
    $stmt = $conn->prepare($sql);

    $stmt->execute();

    if ($stmt->rowCount() > 0) :

        $data = null;
        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode([
            'success' => 1,
            'data' => $data,
			'message' => 'Usuario encontrado'
        ]);

    else :
        echo json_encode([
            'success' => 0,
            'message' => 'Nenhum usuario encontrado',
        ]);
		
    endif;
	
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => 0,
        'message' => $e->getMessage()
    ]);
    exit;
}






