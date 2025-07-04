import ProgressBar from './ProgressBar';
import SongCard from './SongCard';
import useSongStore from '../../store';
import clsx from 'clsx';
import Controls from './Controls/Controls';
import PlayButton from './Controls/PlayButton';
import PreviousButton from './Controls/PreviousButton';
import NextButton from './Controls/NextButton';
import AutoplayButton from './Controls/AutoplayButton';
import RepeatButton from './Controls/RepeatButton';
import { useAutoplay } from '../../hooks/useAutoplay';

export default function MusicPlayer() {
  const { currentSong } = useSongStore((s) => s);
  useAutoplay();
  const playerAnimationStyles = `animate-fade-up animate-duration-500 `;

  return (
    currentSong && (
      <div
        className={clsx(
          'flex h-auto w-full flex-col-reverse items-center justify-between self-end bg-nebula-300 p-2 shadow-lg md:flex-row md:gap-4 md:p-0 dark:bg-nebula-800',
          playerAnimationStyles,
        )}
      >
        <div className="flex items-center justify-around gap-4 text-black md:ml-4">
          <div className="inline md:hidden">
            <AutoplayButton />
          </div>
          <div className="flex items-center">
            <PreviousButton />
            <PlayButton />
            <NextButton />
          </div>
          <div className="inline md:hidden">
            <RepeatButton />
          </div>
        </div>
        <div className="flex w-full flex-grow items-center gap-2 md:justify-between">
          <div className="flex flex-grow items-center gap-2">
            <ProgressBar />
            <Controls />
          </div>
          <div className="flex items-end md:items-start">
            <SongCard song={currentSong} />
          </div>
        </div>
      </div>
    )
  );
}
