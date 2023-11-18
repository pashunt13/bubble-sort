import './App.css';
import Items from './components/Items';
import Controller from './components/Controller';

function App() {

  console.log('APP');
  
  return (
    <div className='App'>
      <Controller />
      <Items />
    </div>
  );
}

export default App;
