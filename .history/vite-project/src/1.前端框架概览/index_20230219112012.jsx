import React from 'react'


function TestMemo() {
    const [state, setState] = React.useState

    return (
        <div>
            {state}
        </div>
    )
}



export default TestMemo