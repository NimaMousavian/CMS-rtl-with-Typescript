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
import { motion, AnimatePresence } from 'framer-motion';

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
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const transition = {
    y: {
      type: "spring",
      stiffness: 70,
      damping: 18,
      duration: 0.05
    },
    opacity: { duration: 1 , ease: "easeInOut" }
  };

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterMomentJalaali}>
          <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
            <motion.div
              initial={false}
              animate={{ y: loading ? 0 : '-100vh', opacity: loading ? 1 : 0.8}}
              transition={transition}
              style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 10 }}
            >
              <div className="loading-container" style={{ height: '100vh', width: '100vw' }}>
                <Logo
                  logoSrc="/images/logo/shodamad-logo-gray.webp"
                  onAnimationComplete={() => { }}
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ y: '100vh', opacity: 0 }}
              animate={{ y: loading ? '100vh' : 0, opacity: loading ? 0 : 1 }}
              transition={transition}
              style={{ height: '100vh', width: '100vw' }}
            >
              <SideBar router={router} />
            </motion.div>
          </div>
        </LocalizationProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;