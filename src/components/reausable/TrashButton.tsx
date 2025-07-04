import { IconButton } from '@mui/material';
import clsx from 'clsx';
import { Trash2Icon } from 'lucide-react';
import { useState } from 'react';

type Props = {
  onClick: () => void;
};

export default function TrashButton({ onClick }: Props) {
  const [hovering, setHovering] = useState(false);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClick();
  };
  const animationStyles = `${hovering ? 'animate-wiggle' : 'animate-none'}`;
  const fillStyles = `${hovering ? 'text-nebula-error dark:text-nebula-error-dark' : 'text-nebula-900 dark:text-nebula-100'}`;
  return (
    <IconButton
      onClick={handleClick}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <Trash2Icon className={clsx(animationStyles, fillStyles)} />
    </IconButton>
  );
}
