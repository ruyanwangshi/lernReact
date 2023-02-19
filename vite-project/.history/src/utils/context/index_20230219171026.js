import React from 'react'

const store = {
  count: 0,
}

function reducer(state, actions) {
    console.log('state=>', state === store, actions)
  switch (actions.type) {
    case 'jia':
      Object.assign(store, { count: state.count + actions.value })
      break
    case 'jian':
      Object.assign(store, { count: state.count - actions.value })
  }
}

const Context = React.createContext(store)

export default Context

export { store, reducer }
