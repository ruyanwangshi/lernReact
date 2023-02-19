import { createHashRouter } from 'react-router-dom'
import Cpn from '../1.前端框架概览'


const router = createHashRouter([
    {   
        path: '/',
        element: <Cpn></Cpn>
    }
])