import React from 'react'

const store = {
  count: 0,
}

function reducer(state, actions) {
  switch (actions.type) {
    case 'jia':
      Object.assign(state, { count: count + 1 })
      break
    case 'jian':
      Object.assign(state, { count: count - 1 })
  }
}

const Context = React.createContext(store)

export default Context

export { store, reducer }
