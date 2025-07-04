import { IconButton } from '@mui/material';
import clsx from 'clsx';
import { HeartMinus, HeartPlusIcon } from 'lucide-react';
import { useRef, useState } from 'react';

type Props = {
  isFavorite: boolean;
  onToggle: () => void;
};

export default function HeartIcon({ isFavorite, onToggle }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hovering, setHovering] = useState(false);
  const heartStyles = clsx(
    hovering && `dark:hover:text-nebula-400 hover:text-nebula-600`,
    `text-nebula-800 dark:text-nebula-100  dark:text-nebula-100 `,
    'transition-all duration-200 ease-in-out',
  );
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onToggle();
  };
  return (
    <div
      ref={ref}
      onClick={handleClick}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
      }}
    >
      {' '}
      <IconButton>
        {isFavorite ? (
          <HeartMinus className={heartStyles} />
        ) : (
          <HeartPlusIcon className={heartStyles} />
        )}{' '}
      </IconButton>
    </div>
  );
}
