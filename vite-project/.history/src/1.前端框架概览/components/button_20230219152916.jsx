import React from 'react'
import { useEffect } from 'react'

function Button(props) {
    const state = React.useMemo(() => props, [props])
    console.log('子组件内容', state)
    useEffect(() => {
        console.log('子组件渲染了')
    })

    return (
        <div>
            子组件内容
            {/* <div>{state.value}</div> */}
            <div>{state.count}</div>
        </div>
    )
}


export default React.memo(Button) 