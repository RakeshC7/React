import './App.css';
import { useDataContext } from './context/dataContext';

function App() {
  const data = useDataContext();

  return (
    <>
      {data.map((item) => (
        <div key={item.id}>{item.id}</div>
      ))}
    </>
  );
}

export default App;