import Body from './components/Body';
import Layout from './components/Layout';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import Topbar from './components/Topbar/Topbar';
import { usePopup } from './context/popupContext';

function App() {
  const popup = usePopup();
  return (
    <Layout>
      <Topbar />
      <Body>
        <div className="bg-nebula-200 dark:bg-nebula-700 dark:text-nebula-100 flex w-screen items-center justify-center">
          <div className="flex flex-col gap-4">
            <button
              className=""
              onClick={() => popup('error', ' Error message')}
            >
              Error
            </button>
            <button onClick={() => popup('info', 'Notification message')}>
              Alert
            </button>
            <button onClick={() => popup('success', 'Success message')}>
              Success
            </button>
          </div>
        </div>
      </Body>
      <MusicPlayer />
    </Layout>
  );
}

export default App;
