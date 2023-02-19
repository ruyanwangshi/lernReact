import React from 'react'


function TestMemo() {
    const [state, setState] = React.useState(123)

    return (
        <div>
            {state}
        </div>
    )
}



export default TestMemo