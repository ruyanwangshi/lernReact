import React from 'react'
import {
    initState
} from '@/utils'


function TestMemo() {
    const [state, setState] = React.useState(123)


    utils.initState('home页面数据').then((res) => {
        setState(res)
    })
    return (
        <div>
            {state}
        </div>
    )
}



export default TestMemo