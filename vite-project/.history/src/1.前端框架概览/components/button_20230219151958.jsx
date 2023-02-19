import React from 'react'

function Button(props) {
    const state = React.useMemo(() => props)
    return (
        <div>
            子组件内容
            <div>{props.value}</div>
        </div>
    )
}