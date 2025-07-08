<?php
// Set a default content type.
header('Content-Type: application/json');

// --- STEP 1: LOG EVERY SINGLE REQUEST, NO MATTER WHAT ---
// This is our ultimate debugging tool. It will tell us if ANY request is reaching the server.
$requestMethod = $_SERVER['REQUEST_METHOD'];
$requestUri = $_SERVER['REQUEST_URI'];
error_log(sprintf("[Request Received] Method: %s, URI: %s", $requestMethod, $requestUri));


// --- STEP 2: HANDLE HEALTH CHECKS CORRECTLY ---
// UptimeRobot uses GET or HEAD. M-PESA always uses POST.
// If it's not a POST request, we assume it's a health check.
if ($requestMethod !== 'POST') {
    http_response_code(200);
    // Send a simple text response that UptimeRobot can understand as "OK".
    echo "OK"; 
    error_log("[Health Check] Responded with OK.");
    exit; // Stop the script. We are done.
}

error_log("[M-PESA POST] Processing POST request...");

// Security headers for the real response
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');

// Get raw POST payload
$payload = file_get_contents('php://input');
error_log("[M-PESA POST] Payload: " . $payload);

// Validate payload presence
if (empty($payload)) {
    http_response_code(400);
    $errorResponse = json_encode(['ResultCode' => 1, 'ResultDesc' => 'Bad Request: Empty payload']);
    echo $errorResponse;
    error_log("[M-PESA POST] EXITING: Empty payload received.");
    exit;
}

// Validate JSON
$json = json_decode($payload, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    $errorResponse = json_encode(['ResultCode' => 1, 'ResultDesc' => 'Invalid JSON']);
    echo $errorResponse;
    error_log("[M-PESA POST] EXITING: Invalid JSON received.");
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
    CURLOPT_TIMEOUT => 28,
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlErr = curl_error($ch);
curl_close($ch);

// Log the forwarding outcome
$logMessage = sprintf(
    "[M-PESA POST] Forwarded to Express: HTTP_CODE=%s, CURL_ERR='%s', RESPONSE='%s'",
    $httpCode,
    $curlErr,
    $response
);
error_log($logMessage);

// Acknowledge receipt to M-PESA. This MUST be a valid JSON response.
http_response_code(200);
echo json_encode(['ResultCode' => 0, 'ResultDesc' => 'Accepted']);