// import React from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui//material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import theme from "./muiTheme";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import routes from "./routes";
import "./App.css";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  const router = useRoutes(routes);
  return (
    <>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <Box sx={{ display: "flex" }}>
            <SideBar />
            <CssBaseline />
            <NavBar />
            <Box
              component="main"
              sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
            >
              <Toolbar />
              {router}
            </Box>
          </Box>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default App;
