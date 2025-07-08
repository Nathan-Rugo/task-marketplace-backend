<?php
// Security headers
header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');

// Get raw POST payload
$payload = file_get_contents('php://input');

// --- DEBUGGING STEP 1 ---
// Log incoming payload to Render's standard logs.
// If you DON'T see this line for a successful payment, it means M-PESA's request timed out.
error_log("M-PESA PAYLOAD RECEIVED: " . $payload);

// Validate JSON
$json = json_decode($payload, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['ResultCode' => 1, 'ResultDesc' => 'Invalid JSON']);
    // Log the exit reason
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
    CURLOPT_TIMEOUT => 15, // Increased timeout to 15s to be safe
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlErr = curl_error($ch);
curl_close($ch);

// --- DEBUGGING STEP 2 ---
// Log the full forwarding outcome to Render's standard logs.
// This will tell us if the Express backend is responding correctly.
$logMessage = sprintf(
    "FORWARDED TO EXPRESS: HTTP_CODE=%s, CURL_ERR='%s', RESPONSE='%s'",
    $httpCode,
    $curlErr,
    $response
);
error_log($logMessage);

// Acknowledge receipt to M-PESA (even if forwarding failed, M-PESA needs a 200 OK)
http_response_code(200);
echo json_encode(['ResultCode' => 0, 'ResultDesc' => 'Accepted']);