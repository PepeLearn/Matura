<?php
class login
{
    public function login($conn, $request)
    {
        if (!isset($request->password) || !isset($request->username)) {
            return false;
        }
        $password = $request->password;
        $username = $request->username;
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
    public function signup($conn, $request)
    {
        if (!isset($request->password) || !isset($request->username)) {
            return false;
        }
        $password = $request->password;
        $username = $request->username;
        if (preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $password)) //
            return false;                                            //  preveri ce vsebuje nedovljene znake za sql injection
        if (preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $username)) //
            return false;
        $sql = "INSERT INTO users (username,password) VALUES('$username', '$password');"; 
        if ($conn->query($sql)) {
            return true;
        }
    }
}
