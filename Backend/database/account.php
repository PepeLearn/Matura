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
        $sql = "SELECT * FROM users WHERE password =:pswrd AND username=:usr"; // nesmes uporabit ':usr' ker nebo deloval (https://www.php.net/manual/en/pdo.prepare.php drugi komentar)
        $statement = $conn->prepare($sql);
        $statement->execute([
            ":pswrd" => $password,
            ":usr" => $username
        ]);
        $result = $statement->fetchAll();
        if ($result) {   //https://stackoverflow.com/questions/48538738/how-to-check-fetched-result-set-is-empty-or-not
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
        $sql = "SELECT * FROM users WHERE password =:pswrd AND username=:usr"; // nesmes uporabit ':usr' ker nebo deloval (https://www.php.net/manual/en/pdo.prepare.php drugi komentar)
        $statement = $conn->prepare($sql);
        $statement->execute([
            ":pswrd" => $password,
            ":usr" => $username
        ]);
        $result = $statement->fetchAll();
        if ($result) {   //https://stackoverflow.com/questions/48538738/how-to-check-fetched-result-set-is-empty-or-not
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
        if (preg_match('/[\'^£$%&*()}{#~?<>,|=_+¬-]/', $password)) //
            return false;                                            // preveri za nedovoljene znake
        if (preg_match('/[\'^£$%&*()}{#~?<>,|=_+¬-]/', $username)) //
            return false;
        $sql = "INSERT INTO users (username,password) VALUES(:username, :password);";
        $statement = $conn->prepare($sql);
        if ($statement->execute([
            ':password' => $password,
            ':username' => $username
        ])) {
            return true;
        }
    }
}
