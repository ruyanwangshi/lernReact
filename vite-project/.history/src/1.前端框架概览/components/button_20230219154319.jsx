import React from 'react'
import { useEffect } from 'react'

function Button(props) {
    useEffect(() => {
        console.log('子组件渲染了')
    })

    return (
        <div onClick={props.changeState}>
            子组件内容
            <div>{props.value}</div>
            {/* <div>{props.count}</div> */}
        </div>
    )
}


export default React.memo(Button) 