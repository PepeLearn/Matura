function httpPost(theUrl, data) //vir : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
{

  fetch(theUrl, { 
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((data) => data.json())
    .then((data) => {
        document.cookie = "authorization=" + data.authorization + "expires"; // da toke v cookie
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}


function validateForm() { // preveri ce so vsa polja izplonjena v form (temporary, treba zamnejati v prihodnosti)
  let username = document.forms["login"]["username"].value;
  let password = document.forms["login"]["password"].value;
  if (username == "") {  // preveri ce je username vnesen
    alert("Username must be filled in!");
    return false;
  } else if (password == "") { // preveri ce je password vnesen
    alert("Password is required");
    return false;
  }
  var data = {
    "password" : password,
    "username" : username
  };
  httpPost("https://127.0.0.1/matura/Backend/database/database.php?login=true", data) // poslje username, geslo na database.php datoteko, ce je oboje vneseno.
}