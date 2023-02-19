import React from 'react'
import utils from '@/utils'


function TestMemo() {
    const [state, setState] = React.useState(123)


    utils.initState('home页面数据').then(setState)
    return (
        <div>
            {state}
        </div>
    )
}



export default TestMemo