import React from 'react'
import { useCallback, useContext, useReducer } from 'react'
import { store, reducer } from '@/utils/context';
import { useEffect } from 'react'
import Children from './children'

function Button(props) {
    // const store = useContext()
    // console.log('祖父组件中的内容', store)
    useEffect(() => {
        console.log('子组件渲染了')
    })

    function click() {
        console.log('子组件时间执行了', props.change)
        props.change()
    }

    return (
        <div onClick={click}>
            子组件内容
            <div>{props.value}</div>
            {/* <div>{props.count}</div> */}
            <Children></Children>
        </div>
    )
}


export default React.memo(Button) 