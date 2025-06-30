import Body from './components/Body';
import Layout from './components/Layout';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import SongsGrid from './components/SongsGrid';
import Topbar from './components/Topbar/Topbar';
import useSongStore from './store';

function App() {
  const currentSong = useSongStore((s) => s.currentSong);
  const setCurrentSong = useSongStore((s) => s.setCurrent);
  return (
    <Layout>
      <Topbar />
      <Body>
        <SongsGrid />
        <button
          onClick={() =>
            setCurrentSong({
              id: '12345',
              name: 'Dreamscape',
              artistName: 'Synthwave Artist',
              albumName: 'Retro Nights',
              albumImage: 'https://example.com/album-image.jpg',
              image: 'https://example.com/song-image.jpg',
              audio: 'https://example.com/audio.mp3',
              audioDownload: 'https://example.com/audio-download.mp3',
              isFavorite: false,
            })
          }
        >
          Set Current
        </button>
        <button onClick={() => setCurrentSong(null)}>remove Current</button>
      </Body>
      {currentSong && <MusicPlayer />}
    </Layout>
  );
}

export default App;
