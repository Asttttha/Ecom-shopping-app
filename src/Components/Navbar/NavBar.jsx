import * as React from "react";
import "./navbar.css";
import logo from "../../Assets/urbane-high-resolution-logo-transparent.png";
// import { RiShoppingBag3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { MdHomeFilled } from "react-icons/md";
import { BsInfo } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import { MdContacts } from "react-icons/md";
import { TbShoppingCartHeart } from "react-icons/tb";
import { BsBoxSeam } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

function NavBar() {
  const [active, setActive] = React.useState("navBar");

  const displayNav = () => {
    setActive("navBar activeNavbar");
  };

  const closeNav = () => {
    setActive("navBar");
  };
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <img src={logo} alt="logo" className="logoImg" />
        </div>
        <div className={active}>
          <ul className="navList flex">
            <li className="navItem">
              <a href="/home" className="navLink flex">
                <MdHomeFilled className="icon" />
                <h4>Home</h4>
              </a>
            </li>
            <li className="navItem">
              <a href="/about" className="navLink flex">
                <BsInfo className="icon" /> <h4> About</h4>
              </a>
            </li>
            <li className="navItem">
              <a href="/shop" className="navLink flex">
                <AiOutlineShopping className="icon" />
                <h4>Shop</h4>
              </a>
            </li>
            <li className="navItem">
              <a href="/contact" className="navLink flex">
                <MdContacts className="icon" /> <h4>Contact</h4>
              </a>
            </li>
            <li className="navItem">
              <a href="/orders" className="navLink flex">
                <BsBoxSeam className="icon" /> <h4>Orders</h4>
              </a>
            </li>
            <li className="navItem">
              <a href="/likes-and-cart" className="navLink flex">
                <TbShoppingCartHeart className="icon" /> <h4>Likes and cart</h4>
              </a>
            </li>
            <li className="navItem">
              <a href="/account" className="navLink flex">
                <CgProfile className="icon" /> <h4>Account</h4>
              </a>
            </li>
          </ul>

          <div onClick={closeNav} className="closeNav">
            <IoMdClose className="icon" />
          </div>
        </div>
        <div onClick={displayNav} className="toggleNavbar">
          <BsThreeDots className="icon" />
        </div>
      </header>
    </section>
  );
}

export default NavBar;
