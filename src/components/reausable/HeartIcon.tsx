import clsx from 'clsx';
import { Heart, HeartMinus, HeartPlusIcon } from 'lucide-react';
import { useRef, useState } from 'react';

type Props = {
  isFavorite: boolean;
  onToggle: () => void;
};

export default function HeartIcon({ isFavorite, onToggle }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hovering, setHovering] = useState(false);
  const heartStyles = clsx(
    `text-nebula-800 hover:text-nebula-600 dark:text-nebula-500 dark:hover:text-nebula-400`,
    'transition-all duration-200 ease-in-out',
  );
  return (
    <div
      ref={ref}
      onClick={onToggle}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
      }}
    >
      {' '}
      {hovering ? (
        isFavorite ? (
          <HeartMinus className={heartStyles} />
        ) : (
          <HeartPlusIcon className={heartStyles} />
        )
      ) : (
        <Heart className={heartStyles} />
      )}
    </div>
  );
}
