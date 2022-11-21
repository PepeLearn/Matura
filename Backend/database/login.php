<?php
class login
{
    public function login($conn, $payload)
    {
        if (!isset($payload['password']) || !isset($payload['username'])) {
            return false;
        }
        $password = $payload['password'];
        $username = $payload['username'];
        $sql = "SELECT * FROM users WHERE password ='$password'AND username='$username'";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $payload = array( // doda username in password k payloadu
                'password' => $password,
                'username' => $username
            );
            $generate = new JWT();
            $token = $generate->generate($payload); // generira token z payloadom
            return $token;
        } else // ce sql ne vrne vnosa, vrne kodo 401 (unauthorised) v http header
        {
            return false;
        }
    }
}
