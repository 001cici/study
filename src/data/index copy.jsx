import React,{ useState, useEffect } from 'react'
import { createData } from './data'
let init = {
  count: 0,
  num: 2
}

const dataObj = createData(init)

export default function Index() {
  const [state, setState] = useState(init)

  useEffect(() => {
    dataObj.subscribe(() => {
      let currentData = dataObj.getData()
      console.log('this data is ', currentData);
      setState(() => currentData)
    })
  }, [])

  const handleClick1 = () => {
    dataObj.modifyData({ count: 0 })
  }

  const handleClick2 = () => {
    dataObj.modifyData({ count: 2 })
  }
  return (
    <div>
      {state.count}
      <button onClick={handleClick1}>changeTo0</button>
      <button onClick={handleClick2}>changeTo2</button>
    </div>
  )
}
