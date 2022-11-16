<!DOCTYPE html>
<html lang="en">
<head> 
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="..\CSS\Login.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <title>Login</title>
</head>
<script>
function httpGetAsync(theUrl, callback)  //vir : https://stackoverflow.com/questions/247483/http-get-request-in-javascript
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
   /// xmlHttp.send();  ni dokoncano 6.12 11/15/2022
}
//function (token)
//{
//}
function validateForm() { // preveri ce so vsa polja izplonjena
  let usernname = document.forms["login"]["username"].value; 
  let usernname = document.forms["login"]["password"].value;
  if (username == "") {
    alert("Username must be filled in!");
    return false;
  } else if (password == ""){ 
    alert("Password is required");
    return false;
  }
  httpGetAsync("localhost/database/database.php" )
}
</script>
<body>
    <div class="ozadje">
        <div class="form-ozadje">
            <h1>Login</h1>
            <form method="POST" onsubmit="return validateForm()" name="login">
                <label for="u">Username</label>
                <input class="poravnava_user" type="text" name="username" id="u"></br></br>
                <label" for="g">Password</label>
                <input class="poravnava_user" type="password" name="password" id="g">
                <input class="a" type="submit" value="login";></br></br>
                <p>Dont have an account yet?</p></br>
                <a class="text-decoration-none link" href="Signup.php">Sign up</a>
            </form>
        </div>
    </div>
</body>
</html>