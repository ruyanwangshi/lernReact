import React from 'react'
import { useCallback, useContext } from 'react'
import StoreContext from '@/utils/context';

function Children(props) {
    // const {state,action} = useContext(StoreContext)
    const [value, setValue] = React.useState(0)
    // console.log('children组件', state, action, props)

    // function changeState() {
    //     action({
    //         type: 'jia',
    //         value: 1
    //     })
    // }
    return (
        <div>
            {/* children组件{state.count}
            <div onClick={changeState}>
                子组件去改变全局仓库的状态
            </div> */}
            children自己的状态{value}
            <div onClick={() => setValue(value + 1)}>children改变自己的状态</div>
        </div>
    )

    // console.log(React.useContext());
}

export default React.memo(Children)