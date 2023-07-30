import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { typeState } from './redux-deprecated-createState'

function App() {

  const count = useSelector<typeState, number>(state => state.counter.value);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch({type: 'counter/increment'})
  }

  const handleOnClickAmount = () => {
    dispatch({type: 'counter/incrementAmout', payload: 50})
  }

  const handleOnClickAmount2 = () => {
    dispatch({type: 'counter/incrementAmout', payload: 100})
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