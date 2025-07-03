import { createContext, useContext } from 'react';

export const PopupContext = createContext<
  (type: 'success' | 'error' | 'info' | 'alert', message: string) => void
>(() => {});

export function usePopup() {
  return useContext(PopupContext);
}
