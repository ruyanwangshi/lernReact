import React from 'react'


function TestMemo() {
    const [state, setState] = React.useState(123)


    setTimeout(() => {
        setState(456)
    }, 1000)
    return (
        <div>
            {state}
        </div>
    )
}



export default TestMemo