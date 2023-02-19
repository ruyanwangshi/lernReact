import { useNavigate } from 'react-router-dom'
import { useRouterTo } from '@/utils/hooks'
import {
    initState
} from '@/utils'

export function useRouterTo(path) {
    const [state, setState] = React.useState(123)


    initState('home页面数据').then((res) => {
        setState(res)
    })
    
    return (
        <div>
            <div onClick={useRouterTo('/home')}>去home页面</div>
            {state}
        </div>
    )
}