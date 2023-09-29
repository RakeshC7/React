import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store/slices/counter';

function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className='text-center'>
      <h1>Counter App Using Redux.</h1>
      <h2>Counter Value is {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default App;