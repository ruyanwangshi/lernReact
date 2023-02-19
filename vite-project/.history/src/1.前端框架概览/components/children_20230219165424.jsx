import React from 'react'
import { useCallback, useContext } from 'react'
import StoreContext from '@/utils/context';

function Children(props) {
    const {_,action} = useContext(StoreContext)
    console.log('children组件', state, action, props)
    return (
        <div>
            children组件{state.count}
        </div>
    )

    // console.log(React.useContext());
}

export default Children