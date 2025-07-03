import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { PopupProvider } from './context/PopupProvider.tsx';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import ViewProvider from './context/ViewProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ViewProvider>
        <PopupProvider location="bottom-right">
          <App />
        </PopupProvider>
      </ViewProvider>
    </ThemeProvider>
  </StrictMode>,
);
