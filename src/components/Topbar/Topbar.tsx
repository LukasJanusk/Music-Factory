import BrandLogo from '@/assets/wave-logo.svg?react';
import { Menu } from 'lucide-react';
import Avatar from '@/assets/user.png';
import { NavButton } from './NavButton';
import BrandNameHeader from './BrandNameHeader';
import Search from './Search/Search';

export default function Topbar() {
  return (
    <div className="left-0 top-0 flex min-h-20 w-screen items-center justify-start gap-2 bg-nebula-300 text-nebula-900 dark:bg-nebula-800 dark:text-nebula-100">
      <div className="flex flex-1 items-center justify-start gap-6">
        <div className="flex items-center gap-2 text-nebula-700 dark:text-nebula-200">
          <BrandLogo className="ml-4 h-8 w-8" />
          <BrandNameHeader label="Music Factory" />
        </div>
        <nav className="hidden items-center gap-1 md:flex">
          <NavButton label={'Home'} onClick={() => {}} />
          <NavButton label={'Library'} onClick={() => {}} />
          <NavButton label={'Artists'} onClick={() => {}} />
        </nav>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Search />
      </div>
      <div className="flex flex-1 items-center justify-end">
        <Menu className="mr-4 h-10 w-10 text-nebula-700 md:hidden dark:text-nebula-200" />
        <img className="mr-4 hidden h-8 w-8 md:block" src={Avatar} />
      </div>
    </div>
  );
}
