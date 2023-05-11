import Header from '../components/header'
import Footer from '../components/footer'
import { useState, useEffect } from "react"

const Account = () => { 
    const [AccountData, setAccoutData] = useState({
        username: 'pepe',
        email: 'pepe@gmail.com'
    });

useEffect(() => {
    fetch("http://127.0.0.1/matura-backend/database/database.php?getCategories=true&getAccountData=true", { 
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      })
        .then((data) => data.json())
        .then((data) => {
            setAccoutData(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        }); 
  },[]) //vsakic ko se filter changa fetchne producte in jih spremeni 

    return (
      <div>
        <Header/>
        <div className='h-screen'>
            <div>
                <h1 className='text-center text-black font-serif text-5xl pt-20'>Profile</h1>
                <h2 className='text-center text-black font-serif text-2xl pt-10'>
                        <div>{AccountData.username}</div>
                        <div>{AccountData.email}</div>
                </h2>
            </div>
            <div className='h-screen flex flex-col'>
                <div className='h-1/6'>
                  <h1 className='text-left ml-20 mt-10 text-black font-serif text-7xl font-bol drop-shadow-lg shadow-black'>Order History</h1>
                </div>
                <div className='h-3/6 flex justify-center justify-items-center items-center'>
                    <a href="" className='m-2 h-[20rem] w-[30rem] rounded-lg border-2 border-black transition duration-300 ease-in-out hover:scale-105 hover:brightness-50'>
                        <img className='object-cover h-[19.8rem] w-[30rem]' src="https://www.freepnglogos.com/uploads/shoes-png/dance-shoes-png-transparent-dance-shoes-images-5.png" alt="" />
                    </a>
                    <a href="" className='m-2 h-[20rem] w-[30rem] rounded-lg border-2 border-black transition duration-300 ease-in-out hover:scale-105 hover:brightness-50'>
                        <img className='object-cover h-[19.8rem] w-[30rem]' src="https://freepngimg.com/save/19115-shoes-png-picture/891x891" alt="" />
                    </a>
                    <a href="" className='m-2 h-[20rem] w-[30rem] rounded-lg border-2 border-black transition duration-300 ease-in-out hover:scale-105 hover:brightness-50' >
                        <img className='object-cover h-[19.8rem] w-[30rem]' src="https://i.pinimg.com/originals/f4/5f/60/f45f608cc8624fd6404b0aa6df42607f.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
        <Footer/>
      </div>
    )
  }
  
  export default Account;