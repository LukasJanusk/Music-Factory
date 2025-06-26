import { SkipBack, SkipForward, Play, Pause } from 'lucide-react';
import { useState } from 'react';
import ProgressBar from './ProgressBar';
import VolumeControls from './VolumeControls';

const controlButtonBaseStyles = `h-7 w-7 hover:text-nebula-500 dark:text-nebula-100 transition-all duration-200`;
const playStopButtonBaseStyles = `hover:border-nebula-500 hover:text-nebula-300 dark:hover:text-nebula-700 animate-duration-150 hover:animate-wiggle hover:animate-infinite dark:bg-nebula-100 bg-nebula-600 text-nebula-100 rounded-full border-2 border-transparent p-2 transition-all duration-200 dark:text-nebula-900`;
export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="bg-nebula-500/30 dark:bg-nebula-900/50 animate-fade-up bottom-0 left-0 flex h-20 w-full max-w-[1280px] items-center justify-between gap-2 shadow-lg">
      <div className="ml-4 flex items-center gap-1 text-black">
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
      <div className="flex max-w-[800px] flex-grow items-center gap-1">
        <span className="dark:text-nebula-100">2:20</span>
        <ProgressBar />
        <span className="dark:text-nebula-100">3:00</span>
        <VolumeControls />
        <div className="ml-2 flex min-w-40 items-center gap-1"> </div>
      </div>
      <div className="flex"></div>
    </div>
  );
}
