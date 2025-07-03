import clsx from 'clsx';
import { usePopup } from '../context/popupContext';

export default function NotificationTester() {
  const popup = usePopup();
  const buttonStyles =
    'border-2 hover:border-blue-400 border-transparent w-20 rounded';
  return (
    <div className="flex flex-col items-center gap-4">
      <button
        className={clsx(buttonStyles, 'bg-nebula-error')}
        onClick={() => popup('error', ' Error message')}
      >
        Error
      </button>
      <button
        className={clsx(buttonStyles, 'bg-nebula-300')}
        onClick={() => popup('info', 'Notification message')}
      >
        Info
      </button>
      <button
        className={clsx(buttonStyles, 'bg-nebula-success')}
        onClick={() => popup('success', 'Success message')}
      >
        Success
      </button>
      <button
        className={clsx(buttonStyles, 'bg-nebula-notification')}
        onClick={() => popup('alert', 'Alert message')}
      >
        Alert
      </button>
    </div>
  );
}
