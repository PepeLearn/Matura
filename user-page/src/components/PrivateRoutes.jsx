import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'js-cookies';

const PrivateRoutes = () => {
  let auth = Cookies.get('authorization') // => 'value'
return (
    auth.token ? <Outlet/> : <Navigate to='/login'/>
  )
}