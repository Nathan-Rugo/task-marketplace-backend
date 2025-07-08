<?php
// callback.php

$payload = file_get_contents('php://input');

// Forward to Express backend (your Render Node.js URL)
// Replace with your actual Express URL, e.g. https://your-node-service.onrender.com
$forwardUrl = 'https://task-marketplace-backend.onrender.com/payments/confirm/callback';

$ch = curl_init($forwardUrl);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
    CURLOPT_POSTFIELDS => $payload,
]);
curl_exec($ch);
curl_close($ch);

// Acknowledge M-Pesa
header('Content-Type: application/json');
http_response_code(200);
echo json_encode(['ResultCode' => 0, 'ResultDesc' => 'Accepted']);
