import React from 'react'
import { useNavigate }  from 'react-router-dom'
import {
    initState
} from '@/utils'


function TestMemo() {
    const [state, setState] = React.useState(123)


    initState('home页面数据').then((res) => {
        setState(res)
    })
    c
    return (
        <div>
            <div>去other页面</div>
            {state}
        </div>
    )
}



export default TestMemo