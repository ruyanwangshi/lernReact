import React from 'react'

const store = {
  count: 0,
}

function reducer(state, actions) {
    console.log('state=>', state, actions)
  switch (actions.type) {
    case 'jia':
      Object.assign(state, { count: state.count + actions.value })
      break
    case 'jian':
      Object.assign(state, { count: state.count - actions.value })
  }
}

const Context = React.createContext(store)

export default Context

export { store, reducer }
