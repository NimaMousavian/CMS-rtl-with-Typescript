
import React, { useState, useEffect } from 'react';
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import SideBar from "./components/SideBar";
import theme from "./muiTheme";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import routes from "./routes";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMomentJalaali } from "@mui/x-date-pickers/AdapterMomentJalaali";
import Logo from './components/logo/Logo';
import "./App.css";



const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});



function App() {
  const [loading, setLoading] = useState(true);
  const router = useRoutes(routes);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterMomentJalaali}>
          {loading ? (
            <div className="loading-container">
              <Logo
                logoSrc="/images/logo/logo-01.png"
                onAnimationComplete={() => { }}
              />
            </div>
          ) : (
            <SideBar router={router} />
          )}
        </LocalizationProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;