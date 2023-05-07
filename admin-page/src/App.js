import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/topbar";
import Sidebar from "./scenes/global/sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Calendar from "./scenes/calendar/calendar";
import Login from "./Login/login";
import { useState } from "react";
import "./index.css"


function App() {
    const [theme, colorMode] = useMode();
    const [isLogin, setLogin] = useState(false);
    const handleLogin = (params) => {
      fetch("http://127.0.0.1/matura-backend/database/database.php?Login=true", { 
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })
      .then((data) => data.json())
      .then((data) => {
          let date = Date.now() + 172800000; //(2 dni) exp time;
          setLogin = true;
          document.cookie = "authorization=" + data.Authorization + ";expires="+ Date(date); // da toke v cookie
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
    if (isLogin) {
      return (
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div class="app">
              <Sidebar />
                <main class="content"> 
                <Topbar/>
                  <Routes>      
                    <Route path ="/" element = {<Dashboard />} />
                    <Route path ="/team" element = {<Team />} />
                    <Route path ="/contacts" element = {<Contacts />} />
                    <Route path ="/invoices" element = {<Invoices />} />
                    <Route path ="/form" element = {<Form />} />
                    <Route path ="/bar" element = {<Bar />} />
                    <Route path ="/pie" element = {<Pie />} />
                    <Route path ="/faq" element = {<FAQ />} />
                    <Route path ="/calendar" element = {<Calendar />} />
                  </Routes>
                </main>
                </div>
            </ThemeProvider>
          </ColorModeContext.Provider> 
      )
    }
  else {
    return (
      <Login />
    );
  }
    
}



export default App;
