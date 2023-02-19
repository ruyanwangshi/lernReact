import React from 'react'
import { useCallback, useContext, useReducer } from 'react'
import StoreContext, { store as baseStore, reducer } from '@/utils/context';

function Children() {
    const [_, action] = useReducer(baseStore, reducer)
    console.log('children组件', state, action, )
    return (
        <div>
            children组件
        </div>
    )

    // console.log(React.useContext());
}

export default Children