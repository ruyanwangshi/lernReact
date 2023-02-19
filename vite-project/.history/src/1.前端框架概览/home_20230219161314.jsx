import React from 'react'
import { useNavigate, useBeforeUnload } from 'react-router-dom'
import { initState } from '@/utils'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Button from './components/button'
import { useCallback } from 'react'

function TestMemo() {
  const routerLink = useNavigate()
  const router = useLocation()
  const [state, setState] = React.useState(0)
  const [count, setCount] = React.useState(0)

  console.log('对应页面的路由', router)
  function click(path) {
    routerLink('/other')
  }

  useEffect(() => {
    // initState('home页面数据', router.pathname).then((res) => {
    //   setState(res)
    // })
  }, [state])

  function change() {
    setCount(count + 1)
  }

  console.log('外层代码如果不加useMemo，每次都会重新计算一边')

  // useMemo就像是 vue 中的计算属性
  const res_count = React.useMemo(() => {
    console.log('除非count发生变化，否则并不会重新计算')
    return count.toFixed(2)
  }, [count])

  function changeState() {
    console.log('执行了', state)
    setState(state + 1)
  }

  // 主要用于传递给子组件的回调函数做缓存使用
  //   const stateHandle = useCallback(changeState,[state])
  // 这个既可以缓存回调函数也可以缓存值
  //   const stateHandle = React.useMemo(() => changeState,[state])

  // 多层级传输
  const StoreContext = React.createContext()

  return (
    <div>
      {/* <div onClick={click}>去other页面</div>
      <div>{state}</div> */}

      <div>{res_count}</div>
      <div onClick={change}>改变count</div>
      <StoreContext.Provider value={state}>
        <Button change={changeState}></Button>
      </StoreContext.Provider>
    </div>
  )
}

export default TestMemo
