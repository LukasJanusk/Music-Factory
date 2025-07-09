import clsx from 'clsx';
import { useViewContext, type ROUTES } from '../../context/viewContext';

type Props = {
  onClick: () => Promise<void> | void;
  label: ROUTES;
};

export function NavButton({ onClick, label }: Props) {
  const { route, setRoute } = useViewContext();

  const baseButtonStyles =
    'border-2 border-transparent duration-200 group relative overflow-hidden';
  const buttonStyles = clsx(baseButtonStyles);
  return (
    <button
      className={buttonStyles}
      onClick={async (e) => {
        e.stopPropagation();
        await onClick();
        setRoute(label);
      }}
    >
      <span> {label.slice(0, 1).toLocaleUpperCase() + label.slice(1)}</span>
      <div className="flex items-center justify-center">
        {' '}
        <span
          className={clsx(
            'h-[2px] rounded-t bg-nebula-800 transition-all duration-300 dark:bg-nebula-100',
            route === label.toLowerCase() ? 'w-full' : 'w-0',
            route !== label.toLocaleLowerCase() && 'group-hover:w-1/4',
          )}
        />
      </div>
    </button>
  );
}
