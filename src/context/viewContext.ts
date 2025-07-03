import { createContext, useContext } from 'react';

export type ROUTES = 'home' | 'favorites';

type ViewContextType = {
  route: ROUTES;
  setRoute: (r: ROUTES) => void;
};

export const ViewContext = createContext<ViewContextType>({
  route: 'home',
  setRoute: () => {},
});

export function useViewContext() {
  return useContext(ViewContext);
}
