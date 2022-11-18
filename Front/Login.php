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
  /// vir : https://developer.mozilla.org/en-US/docs/Web/API/Event/type

 // document.getElementById("submit").addEventListener('click', validateForm(), false); // doda event listener na html element "submit" (form button) in preveri, ce nekdo klikne na element.

  function saveToSession(response) //vir : https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
  {

    sessionStorage.setItem("Authorisation Bearer : ", token); // shrani token v session
    window.location.replace = "http://127.0.0.1/matura/Front/home.php"; // redirecta na home potem ko se je shranlo v session
  }

  function httpGetAsync(theUrl, username, password, httpGetAsync) //vir : https://stackoverflow.com/questions/247483/http-get-request-in-javascript
  {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        saveToSession(xmlHttp.responseText); // shrani response v session
    }
    xmlHttp.open("GET", theUrl + "?username=" + username + "&password=" + password, false); // true for asynchronous 
    xmlHttp.send(username, password);
    console.log(username)
    console.log(password)
    xmlHttp.onload = () => {
      console.log(xmlHttp.responseURL); // vir : https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseURL
    }
  }

  function validateForm() { // preveri ce so vsa polja izplonjena
    let username = document.forms["login"]["username"].value;
    let password = document.forms["login"]["password"].value;
    if (username == "") {
      alert("Username must be filled in!");
      return false;
    } else if (password == "") {
      alert("Password is required");
      return false;
    }
    httpGetAsync("http://127.0.0.1/matura/Backend/database/database.php", username, password) // poslje username, geslo na database.php datoteko, ce je oboje vneseno.
  }
</script>

<body>
  <div class="ozadje">
    <div class="form-ozadje">
      <h1>Login</h1>
      <form method="GET" name="login">
        <label for="u">Username</label>
        <input class="poravnava_user" type="text" name="username" id="u"></br></br>
        <label" for="g">Password</label>
          <input class="poravnava_user" type="password" name="password" id="g">
          <input class="a" type="button" value="login" id ="submit" onclick="validateForm()"></br></br>
          <p>Dont have an account yet?</p></br>
          <a class="text-decoration-none link" href="Signup.php">Sign up</a>
      </form>
    </div>
  </div>
</body>

</html>