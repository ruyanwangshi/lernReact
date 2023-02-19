import { useReducer } from 'react'
import { store, reducer } from './utils/context'
import StoreContext from './utils/context'
import Home from './1.前端框架概览'
import './App.css'

function App() {
    const [state, action] = useReducer(store, reducer)
  return (
    <StoreContext.Provider value={{state, action}}>
        <Home></Home>
    </StoreContext.Provider>
  )
}

export default App
