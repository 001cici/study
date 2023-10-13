import React,{ useEffect } from 'react'
// import { createData, dataObj, init } from './data'
import store from '../store/index'
// let init = {
//   count: 0,
//   num: 2
// }

// const dataObj = createData(init)

export default function Index() {
  // const [state, setState] = useState(init)

  useEffect(() => {
    store.subscribe(() => {
      let currentData = store.getState()
      console.log('this data is ', currentData);
      // setState(() => currentData)
    })
  }, [])

  const handleClick1 = () => {
    store.dispatch({ type: 'ADD_COUNT' })
  }

  const handleClick2 = () => {
    store.dispatch({ type: 'MINUS_COUNT' })
  }
  return (
    <div>
      {store.count}
      <button onClick={handleClick1}>+</button>
      <button onClick={handleClick2}>-</button>
    </div>
  )
}
