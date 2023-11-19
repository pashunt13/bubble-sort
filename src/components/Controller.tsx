import { memo } from 'react';

interface ControllerProps {
  onAmountChange: (num: number) => void;
  onSpeedChange: (num: number) => void;
  onShuffle: () => void;
  onSort: () => void;
}

export default memo(function Controller({ onAmountChange, onSpeedChange, onShuffle, onSort }: ControllerProps) {
  return (
    <div className='controller-container'>
      <input onChange={(e) => onAmountChange(Number(e.target.value))} type='number' placeholder='Amount' />
      <input onChange={(e) => onSpeedChange(Number(e.target.value))} type='number' placeholder='Speed (ms)' />
      <button onClick={onShuffle}>Shuffle</button>
      <button onClick={onSort}>Sort</button>
    </div>
  );
});