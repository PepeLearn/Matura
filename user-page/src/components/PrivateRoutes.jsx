import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie';

const PrivateRoutes = () => {
  let auth = Cookies.get('authorization') // => 'value'
return (
    auth ? <Outlet/> : <Navigate to='/login'/>
  )
}
export default PrivateRoutes;