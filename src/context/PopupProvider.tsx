import clsx from 'clsx';
import { X } from 'lucide-react';
import { useState } from 'react';
import { PopupContext } from './popupContext';
import {
  CircleAlertIcon,
  CircleX,
  CircleCheckIcon,
  LightbulbIcon,
} from 'lucide-react';

const ANIMATION_DURATION = 200;
const BASE_DURATION = 3000;

type Props = {
  children: React.ReactNode;
  location:
    | 'top-right'
    | 'top-left'
    | 'top-center'
    | 'bottom-right'
    | 'bottom-left'
    | 'bottom-center';
};
export function PopupProvider({ children, location }: Props) {
  const [popups, setPopups] = useState<
    {
      id: number;
      type: 'success' | 'error' | 'info' | 'alert';
      message: string;
      isClosing: boolean;
    }[]
  >([]);

  const close = (id: number) => {
    setPopups((prev) =>
      prev.map((popup) =>
        popup.id === id ? { ...popup, isClosing: true } : popup,
      ),
    );
    setTimeout(() => {
      setPopups((prev) => prev.filter((popup) => popup.id !== id));
    }, ANIMATION_DURATION);
  };

  const show = (
    type: 'success' | 'error' | 'info' | 'alert',
    message: string,
  ) => {
    const id = Date.now();
    setPopups((prev) => [...prev, { id, type, message, isClosing: false }]);

    setTimeout(() => {
      setPopups((prev) =>
        prev.map((popup) =>
          popup.id === id ? { ...popup, isClosing: true } : popup,
        ),
      );

      setTimeout(() => {
        setPopups((prev) => prev.filter((popup) => popup.id !== id));
      }, ANIMATION_DURATION);
    }, BASE_DURATION - ANIMATION_DURATION);
  };

  const isLeft = location.endsWith('left');
  const isTop = location.startsWith('top');

  const centerAnimationStyles = (isClosing: boolean) =>
    !isClosing
      ? isTop
        ? 'animate-fade-down'
        : 'animate-fade-up'
      : 'animate-fade animate-reverse';

  const sideAnimationStyles = (isClosing: boolean) =>
    !isClosing
      ? isTop
        ? `animate-fade-down`
        : `animate-fade-up`
      : isLeft
        ? `animate-fade-right animate-reverse`
        : `animate-fade-left animate-reverse`;

  const containerPositionStyles = clsx(
    'fixed z-50 flex gap-4',
    location.startsWith('top')
      ? 'top-6 flex-col-reverse'
      : 'bottom-24 flex-col',
    location.endsWith('left') && 'left-2',
    location.endsWith('center') && 'left-1/2 -translate-x-1/2',
    location.endsWith('right') && 'right-2',
  );
  const containerAnimationStyles =
    'transition-all duration-200 animate-in fade-in slide-in-from-top';

  const containerStyles = clsx(
    containerAnimationStyles,
    containerPositionStyles,
  );

  function getPopupStyles(
    type: 'success' | 'error' | 'info' | 'alert',
    isClosing: boolean,
  ) {
    return clsx(
      'relative z-50 min-w-[300px] rounded-lg px-4 py-4 shadow-popup',
      'animate-fade-down animate-duration-200 transform transition-transform',
      {
        'bg-nebula-success text-nebula-900 dark:bg-nebula-success-dark':
          type === 'success',
        'bg-nebula-error text-nebula-100 dark:bg-nebula-error-dark':
          type === 'error',
        'bg-nebula-notification text-nebula-900 dark:bg-nebula-notification-dark':
          type === 'alert',
        'bg-nebula-500 text-nebula-100 dark:bg-nebula-200 dark:text-nebula-900':
          type === 'info',
      },
      isClosing && 'pointer-events-none',
      sideAnimationStyles(isClosing),
      centerAnimationStyles(isClosing),
    );
  }
  return (
    <PopupContext.Provider value={show}>
      {children}

      <div className={containerStyles}>
        {popups.map((popup) => (
          <div
            className={getPopupStyles(popup.type, popup.isClosing)}
            key={popup.id}
          >
            <div className="flex max-w-96 items-start pr-6">
              {
                {
                  info: <LightbulbIcon className="mr-2 h-10 w-10" />,
                  error: <CircleX className="mr-2 h-10 w-10" />,
                  success: <CircleCheckIcon className="mr-2 h-10 w-10" />,
                  alert: <CircleAlertIcon className="mr-2 h-10 w-10" />,
                }[popup.type]
              }

              {popup.message}
              <button
                className="hover:text-red absolute right-1 top-1 animate-duration-100 animate-once hover:text-red-600 active:animate-ping"
                onClick={() => close(popup.id)}
              >
                <X className="w-6" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </PopupContext.Provider>
  );
}
