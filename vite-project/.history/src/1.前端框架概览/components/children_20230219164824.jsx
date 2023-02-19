import React from 'react'
import { useCallback, useContext } from 'react'
import StoreContext from '@/utils/context';

function Children() {
    const {state,action} = useContext(StoreContext)
    console.log('children组件', state, action, )
    return (
        <div>
            children组件
        </div>
    )

    // console.log(React.useContext());
}

export default Children