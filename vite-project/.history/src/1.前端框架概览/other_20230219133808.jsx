import React from 'react'
import { useNavigate } from 'react-router-dom'
import { initState } from '@/utils'
import { useLocation } from 'react-router-dom'
function OtherPage() {
  const routeLink = useNavigate()
  const router = useLocation
  const [state, setState] = React.useState(123)
    console.log('对应页面的路由', router)
  initState('other页面数据', router.pathname).then((res) => {
    setState(res)
  })

  function click(path) {
    routeLink('/')
  }

  return (
    <div>
      <div onClick={click}>去home页面</div>
      <div>{state}</div>
    </div>
  )
}

export default OtherPage
