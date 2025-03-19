<?php

require 'config.php';
session_start();

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "method not allowed"]);
    exit();
}

$inputJSON = file_get_contents("php://input");
$input = json_decode($inputJSON, true);

if (!isset($input['email']) || !isset($input['password'])) {
    echo json_encode(["success" => false, "message" => "wrong datas"]);
    exit();
}

$email = $conn->real_escape_string($input['email']);
$password = $input['password'];

$sql = "SELECT * FROM users WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();

    if (password_verify($password, $user['password'])) {
        $_SESSION['user_logged_in'] = true;
        $_SESSION['user_id'] = $user['id'];

        echo json_encode([
            "success" => true,
            "user" => [
                "id" => $user['id'],
                "name" => $user['name'],
                "email" => $user['email']
            ]
        ]);
    } else {
        echo json_encode(["success" => false, "message" => "datas incorrect"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "user not found"]);
}

exit();
?>