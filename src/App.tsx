import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Controller from './components/Controller';
import Items from './components/Items';

function App() {
  const [amount, setAmount] = useState(100);
  const [speed, setSpeed] = useState(1);
  const [isSorting, setIsSorting] = useState(false);

  const [items, setItems] = useState(Array.from(Array(100).keys()));
  const [currentIndex, setCurrentIndex] = useState<number>(-2);

  const shuffle = useCallback(() => {
    const array = Array.from(Array(amount).keys());
    array.sort(() => Math.random() - 0.5);
    setItems([...array]);
  }, [amount]);

  const sort = async () => {
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
  };

  useEffect(() => {
    if (!isSorting) return;
    sort();
    setIsSorting(false);
  }, [sort, isSorting]);

  const handleSort = useCallback(() => {
    setIsSorting(true);
  }, []);
  
  return (
    <div className='App'>
      <Controller 
        onAmountChange={setAmount} 
        onSpeedChange={setSpeed}
        onShuffle={shuffle} 
        onSort={handleSort} 
      />
      <Items items={items} currentIndex={currentIndex} />
    </div>
  );
}

export default App;
