<?php
// callback.php

// Security headers
header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');

// Get raw POST payload
$payload = file_get_contents('php://input');

// Simple logging to file (optional; make sure log.txt is writable)
file_put_contents('/var/www/html/log.txt', "[" . date('c') . "] " . $payload . PHP_EOL, FILE_APPEND);

// Validate JSON
$data = json_decode($payload, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['ResultCode' => 1, 'ResultDesc' => 'Invalid JSON']);
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
    CURLOPT_TIMEOUT => 10,
]);
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlErr = curl_error($ch);
curl_close($ch);

// Log forwarding result
file_put_contents('/var/www/html/log.txt', "[" . date('c') . "] Forwarded: HTTP $httpCode, Err: $curlErr, Resp: $response" . PHP_EOL, FILE_APPEND);

// Acknowledge M-Pesa
http_response_code(200);
echo json_encode(['ResultCode' => 0, 'ResultDesc' => 'Accepted']);
