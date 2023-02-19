import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Cpn from './1.前端框架概览'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Cpn>{}</Cpn>
      <button className='测试依赖'></button>
    </div>
  )
}

export default App
