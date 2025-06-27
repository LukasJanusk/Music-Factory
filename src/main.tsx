import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { PopupProvider } from './context/PopupContext.tsx';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <PopupProvider location="bottom-right">
        <App />
      </PopupProvider>
    </ThemeProvider>
  </StrictMode>,
);
