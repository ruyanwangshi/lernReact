import { createHashRouter } from 'react-router-dom'
import Cpn from '../home'
import Other from '../other'


const router = createHashRouter([
    {   
        path: '/',
        element: <Cpn></Cpn>
    },
    {
        path: '/other',
        element: <Other></Other>
    }
], {

})


export default router