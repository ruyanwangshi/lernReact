import React from 'react'

function Button(props) {
    const state = React.useMemo(() => props)
    return (
        <div>
            测试按钮
        </div>
    )
}