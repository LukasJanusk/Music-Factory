import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useViewContext } from '../../context/viewContext';
import { IconButton } from '@mui/material';
import { Heart, HomeIcon, MenuIcon } from 'lucide-react';

export default function NavigationMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { setRoute } = useViewContext();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleNavigateFavorites = () => {
    setAnchorEl(null);
    setRoute('favorites');
  };
  const handleNavigateHome = () => {
    setAnchorEl(null);
    setRoute('home');
  };
  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'navigation-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon className="h-10 w-10 text-nebula-700 md:hidden dark:text-nebula-200" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem onClick={handleNavigateHome}>
          <div className="flex gap-1">
            <HomeIcon /> <span className="text-2xl">Home</span>
          </div>
        </MenuItem>
        <MenuItem onClick={handleNavigateFavorites}>
          <div className="flex gap-1">
            <Heart />
            <span className="text-2xl">Favorites</span>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
