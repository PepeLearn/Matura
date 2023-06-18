import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const httpPost = (
    Url,
    data //vir : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  ) => {
    console.log(Url);
    fetch(Url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        alert("account registered succesfully");
        window.location.replace("/login");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("invalid register");
      });
  };
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const validatePhone = (Phone) => {
    return Phone.match(
      /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/ //
    );
  };
  /* 
/^\(?: Številka se lahko začne z odprtim oklepajem.
(\d{3}): Nato je treba vnesti tri številske številke za veljavne formate. Če ni oklepaja, se mora številka začeti s temi števkami.
\)?: Omogoča vam vključitev tesnega oklepaja.
[- ]?: Niz lahko izbirno vsebuje vezaj. Lahko se postavi za oklepaj ali za prvimi tremi števkami. Na primer (123)- ali 123-.
(\d{3}): Potem mora številka vsebovati še tri števke. Na primer, lahko je videti takole: (123)-456, 123-456 ali 123456.
[- ]?: Omogoča vam, da na koncu vključite izbirni vezaj, kot je ta: (123)-456-, -123- ali 123456-.
(\d{4})$/: Končno se mora zaporedje končati s štirimi števkami. Na primer (123)-456-7890, 123-456-7890 ali 123456-7890.
*/

  const validateForm = () => {
    // preveri ce so vsa polja izplonjena v form (temporary, treba zamnejati v prihodnosti)
    if (username === "") {
      // preveri ce je username vnesen
      alert("Username must be filled in!");
      return;
    } else if (password === "") {
      // preveri ce je password vnesen
      alert("Password is required");
      return;
    }
    if (!password === confirmPassword) {
      // preveri ce sta gesla enaka
      alert("Passwords dont match!");
      return;
    }
    if (!validateEmail(email)) {
      alert("Email is invalid");
      return;
    }
    if (Phone !== "") {
      if (!validatePhone(Phone)) {
        alert("Phone number is invalid");
        return;
      }
    }
    var data = {
      password: password,
      username: username,
      email: email,
      phoneNumber: Phone,
      firstName: FirstName,
      lastName: LastName,
    };
    httpPost(
      "http://127.0.0.1/matura-backend/database/database.php?signup=true",
      data
    ); // poslje username, geslo na database.php datoteko, ce je oboje vneseno.
  };
  if (!Cookies.get("authorization")) {
    return (
      <div className="bg-blue-900 min-h-screen w-full flex items-center justify-center px-6 py-8">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="px-10 py-8">
            <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
              Register and start shopping
            </h1>
            <form className="space-y-6" name="login">
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="FirstName"
                    onChange={(e) => setFirstName(e.target.value)}
                    id="FirstName"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="LastName"
                    onChange={(e) => setLastName(e.target.value)}
                    id="LastName"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="Phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                  id="Phone"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="000 000 000"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  name=" username"
                  onChange={(e) => setUsername(e.target.value)}
                  id="username"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password-confirm"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="password-confirm"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  id="password-confirm"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <button
                type="button"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={() => validateForm()}
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?
                <a
                  href="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-2"
                >
                  Log in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    window.location.replace("/");
  }
};

export default Register;
