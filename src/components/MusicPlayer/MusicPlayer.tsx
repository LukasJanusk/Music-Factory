import { SkipBack, SkipForward, Play, Pause } from 'lucide-react';
import { useState } from 'react';
import ProgressBar from './ProgressBar';
import VolumeControls from './VolumeControls';
import SongCard from './SongCard';
import useSongStore from '../../store';

const controlButtonBaseStyles = `h-7 w-7 hover:text-nebula-500 dark:text-nebula-100 transition-all duration-200`;
const playStopButtonBaseStyles = `hover:border-nebula-500 hover:text-nebula-300 dark:hover:text-nebula-700 animate-duration-150 hover:animate-wiggle hover:animate-infinite dark:bg-nebula-100 bg-nebula-600 text-nebula-100 rounded-full border-2 border-transparent p-2 transition-all duration-200 dark:text-nebula-900`;
export default function MusicPlayer() {
  const current = useSongStore((s) => s.currentSong);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="bottom-0 left-0 flex h-20 w-full animate-fade-up items-center justify-between gap-4 bg-nebula-300 shadow-lg dark:bg-nebula-800">
      <div className="ml-4 flex items-center justify-end gap-1 text-black">
        <SkipBack className={controlButtonBaseStyles} />
        <div className={playStopButtonBaseStyles}>
          {isPlaying ? (
            <Play
              className="h-8 w-8"
              onClick={() => setIsPlaying((prev) => !prev)}
            />
          ) : (
            <Pause
              className="h-8 w-8"
              onClick={() => setIsPlaying((prev) => !prev)}
            />
          )}
        </div>
        <SkipForward className={controlButtonBaseStyles} />
      </div>
      <div className="flex flex-grow items-center gap-3">
        <ProgressBar />

        <VolumeControls />
      </div>
      <div className="flex items-start">
        <SongCard song={current} />
      </div>
    </div>
  );
}
