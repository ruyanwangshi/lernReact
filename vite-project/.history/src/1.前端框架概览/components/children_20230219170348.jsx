import React from 'react'
import { useCallback, useContext } from 'react'
import StoreContext from '@/utils/context';

function Children(props) {
    const {state,action} = useContext(StoreContext)
    console.log('children组件', state, action, props)
    return (
        <div>
            children组件{state.count}
            <div>
                子组件去改变全局仓库的状态
                
            </div>
        </div>
    )

    // console.log(React.useContext());
}

export default Children