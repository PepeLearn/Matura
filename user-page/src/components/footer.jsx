const Footer = () => {
    return (
        <footer className="bg-gray-900 p-10" >
            <div className="flex">
                <div className="w-2/5" >
                    <div className="text-white m-10">About</div>
                    <div className="text-white text-justify m-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, corporis architecto! Iste optio voluptatibus cupiditate quaerat maxime, odit quasi velit cum quia vero vitae, vel suscipit est earum labore officiis!</div>
                </div>
                <div className="grow">
                    <div className="text-white m-10" >Categories</div>
                    <div>
                        <div className="text-white ml-10">Shirts</div>
                        <div className="text-white ml-10">Pants</div>
                        <div className="text-white ml-10">Hats</div>
                        <div className="text-white ml-10">Socks</div>
                    </div>
                </div>
                <div className="grow">
                    <div className="text-white m-10">Quick Links</div>
                    <div className="flex, flex-col">
                        <a className="text-white m-2 text-justify" href="">Login</a>
                        <a className="text-white m-2 text-justify" href="">Register</a>
                        <a className="text-white m-2 text-justify" href="">Shop</a>
                        <a className="text-white m-2 text-justify" href="">Customer support</a>
                        <a className="text-white m-2 text-justify" href="">Home</a>
                    </div>
                </div>
            </div>
            <div>
                <div className="text-white text-center mt-10">Copyright © 2023 All Rights Reserved</div>
            </div>
        </footer>
    )
  }
  
  export default Footer;