<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="..\CSS\Signup.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <title>Sign up</title>
</head>
<script>
/// vir : https://developer.mozilla.org/en-US/docs/Web/API/Event/type, https://www.w3schools.com/js/js_htmldom_events.asp 
//document.getElementById("u").addEventListener("keypress", UsernameCheck); // doda event listener na html element "u" (username input) in preveri, ce nekdo vnese keyboard input v polje
//document.getElementById("g").addEventListener("keypress", PasswordCheck); // doda event listener na html element "g" (username input) in preveri, ce nekdo vnese keyboard input v polje
///WIP
</script>
<body>
    <div class="ozadje">
        <div class="form-ozadje">
            <h1>Sign up</h1>
            <form method="POST">
                <label for="u">Username</label>
                <input class="poravnava_user" type="text" name="username" id="u"></br></br>
                <label" for="g">Password</label>
                <input class="poravnava_user" type="password" name="password" id="g">
                <input class="poravnava_user" type="password" name="password" id="g">
                <input class="a" type="submit" value="Sign up";></br></br>
                <p>Already have an account??</p></br>
                <a class="text-decoration-none link" href="Login.php">Login</a>
            </form>
        </div>
    </div>
</body>
</html>