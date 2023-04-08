import { ColorModeContext, useMode } from "./theme";
/* Passando as configurações de cor para que possam ser acessadas de qualquer lugar*/
import { CssBaseline, ThemeProvider } from "@mui/material"; // passando o CSS importado do Material UI
import { Routes,Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar"
import Dashboard from "./scenes/dashboard";
 import Team from "./scenes/Team";
// import Invoices from "./scenes/Invoices";
// import Contacts from "./scenes/Contacts";
// import Bar from "./scenes/Bar";
// import Form from "./scenes/Form";
// import Line from "./scenes/Line";
// import Pie from "./scenes/Pie";
// import FAQ from "./scenes/FAQ";
// import Geography from "./scenes/Geography";
// import calendar from "./scenes/calendar";




function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar/>
          <main className="content">
            <Topbar/>
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              { <Route path="/team" element={<Team/>}/> }
              {/* <Route path="/conacts" element={<Team/>}/> */}
              {/* <Route path="/invoices" element={<Dashboard/>}/> */}
              {/* <Route path="/form" element={<Dashboard/>}/> */}
              {/* <Route path="/bar" element={<Dashboard/>}/> */}
              {/* <Route path="/pie" element={<Dashboard/>}/> */}
              {/* <Route path="/line" element={<Dashboard/>}/> */}
              {/* <Route path="/faq" element={<Dashboard/>}/> */}
              {/* <Route path="/geography" element={<Dashboard/>}/> */}
              {/* <Route path="/calendar" element={<Dashboard/>}/> */}



            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
