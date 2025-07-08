<?php
// Security headers
header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');

// Get raw POST payload
$payload = file_get_contents('php://input');

// --- FIX FOR UPTIMEROBOT ---
// If the payload is empty, it's a health check. Respond with 200 OK and exit.
if (empty($payload)) {
    http_response_code(200);
    echo json_encode(['status' => 'OK', 'message' => 'Health check successful']);
    exit; // Stop the script here.
}

// Log incoming M-PESA payload to Render's standard logs
error_log("M-PESA PAYLOAD RECEIVED: " . $payload);

// Validate JSON
$json = json_decode($payload, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['ResultCode' => 1, 'ResultDesc' => 'Invalid JSON']);
    error_log("EXITING: Invalid JSON received.");
    exit;
}

// Forward to Express backend
$forwardUrl = 'https://task-marketplace-backend.onrender.com/payments/confirm/callback';
$ch = curl_init($forwardUrl);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_TIMEOUT => 15,
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlErr = curl_error($ch);
curl_close($ch);

// Log the full forwarding outcome to Render's standard logs
$logMessage = sprintf(
    "FORWARDED TO EXPRESS: HTTP_CODE=%s, CURL_ERR='%s', RESPONSE='%s'",
    $httpCode,
    $curlErr,
    $response
);
error_log($logMessage);

// Acknowledge receipt to M-PESA
http_response_code(200);
echo json_encode(['ResultCode' => 0, 'ResultDesc' => 'Accepted']);