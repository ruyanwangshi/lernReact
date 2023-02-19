import React from 'react'
import utils from ''


function TestMemo() {
    const [state, setState] = React.useState(123)


    setTimeout(() => {
        setState('home页面重新设置数据')
    }, 1000)
    return (
        <div>
            {state}
        </div>
    )
}



export default TestMemo