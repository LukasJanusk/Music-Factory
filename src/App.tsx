import Body from './components/Body';
import Favorites from './components/Favorites';
import Layout from './components/Layout';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import SongsGrid from './components/SongsGrid';
import Topbar from './components/Topbar/Topbar';
import { useViewContext } from './context/viewContext';

function App() {
  const { route } = useViewContext();
  return (
    <Layout>
      <Topbar />
      <Body>{route === 'home' ? <SongsGrid /> : <Favorites />}</Body>
      <MusicPlayer />
    </Layout>
  );
}

export default App;
