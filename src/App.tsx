import Body from './components/Body';
import Layout from './components/Layout';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import SongsGrid from './components/SongsGrid';
import Topbar from './components/Topbar/Topbar';

function App() {
  return (
    <Layout>
      <Topbar />
      <Body>
        <div className="bg-nebula-200 dark:bg-nebula-700 dark:text-nebula-100 flex w-screen items-center justify-center">
          <SongsGrid />
        </div>
      </Body>
      <MusicPlayer />
    </Layout>
  );
}

export default App;
