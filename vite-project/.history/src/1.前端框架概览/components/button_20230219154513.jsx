import React from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'

function Button(props) {
    const changeState = useCallback(() => props.changeState, [props.changeState])
    useEffect(() => {
        console.log('子组件渲染了')
    })

    function click() {
        changeState()
    }

    return (
        <div onClick={click}>
            子组件内容
            <div>{props.value}</div>
            {/* <div>{props.count}</div> */}
        </div>
    )
}


export default React.memo(Button) 