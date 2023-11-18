import { useAppSelector } from '../store/hook';
import '../App.css';

export default function Items() {
  const { items, currentIndex } = useAppSelector(state => state.items);

  console.log('ITEMS');

  return (
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
  );
}