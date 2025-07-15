import { useEffect, useState } from 'react';
import { ViewContext, type ROUTES } from './viewContext';

type Props = {
  children: React.ReactNode;
};
export default function ViewProvider({ children }: Props) {
  const [route, setRoute] = useState<ROUTES>('home');

  useEffect(() => {
    const path = '/' + route;
    if (window.location.pathname !== path) {
      window.history.replaceState({}, '', path);
    }
  }, [route]);

  return (
    <ViewContext.Provider value={{ route, setRoute }}>
      {children}
    </ViewContext.Provider>
  );
}
