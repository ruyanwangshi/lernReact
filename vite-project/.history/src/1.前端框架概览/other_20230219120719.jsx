import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRouterTo } from '@/utils/routerHooks'
import { initState } from '@/utils'

function OtherPage() {
    const routeLink = useNavigate()
  const [state, setState] = React.useState(123)

  initState('home页面数据').then((res) => {
    setState(res)
  })

  function click(path) {
    routeLink('/home')
  }

  return (
    <div>
      <div onClick={useclick}>去home页面</div>
      <div>{state}</div>
    </div>
  )
}

export default OtherPage
