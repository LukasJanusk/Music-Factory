import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { PopupProvider } from './context/PopupContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PopupProvider location="bottom-right">
      <App />
    </PopupProvider>
  </StrictMode>,
);
