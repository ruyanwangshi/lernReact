import { createHashRouter, HashRouter } from 'react-router-dom'
import Cpn from '../1.前端框架概览'


const router = HashRouter([
    {   
        path: '/',
        element: <Cpn></Cpn>
    }
])


export default router