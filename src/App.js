import {
  ColorModeContext,
  useMode,
} from "./theme"; /* Passando as configurações de cor para que possam ser acessadas de qualquer lugar*/

import { CssBaseline, ThemeProvider } from "@mui/material"; // passando o CSS importado do Material UI

import Topbar from "./scenes/global/Topbar"

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar></Topbar>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
