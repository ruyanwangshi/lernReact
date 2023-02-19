import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRouterTo } from '@/utils/routerHooks'
import { initState } from '@/utils'

function TestMemo() {
    const routerLink = useNavigate()
  const [state, setState] = React.useState(123)

  initState('home页面数据').then((res) => {
    setState(res)
  })

  function click(path) {
    routerLink('/other')
  }

  return (
    <div>
      <div onClick={click}>去other页面</div>
      <div>{state}</div>
    </div>
  )
}

export default TestMemo
