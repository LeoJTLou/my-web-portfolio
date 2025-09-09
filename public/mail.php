<?php
// Allow only POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["success" => false, "error" => "Invalid request"]);
    exit;
}

// Read the JSON body
$data = json_decode(file_get_contents("php://input"), true);

// Validate fields
$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$subject = trim($data['subject'] ?? '');
$message = trim($data['message'] ?? '');

if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    echo json_encode(["success" => false, "error" => "Missing required fields"]);
    exit;
}

// Set recipient
$to = "leo.jt.lou@gmail.com";

// Email body
$body = "
<html>
  <body style='font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #000;'>
    
    <!-- Subject first, bold -->
    <p style='font-weight: bold; margin-bottom: 20px;'>$subject</p>

    <!-- Message content -->
    <p style='margin-bottom: 20px;'>" . nl2br(htmlspecialchars($message)) . "</p>

    <!-- Signature with name and email -->
    <p style='margin-top: 20px; font-size: 14px; color: #555;'>
      — $name<br>
      $email
    </p>
    
  </body>
</html>
";

// Headers for HTML email
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";

// Send email
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => "Mail function failed"]);
}
?>