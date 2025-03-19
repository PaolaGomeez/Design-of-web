<?php
header('Content-Type: application/json');

require_once "config.php";

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['name'], $data['age'], $data['email'], $data['password'])) {

    $name = $conn->real_escape_string(trim($data['name']));
    $age = intval($data['age']);
    $email = $conn->real_escape_string(trim($data['email']));
    $password = $conn->real_escape_string($data['password']);

    if (!empty($name) && filter_var($email, FILTER_VALIDATE_EMAIL) && $age > 0 && !empty($password)) {

        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        $sql = "INSERT INTO users (name, age, email, password) VALUES (?, ?, ?, ?)";
        if ($stmt = $conn->prepare($sql)) {
            $stmt->bind_param("siss", $name, $age, $email, $hashed_password);

            if ($stmt->execute()) {
                echo json_encode(["message" => "User registered successfully"]);
            } else {
                http_response_code(500);
                echo json_encode(["message" => "Error registering user: " . $stmt->error]);
            }

            $stmt->close();
        } else {
            http_response_code(500);
            echo json_encode(["message" => "Internal error preparing query."]);
        }
    } else {
        http_response_code(400);
        echo json_encode(["message" => "Invalid data. Please check all fields."]);
    }
} else {
    http_response_code(400);
    echo json_encode(["message" => "Missing required data in the request."]);
}

$conn->close();
