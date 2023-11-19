interface ItemsProps {
  items: number[];
  currentIndex: number;
}

export default function Items({ items, currentIndex }: ItemsProps) {
  console.log('RENDER ITEMS');
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