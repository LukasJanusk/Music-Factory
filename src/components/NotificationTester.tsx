import { usePopup } from '../context/popupContext';

export default function NotificationTester() {
  const popup = usePopup();
  return (
    <div className="flex flex-col gap-4">
      <button className="" onClick={() => popup('error', ' Error message')}>
        Error
      </button>
      <button onClick={() => popup('info', 'Notification message')}>
        Alert
      </button>
      <button onClick={() => popup('success', 'Success message')}>
        Success
      </button>
    </div>
  );
}
