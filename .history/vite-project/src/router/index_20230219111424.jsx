import { createHashRouter, useRoutes } from 'react-router-dom'
import Cpn from '../1.前端框架概览'


const router = useRoutes([
    {   
        path: '/',
        element: <Cpn></Cpn>
    }
])


export default router