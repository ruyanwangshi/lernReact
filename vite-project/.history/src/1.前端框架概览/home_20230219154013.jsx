import React from 'react'
import { useNavigate, useBeforeUnload } from 'react-router-dom'
import { initState } from '@/utils'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Button from './components/button'

function TestMemo() {
  const routerLink = useNavigate()
  const router = useLocation()
  const [state, setState] = React.useState()
  const [count, setCount] = React.useState(0)

  console.log('对应页面的路由', router)
  function click(path) {
    routerLink('/other')
  }

  useEffect(() => {
    initState('home页面数据', router.pathname).then((res) => {
      setState(res)
    })
  }, [state])

  function change() {
    setCount((count + 1));
  }

  console.log('外层代码如果不加useMemo，每次都会重新计算一边');
  const res_count = useMemo(() => count.toFixed(2), [count]);

  return (
    <div>
      {/* <div onClick={click}>去other页面</div>
      <div>{state}</div> */}

      <div>{res_count}</div>
      <div onClick={change}>改变count</div>

      <Button value={state}></Button>
    </div>
  )
}

export default TestMemo
