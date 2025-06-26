import { Volume2Icon, VolumeX } from 'lucide-react';
import { useState } from 'react';

export default function VolumeControls() {
  const [volumeOn, setVolumeOn] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [volume, setVolume] = useState(50);

  return (
    <div>
      <div
        className={'rounded-full border-2 border-transparent'}
        onMouseEnter={() => {
          setModalOpen(true);
        }}
        onMouseLeave={() => {
          setModalOpen(false);
        }}
      >
        {volumeOn ? (
          <Volume2Icon
            className="text-nebula-900 dark:text-nebula-100 h-6 w-6"
            onClick={() => setVolumeOn((prev) => !prev)}
          />
        ) : (
          <VolumeX
            className="text-nebula-900 dark:text-nebula-100 h-6 w-6"
            onClick={() => setVolumeOn((prev) => !prev)}
          />
        )}
        {modalOpen && (
          <div className="w-50 absolute bottom-0 flex h-8 -translate-x-[90px] -translate-y-[136px] -rotate-90 items-center justify-center rounded-xl bg-gray-300/30 p-2">
            <input
              value={volume}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setVolume(Number(e.target.value))
              }
              type="range"
              defaultValue={0}
              className="appearance-none rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}
