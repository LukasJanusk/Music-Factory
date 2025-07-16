import BrandLogo from '@/assets/wave-logo.svg?react';
import Avatar from '@/assets/user.png';
import { NavButton } from './NavButton';
import BrandNameHeader from './BrandNameHeader';
import Search from './Search/Search';

import useSongStore from '../../store';
import NavigationMenu from './NavigationMenu';
import { useViewContext } from '../../context/viewContext';

export default function Topbar() {
  const { setSongs, favoriteSongs, getSongs, query } = useSongStore((s) => s);
  const { route } = useViewContext();

  return (
    <div className="flex min-h-20 w-screen items-center justify-start gap-2 bg-nebula-300 pt-[env(safe-area-inset-top)] text-nebula-900 sm:min-h-24 dark:bg-nebula-800 dark:text-nebula-100">
      <div className="flex flex-1 items-center justify-start gap-6">
        <div className="flex items-center gap-2 text-nebula-700 dark:text-nebula-200">
          <BrandLogo className="ml-4 h-8 w-8" />
          <BrandNameHeader label="Music Factory" />
          <div className="absolute left-0 top-[80px] z-10 bg-gray-600/80 px-1 opacity-100 dark:bg-gray-900/80">
            <h1 className="font-semibold text-nebula-100 md:hidden">
              {route.toUpperCase()}
            </h1>
          </div>
        </div>
        <nav className="hidden items-center gap-1 md:flex">
          <NavButton
            label={'home'}
            onClick={async () => {
              await getSongs(query);
            }}
          />
          <NavButton
            label={'favorites'}
            onClick={() => {
              setSongs(favoriteSongs);
            }}
          />
        </nav>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Search />
      </div>
      <div className="flex flex-1 items-center justify-end">
        <NavigationMenu />
        <img className="mr-4 hidden h-8 w-8 md:block" src={Avatar} />
      </div>
    </div>
  );
}
