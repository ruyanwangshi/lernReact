import { useNavigate } from 'react-router-dom'


export function useRouterTo(path) {
    const routerLink = useNavigate()
    routerLink(path)
}