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
      light: '#757ce8',
      main: '#751aff',
      dark: '#002884',
      contrastText: '#fff',
      lighter: "#b3ccff"
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
  //   status: {
  //   cancel: "#bbcff2",
  // },
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


// declare module '@mui/material/styles/createPalette' {
//   interface Palette {
//     cancel: Palette['primary'];
//     // twitter: Palette['primary'];
//   }
//   interface PaletteOptions {
//     cancel?: PaletteOptions['primary'];
//     // twitter: PaletteOptions['primary'];
//   }
// }



declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
   cancel: true;
  }
}
// declare module '@mui/material/styles' {
//   interface Theme {
//     status: {
//       cancel: string;
//     };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     status?: {
//       cancel?: string;
//     };
//   }
// }



export default theme
