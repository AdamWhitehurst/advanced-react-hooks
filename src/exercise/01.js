// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// function countReducer(state, newState) {
// return newCount

// return state + newState

// return {...state, ...newState}

// return typeof newState === 'function'
//   ? newState(state)
//   : {...state, ...newState}
// }

function countReducer(state, action) {
  const {type, step} = action
  if (typeof type !== 'string')
    throw new Error(`action.type must be a string, recieved ${typeof type}`)
  if (typeof step !== 'number')
    throw new Error(`action.step must be a number, recieved ${typeof step}`)
  switch (type) {
    case 'INCREMENT': {
      return {...state, count: state.count + step}
    }
    default: {
      throw new Error(`Unknown action.type given to countReducer: ${type}`)
    }
  }
}

function Counter({initialCount = 0, step = 1}) {
  // const [count, setCount] = React.useReducer(countReducer, initialCount)

  // const [count, changeCount] = React.useReducer(countReducer, initialCount)

  // const [state, setState] = React.useReducer(countReducer, {
  //   count: initialCount,
  // })

  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })

  const {count} = state

  const increment = () => dispatch({type: 'INCREMENT', step})

  // const increment = () => setCount(count + step)

  // const increment = () => changeCount(step)

  // const increment = () => setState({count: count + step})

  // const increment = () =>
  //   setState(currentState => ({count: currentState.count + step}))

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
