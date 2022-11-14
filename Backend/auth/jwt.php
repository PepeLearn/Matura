<?php

class JWT
{

    private $headers;


    private $secret;

    public function __constructor()
    {
        $this->headers = [
            'alg' => 'HS256',
            'typ' => 'JWT',
            'iss' => 'jwt.php',
            'aud' => 'localhost'

        ];

        $this->secret = 'pepe';
    }

    public function generate(array $payload): string
    {  // Generira JWT z  Payloadom
        $headers = $this->encode(json_encode($this->headers)); // zakodira glavo
        $payload['exp'] = time() + 60; // doda cas izteka
        $payload = $this->encode(json_encode($payload)); // zakodira payload
        $signature = hash_hmac('SHA256', "$headers.$payload", $this->secret, true); //ustvari SHA256 podpis
        $signature = $this->encode($signature); // zakodira podpis
        return "$headers.$payload.$signature";
    }
    private function encode(string $str): string
    { //  Zakodira JWT z base64
        return rtrim(strtr(base64_encode($str), '+/', '-_'), '=');
    }
    public function is_valid(string $jwt): bool
    { // Preveri ,  ce je JWT veljaven
        $token = explode('.', $jwt);
        if (!isset($token[1]) && !isset($token[2])) {
            return false;
        }
        $headers = base64_decode($token[0]);
        $payload = base64_decode($token[1]);
        $clientSignature = $token[2];

        if (!json_decode($payload)) {
            return false;
        }
        if ((json_decode($payload)->exp) - time() < 0) {
            return false;
        }
        if (isset(json_decode($payload)->iss)) {
            if (json_decode($payload)->iss != json_decode($headers)->iss) {
                return false;
            }
        } else {
            return false;
        }

        $base64_header = $this->encode($headers);
        $base64_payload = $this->encode($payload);

        $signature = hash_hmac('SHA256', "$base64_header.$base64_payload", $this->secret, true);
        $base64_signature = $this->encode($signature);

        return ($base64_signature === $clientSignature);
    }
}
