import Information from '../pages/information'
import Item from '../pages/item'

const Header = () => {
  return (
    <div className="flex justify-between p-5 shadow-2xl">
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Service_mark.svg/2560px-Service_mark.svg.png" alt="" height={100} width={100}/>
        </div>
        <nav>
            <a className="m-5 text-lg" href="/">Home</a>
            <a className="m-5 text-lg" href="/catalog">Store</a>
            <a className="m-5 text-lg" href="/account">Account</a>
            <a className="m-5 text-lg" href="/information">Information</a>
            <a className="m-5 text-lg" href="/item">Item</a>
        </nav>
        <div>
            <a className="m-5 text-lg" href="/login">Login</a>
            <a href="./cart" className="bg-amber-500 p-3 rounded-lg">Cart</a> 
        </div>
    </div>
  )
}

export default Header;