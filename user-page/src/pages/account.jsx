import Header from "../components/header";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const Account = () => {
  const [AccountData, setAccoutData] = useState({});
  const [auth, setAuth] = useState(Cookies.get("authorization"));
  const [selectedFile, setSelectedFile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [accountId,setAccountID] = useState("");

  useEffect(() => {
    fetch(
      "http://127.0.0.1/matura-backend/database/database.php?getAccountData=true",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          Authorization: auth,
        },
      }
    )
      .then((data) => data.json())
      .then((data) => {
        setAccoutData(data);
        setPhoneNumber(data.phoneNumber);
        setEmail(data.email);
        setUsername(data.username);
        setAccountID(data.id);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []); //vsakic ko se filter changa fetchne producte in jih spremeni


  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    console.log(formData);
    fetch('http://127.0.0.1/matura-backend/database/database.php?changeProfileImage=true', {
      method: 'POST',
      headers: {
        Authorization: auth
      },
      body: formData,
    })
      .then((response) => {
        alert("success");
      })
      .catch((error) => {
        alert("failed to upload picture");
      });
  };
  const validateEmail = (email) => {
    return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

  const handleEdit = () => {
    if (editMode)
      setEditMode(false);
      else
    setEditMode(true);
  }
  const handleSubmit = () => {
    if (username === "") {  // preveri ce je username vnesen
      alert("Username must be filled in!");
      return;
      } 
    if  (!validateEmail(email)){
      alert("Email is invalid!");
      return;
    }
    var data = {
      "phoneNumber": phoneNumber,
      "username": username,
      "email" : email,
      "id" : accountId
      };
      fetch('http://127.0.0.1/matura-backend/database/database.php?changeAccountData=true', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Authorization: auth,
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          alert("success");
        })
        .catch((error) => {
          alert("updated profile succesfully!");
        });
  }
  const handleLogout = () => {
    // to dela
    Cookies.remove("authorization");
    console.log("logout pressed");
    window.location.replace("/");
  };
  if (AccountData.email)
  {
  return (
    <div className="h-auto">
      <Header />
      <div className="h-screen mb-20">
        <div className="h-60 ml-10 mr-10 mt-10 -mb-20 bg-yellow-500"></div>
        <div className="flex justify-center mt-20">
          <div className="w-[90rem] h-[46.5rem] -m-20  bg-white shadow-2xl">
            <div className="m-10 text-2xl	border-b-2 pb-5 border-gray-300">
              Account Settings
            </div>
            <div className="flex justify-center mt-10">
              <div className="h-[35rem] w-[80rem]">
                <div>
                  <div className="float-right">
                    <div className="bg-gray-100">
                      <input type="file" onChange={handleFileChange} />
                      <button onClick={handleUpload}>Upload PFP</button>
                    </div>
                    <img src={"http://127.0.0.1/matura-backend/profile/images/"+AccountData.id+".png"} alt="profile_picture" />
                  </div>
                  <div>
                    <div className="text-3xl	m-5">Username:</div>
                    <div className="text-2xl	m-5 border-2 border-gray-300 w-1/4">
                      {editMode ? <input type="text"onChange={e => setUsername(e.target.value)}  placeholder={AccountData.username}></input> : AccountData.username  }
                    </div>
                    <div className="text-3xl	m-5">E-mail:</div>
                    <div className="text-2xl	m-5 border-2 border-gray-300 w-1/4">
                      {editMode ? <input type="text" onChange={e => setEmail(e.target.value)} placeholder={AccountData.email}></input> : AccountData.email  }
                    </div>
                    <div className="text-3xl	m-5">Phone number:</div>
                    <div className="text-2xl	m-5 border-2 border-gray-300 w-1/4">
                      {editMode ? <input type="number" onChange={e => setPhoneNumber(e.target.value)} placeholder={AccountData.phoneNumber ? AccountData.phoneNumber : null}></input>:(AccountData.phoneNumber ? AccountData.phoneNumber : <div> No phone number</div>)}
                    </div>
                  </div>
                  <div>
                    {editMode ? <div><button onClick={handleSubmit}>Sumbit changes </button></div> : null}
                    <div>
                      <button onClick={handleEdit}>Edit</button>
                    </div>
                    <div className="text-3xl	m-5 pt-20 mt-20 ">
                      <button onClick={handleLogout}>Log out</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
};

export default Account;
