<?php
require_once "../auth/jwt.php";
class account
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
                'username' => $username,
                'iss' => "jwt.php"
            );
            $generate = new JWT();
            $token = $generate->generate($payload); // generira token z payloadom
            return $token;
        } else // ce sql ne vrne vnosa, vrne false
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

    public function getData($request, $conn){
        $jwt =  new JWT;
        var_dump($request);
            if (!isset($request->token)) // preveri ce je token sploh poslan
            {
                echo "token ne obstaja";
                return false;
            }
            $token = $request->token;
            if (!$jwt->is_valid($token)) // preveri ce je token valid
            {
                echo "token ni valid";
                return false;
            }
            $token = $jwt->decode($token); // razsifrira token
            $token = json_decode($token, 1);
            $password = $token["password"];
            $username = $token["username"];
            $sql = "SELECT * FROM users WHERE password =:pswrd AND username=:usr"; // nesmes uporabit <':usr'> ker nebo deloval (https://www.php.net/manual/en/pdo.prepare.php drugi komentar)
            $statement = $conn->prepare($sql);
            $statement->execute([
            ":pswrd" => $password,
            ":usr" => $username
            ]);
            $info = $statement->fetch();
            $info =  array(
                "Name" => $info["username"],
                "Password" => $info["password"],
                "id" => $info["id"] 
              );
            echo json_encode($info);
            return true;
    }
}
