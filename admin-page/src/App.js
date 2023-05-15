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
import Login from "./Login/login";
import { useState } from "react";
import "./index.css";
import PrivateRoutes from "./components/PrivateRoutes";
import Cookies from "js-cookie";

function App() {
  const [theme, colorMode] = useMode();
  if (Cookies.get("authorization")) {
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div class="app">
            <Sidebar />
            <main class="content">
              <Topbar />
              <Routes>
                <Route element={<PrivateRoutes />}>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/invoices" element={<Invoices />} />
                  <Route path="/form" element={<Form />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/faq" element={<FAQ />} />
                </Route>
                <Route path="/login" element={<Login />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    );
  }
}

export default App;
