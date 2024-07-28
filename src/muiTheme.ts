import { createTheme } from '@mui/material/styles';
import { Color, Palette, PaletteOptions } from '@mui/material';
import { cancel } from './../node_modules/dom-helpers/esm/animationFrame';


const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: [
        'Yekan-Bakh',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        '"Fira Sans"',
        '"Droid Sans"', 
        '"Helvetica Neue"',
    ].join(',')
  },
    palette: {
    primary: {
      light: '#a66fff',
      main: '#751aff',
      dark: '#5503f0',
      contrastText: '#fff',
      lighter: "#dac4ff"
    },
    secondary: {
      light: '#ecb3ff',
      main: '#d500f9',
      dark: '#6d1b7b',
      contrastText: '#fff',
    },
    cancel: {
      light: '#e6e6e6',
      main: '#b3b3b3',
      dark: '#8c8c8c',
      contrastText: '#fff',
    },
  },
});

declare module '@mui/material/styles' {
  interface PaletteColor {
    lighter?: string;
  }

  interface SimplePaletteColorOptions {
    lighter?: string;
  }
  interface Palette {
    cancel: Palette['primary'];
  }

  interface PaletteOptions {
    cancel?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
   cancel: true;
  }
}




export default theme
