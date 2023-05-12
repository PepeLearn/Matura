import Header from '../components/header'
import Footer from '../components/footer'
import { useState, useEffect } from "react"
import Cookies from 'js-cookie';

const Account = () => {
  const [AccountData, setAccoutData] = useState({
    username: 'pepe',
    email: 'pepe@gmail.com'
  });
  const [auth,setAuth] = useState(Cookies.get("authorization") ) 
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('pfp', selectedFile);

    fetch('http://127.0.0.1/matura-backend/database/database.php?getAccountData=true', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        alert("success")
      })
      .catch((error) => {
        alert("failed to upload picture")
      });
  };
  

  useEffect(() => {
    fetch("http://127.0.0.1/matura-backend/database/database.php?getAccountData=true", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        'Authorization': auth
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setAccoutData(data);
      })
      .catch((error) => {
        console.error('Error:', error);

      });
  }, []) //vsakic ko se filter changa fetchne producte in jih spremeni  
  const handleLogout = () => { // to dela
    Cookies.remove("authorization");
    console.log("logout pressed");
    window.location.replace("/");
  }
  return (
    <div>
      <Header />
      <div className='h-screen'>
        <div>
          <h1 className='text-center text-black font-serif text-5xl pt-20'>Profile</h1>
          <h2 className='text-center text-black font-serif text-2xl pt-10'>
            <div>{AccountData.username}</div>
            <div>{AccountData.email}</div>
            <div>{AccountData.phoneNumber}</div>
            <div>{AccountData.id}</div>
          </h2>
          <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload PFP</button>
          </div>
        </div>
        <div className='h-screen flex flex-col'>
          <div className='h-1/6'>
            <h1 className='text-left ml-20 mt-10 text-black font-serif text-xl font-bol drop-shadow-lg shadow-black'>Order History</h1>
          </div>
          <div>
            {

            }
          </div>
        </div>
      </div>
      <div>
        <button onClick={handleLogout}>Log out</button>
      </div>
      <Footer />
    </div>
  )
}

export default Account;