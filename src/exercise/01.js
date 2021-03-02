// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function countReducer(state, action) {
  const {type, step} = action;
  switch(type) {
    case 'INCREMENT': {
      return {
        ...state, count: state.count + step,
      }
    }
    default: {
      throw new Error(`Unsupported action type of ${type}`);
    }
  }
}

function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  const [state, dispatch] = React.useReducer(countReducer, {count: initialCount});
  const {count} = state;
  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  const increment = () => dispatch(({type: 'INCREMENT', step}));
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
