import './App.css'
import { useDispatch } from 'react-redux'
import { increment, incrementAmout } from './features/counter/counter-slice';
import { useAppSelector } from './hooks';

function App() {

  const count = useAppSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(increment());
  }

  const handleOnClickAmount = () => {
    dispatch(incrementAmout(25));
  }

  const handleOnClickAmount2 = () => {
    dispatch(incrementAmout(50));
  }

  return (
    <>
      <h1>Redux Example</h1>
      <div className="card">
        <button onClick={handleOnClick}>
          count is {count}
        </button>
        <button onClick={handleOnClickAmount}>
          count is {count}
        </button>
        <button onClick={handleOnClickAmount2}>
          count is {count}
        </button>
      </div>      
    </>
  )
}

export default App;