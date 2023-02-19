import React from 'react'

const store = {
  count: 0,
}

function reducer(state, actions) {
    console.log('state=>', state === store, actions)
  switch (actions.type) {
    case 'jia':
      return {...state, count: count + actions.value}
    case 'jian':
        return {...state, count: count + actions.value}
  }
}

const Context = React.createContext({
    count: 0,
  })

export default Context

export { store, reducer }
