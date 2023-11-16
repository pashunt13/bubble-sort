import { useRef, useState } from 'react';
import './App.css';

function App() {
  const amountRef = useRef<HTMLInputElement>(null);
  const speedRef = useRef<HTMLInputElement>(null);

  const [items, setItems] = useState<number[]>(Array.from(Array(100).keys()));
  const [currentIndex, setCurrentIndex] = useState<number>(-2);

  function shuffle() {
    const amount = Number(amountRef.current?.value);
    const array = Array.from(Array(amount).keys());
    array.sort(() => Math.random() - 0.5);
    setItems([...array]);
  }

  async function sort() {
    const speed = Number(speedRef.current?.value);
    const array = [...items];

    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        setCurrentIndex(j);
        if (array[j] > array[j + 1]) {
          const tmp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = tmp;
          setItems([...array]);
          await new Promise(resolve => setTimeout(resolve, speed));
        }
      }
    }
  }
  
  return (
    <div className='App'>
      <div className='controller-container'>
        <input ref={amountRef} type='text' placeholder='Amount' />
        <input ref={speedRef} type='text' placeholder='Speed (ms)' />
        <button onClick={shuffle}>Shuffle</button>
        <button onClick={sort}>Sort</button>
      </div>

      <ul className='items-container'>
        {items.map((item, index) => {
          return (
            <li 
              className={(currentIndex === index || currentIndex + 1 === index) ? 'item active' : 'item'}
              key={`item-${item}`}
              style={{ height: (item + 1) * 5}}>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
