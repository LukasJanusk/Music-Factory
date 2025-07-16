import { useEffect } from 'react';
import { useViewContext } from '../context/viewContext';
import useSongStore from '../store';

export function useSwipeNavigation() {
  const { route, setRoute } = useViewContext();
  const { favoriteSongs, query, setSongs, getSongs } = useSongStore((s) => s);

  useEffect(() => {
    let touchStartX = 0;
    const onSwipeRight = async () => {
      if (route === 'home') return;
      await getSongs(query);
      setRoute('home');
    };

    const onSwipeLeft = () => {
      if (route === 'favorites') return;
      setSongs(favoriteSongs);
      setRoute('favorites');
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const deltaX = e.changedTouches[0].clientX - touchStartX;
      if (deltaX > 50) onSwipeRight();
      else if (deltaX < -50) onSwipeLeft();
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [route, setRoute, favoriteSongs, setSongs, query, getSongs]);
}
