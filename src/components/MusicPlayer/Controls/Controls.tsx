import VolumeControls from './VolumeControls';
import AutoplayButton from './AutoplayButton';
import RepeatButton from './RepeatButton';

export default function Controls() {
  return (
    <div className="hidden md:flex">
      <VolumeControls />
      <AutoplayButton />
      <RepeatButton />
    </div>
  );
}
