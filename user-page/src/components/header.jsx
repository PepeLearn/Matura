import Information from '../pages/information'
import Item from '../pages/item'
import Cookies from 'js-cookie'

const Header = () => {  // misel more fixnit
  return (
    <div className="flex justify-between p-5 shadow-2xl">
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Service_mark.svg/2560px-Service_mark.svg.png" alt="" height={100} width={100}/>
        </div>
        <nav>
            <a className="m-5 text-lg" href="/">Home</a>
            <a className="m-5 text-lg" href="/catalog">Store</a>
            <a className="m-5 text-lg" href="/information">Information</a>
        </nav>
        <div>
            {Cookies.get("authorization") ? <a className="m-5 text-lg" href="/account">My profile</a> : <a className="m-5 text-lg" href="/login">Login</a>}
            <a href="./cart" className="bg-amber-500 p-3 rounded-lg">Cart</a> 
        </div>
    </div>
  )
}

export default Header;