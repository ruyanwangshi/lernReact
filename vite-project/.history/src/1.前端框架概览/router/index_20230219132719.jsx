import { createHashRouter } from 'react-router-dom'
import Cpn from '../home'
import Other from '../other'


const router = createHashRouter([
    {   
        path: '/',
        element: <Cpn></Cpn>,
        handle() {
            console.log('执行了')
        }
    },
    {
        path: '/other',
        element: <Other></Other>
    }
])


export default router