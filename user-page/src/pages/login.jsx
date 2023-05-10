import { useEffect, useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword]= useState("");

  const httpPost = (Url, data) => //vir : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  {
      console.log(Url)
    fetch(Url, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .then((data) => {
        let date = Date.now() + 172800000; //(2 dni) exp time;
        document.cookie = "authorization=" + data.Authorization + ";expires=" + Date(date); // da token v cookie
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }


  const validateForm = () => { // preveri ce so vsa polja izplonjena v form (temporary, treba zamnejati v prihodnosti)

   // if (rememberMe) {
    // rememberMe = true;
   // }
    if (username == "") {  // preveri ce je username vnesen
      alert("Username must be filled in!");
      return false;
    } else if (password == "") { // preveri ce je password vnesen
      alert("Password is required");
      return false;
    }
    var data = {
      "password": password,
      "username": username
    };
    httpPost("http://127.0.0.1/matura-backend/database/database.php?login=true", data) // poslje username, geslo na database.php datoteko, ce je oboje vneseno.
  }
  return (
    <div class="bg-blue-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form class="space-y-4 md:space-y-6" action="#" name="login">
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email or Username</label>
                <input type="bruh" name="email"  onChange={e => setUsername(e.target.value)} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" onChange={e => setPassword(e.target.value)} id="password" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="remember" class="text-gray-500 dark:text-gray-300">
                      Remember me
                    </label>

                  </div>
                </div>
                <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
              </div>
              <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={() => validateForm()}>Sign in</button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?
                <a href="./register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;