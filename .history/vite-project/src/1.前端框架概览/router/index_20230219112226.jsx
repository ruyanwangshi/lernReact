import { createHashRouter } from 'react-router-dom'
import Cpn from '..'


const router = createHashRouter([
    {   
        path: '/',
        element: <Cpn></Cpn>
    }
])


export default router