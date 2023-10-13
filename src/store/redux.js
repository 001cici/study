export const createStore = function(reducers, initState) {
  let state = initState
  let listeners = []

  function getState() {
    return state
  }

  function dispatch(action) {
    state = reducers(state,action)
    listeners.forEach(fn => fn())
  }

  dispatch({ type: Symbol() })

  function subscribe(handler) {
    listeners.push(handler)
  }

  return {
    getState,
    dispatch,
    subscribe
  }
}

// 以上是redux核心源代码

export const combineReducer = function(reducers) {
  const keys = Object.keys(reducers)
  return function(state, action) {
    const nextState = {}
    for(let i = 0; i < keys.length; i++) {
      const key = keys[i]
      const reducer = reducers[key]
      const prev = state[key]
      const next = reducer(prev, action)
      nextState[key] = next
    }
    return nextState
  }
}