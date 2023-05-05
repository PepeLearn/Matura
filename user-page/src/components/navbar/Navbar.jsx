import React from "react";
import '../navbar/navbar.css'

const Navbar = () => {
    return (
        <div className="m-100">
            <nav>
                <a href="">Home</a>
                <a href="">Store</a>
                <a href="">About us</a>
                <a href="">Features</a>
            </nav>
            <div class="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Service_mark.svg/2560px-Service_mark.svg.png" alt="logo" width="120" height="45" />
            </div>
            <div class="profile">
                <a href="">Account</a>
            </div>
        </div>
    )
}

export default Navbar