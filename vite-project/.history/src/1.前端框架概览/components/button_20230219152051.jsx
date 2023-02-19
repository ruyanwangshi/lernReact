import React from 'react'
import { useEffect } from 'react'

function Button(props) {
    const state = React.useMemo(() => props)

    useEffect(() => {
        console.log('子组件渲染了')
    })

    return (
        <div>
            子组件内容
            <div>{props.value}</div>
        </div>
    )
}


export default Button