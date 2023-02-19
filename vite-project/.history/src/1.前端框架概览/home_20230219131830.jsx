import React from 'react'
import { useNavigate, useBeforeUnload } from 'react-router-dom'
import { initState } from '@/utils'
import { useCallback } from 'react'
import { useEffect } from 'react'

function TestMemo() {
  const routerLink = useNavigate()
  const [state, setState] = React.useState(123)

  useBeforeUnload(useCallback(() => {
    console.log('执行了', state)
    localStorage.stuff = state
  }, [state]))

  function click(path) {
    routerLink('/other')
  }

  useEffect(() => {
    initState('home页面数据').then((res) => {
      setState(res)
    })
    if (state === 123 && localStorage.stuff !== null) {
      localStorage.stuff = state
    }
  }, [state])

  return (
    <div>
      <div onClick={click}>去other页面</div>
      <div>{state}</div>
    </div>
  )
}

export default TestMemo
