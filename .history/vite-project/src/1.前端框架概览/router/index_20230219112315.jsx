import { createHashRouter } from 'react-router-dom'
import Cpn from '../home'
import Other from '../other'


const router = createHashRouter([
    {   
        path: '/',
        element: <Cpn></Cpn>
    }
])


export default router