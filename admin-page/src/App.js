import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/topbar";
import Sidebar from "./scenes/global/sidebar";
import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/team";
// import Products from "./scenes/products";
// import Contacts from "./scenes/contacts";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Bar from "./scenes/bar";
// import Calendar from "./scenes/calendar";


function App() {
    const [theme, colorMode] = useMode();

    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar />
            <main class="content"> 
              <Topbar /> 
              <Routes>
                {
                  /*    to so poti za subpage          
                <Route path ="/" element = {<Dashboard />} />
                <Route path ="/team" element = {<Team />} />
                <Route path ="/contacts" element = {<Contacts />} />
                <Route path ="/products" element = {<Products />} />
                <Route path ="/form" element = {<Form />} />
                <Route path ="/bar" element = {<Bar />} />
                <Route path ="/pie" element = {<Pie />} />
                <Route path ="/line" element = {<Line />} />
                <Route path ="/faq" element = {<FAQ />} />
                <Route path ="/calendar" element = {<Calendar />} />
                */
                }

              </Routes>
            </main>
            </div>;
        </ThemeProvider>
      </ColorModeContext.Provider> 
  );
}

export default App;
