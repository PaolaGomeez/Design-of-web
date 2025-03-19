<?php

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require 'config.php';

$input = file_get_contents('php://input');
$data = json_decode($input, true) ?? [];

$name = trim($data['name'] ?? '');
$age = isset($data['age']) ? intval($data['age']) : 0;
$email = trim($data['email'] ?? '');
$password = $data['password'] ?? '';

if (!empty($name) && filter_var($email, FILTER_VALIDATE_EMAIL) && $age > 0 && !empty($password)) {
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);

    $sql = "INSERT INTO users (name, age, email, password) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        $stmt->bind_param("siss", $name, $age, $email, $hashed_password);

        if ($stmt->execute()) {
            http_response_code(201);
            echo json_encode(["message" => "User successfully registered"]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Registration error: " . $stmt->error]);
        }
        $stmt->close();
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Query preparation error: " . $conn->error]);
    }
} else {
    http_response_code(400);
    echo json_encode(["error" => "Invalid data"]);
}

$conn->close();
?>
