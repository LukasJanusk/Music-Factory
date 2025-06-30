import { createTheme } from '@mui/material/styles';

const nebulaPalette = {
  nebula100: '#FFF2FF',
  nebula200: '#FABBFE',
  nebula300: '#EA81F8',
  nebula400: '#CA46E6',
  nebula500: '#9B12C4',
  nebula600: '#71069D',
  nebula700: '#4D0175',
  nebula800: '#2E004E',
  nebula900: '#140026',
  nebulaPrimary: '#9B12C4',
  nebulaSuccess: '#88FFCC',
  nebulaError: '#FF4E8E',
  nebulaNotification: '#FFE8A3',
  nebulaSuccessDark: '#4ED9A4',
  nebulaErrorDark: '#D8366E',
  nebulaNotificationDark: '#E6B877',
};

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: nebulaPalette.nebulaPrimary,
      light: nebulaPalette.nebula200,
      dark: nebulaPalette.nebula700,
    },
    success: {
      main: nebulaPalette.nebulaSuccess,
      dark: nebulaPalette.nebulaSuccessDark,
    },
    error: {
      main: nebulaPalette.nebulaError,
      dark: nebulaPalette.nebulaErrorDark,
    },
    warning: {
      main: nebulaPalette.nebulaNotification,
      dark: nebulaPalette.nebulaNotificationDark,
    },
    background: {
      default: nebulaPalette.nebula100,
      paper: nebulaPalette.nebula200,
    },
    text: {
      primary: nebulaPalette.nebula900,
      secondary: nebulaPalette.nebula700,
    },
  },
});

export default theme;
