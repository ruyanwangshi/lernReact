import { useRouterTo } from '@/utils/routerHooks'
import {
    initState
} from '@/utils'

export function useRouterTo(path) {
    const [state, setState] = React.useState(123)


    initState('other页面数据').then((res) => {
        setState(res)
    })
    
    return (
        <div>
            <div onClick={useRouterTo('/home')}>去home页面</div>
            <div>{state}</div>
        </div>
    )
}