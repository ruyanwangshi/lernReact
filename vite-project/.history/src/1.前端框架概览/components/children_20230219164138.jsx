import React from 'react'
import { useCallback, useContext, useReducer } from 'react'
import StoreContext, { baseStore, reducer } from '@/utils/context';

function Children() {
    const store = useContext(StoreContext)
    const action = useReducer(baseStore, reducer)
    console.log('children组件', action)
    return (
        <div>
            children组件
            {store.count}
        </div>
    )

    // console.log(React.useContext());
}