import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@mui//material/styles";
import SideBar from "./components/SideBar";
import theme from "./muiTheme";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import routes from "./routes";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMomentJalaali } from "@mui/x-date-pickers/AdapterMomentJalaali";
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
          <LocalizationProvider dateAdapter={AdapterMomentJalaali}>
            <SideBar router={router} />
          </LocalizationProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default App;
