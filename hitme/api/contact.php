<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

require_once __DIR__ . '/../config.php';

$raw   = file_get_contents('php://input');
$input = json_decode($raw, true);
if (!is_array($input)) {
    $input = $_POST;
}

// Honeypot check
if (!empty($input['website'])) {
    echo json_encode(['success' => true]);
    exit;
}

// Time check (must be > 3 seconds since page load)
$startTime = isset($input['_formStartTime']) ? (int) $input['_formStartTime'] : 0;
$elapsed   = (int) (microtime(true) * 1000) - $startTime;
if ($elapsed < 3000) {
    echo json_encode(['error' => 'Formularz wypełniony zbyt szybko. Spróbuj ponownie.']);
    exit;
}

$name    = trim($input['name']    ?? '');
$email   = trim($input['email']   ?? '');
$phone   = trim($input['phone']   ?? '') ?: null;
$company = trim($input['company'] ?? '') ?: null;
$subject = trim($input['subject'] ?? '');
$message = trim($input['message'] ?? '');

if (!$name || !$email || !$subject || !$message) {
    echo json_encode(['error' => 'Proszę wypełnić wszystkie wymagane pola.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['error' => 'Nieprawidłowy adres e-mail.']);
    exit;
}

try {
    $conn = getDbConnection();
    $stmt = $conn->prepare(
        'INSERT INTO contact_messages (name, email, phone, company, subject, message)
         VALUES (?, ?, ?, ?, ?, ?)'
    );
    $stmt->execute([$name, $email, $phone, $company, $subject, $message]);
    echo json_encode(['success' => true]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Wystąpił błąd podczas wysyłania. Spróbuj ponownie.']);
}
