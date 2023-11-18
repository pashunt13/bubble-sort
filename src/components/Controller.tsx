import { useState } from 'react';
import '../App.css';
import { useAppSelector, useAppDispatch } from '../store/hook';
import { setItems, setCurrentIndex } from '../slice';

export default function Controller() {
  const [amount, setAmount] = useState<number>(100);
  const [speed, setSpeed] = useState<number>(1);

  const dispatch = useAppDispatch();
  const { items, currentIndex } = useAppSelector(state => state.items);

  function shuffleHandler() {
    const array = Array.from(Array(amount).keys());
    array.sort(() => Math.random() - 0.5);
    dispatch(setItems([...array]));
  }

  async function sortHandler() {
    const array = [...items];

    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        dispatch(setCurrentIndex(j));
        if (array[j] > array[j + 1]) {
          const tmp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = tmp;
          dispatch(setItems([...array]));
          await new Promise(resolve => setTimeout(resolve, speed));
        }
      }
    }
  }

  console.log('CONTROLLER');
  
  return (
    <div className='controller-container'>
      <input 
        type='number' 
        value={amount} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(Number(e.target.value))} 
        placeholder='Amount' 
      />
      <input 
        type='number' 
        value={speed} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSpeed(Number(e.target.value))} 
        placeholder='Speed (ms)' 
      />
      <button onClick={shuffleHandler}>Shuffle</button>
      <button onClick={sortHandler}>Sort</button>
    </div>
  );
}