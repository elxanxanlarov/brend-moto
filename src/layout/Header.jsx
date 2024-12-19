import { Link, NavLink } from "react-router-dom";
import logoImage from "../../src/assets/image/logo.png";
import menuBtnIcon from "../../src/assets/image/menu-icon.png";
import { IoMdSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
const Header = () => {
  const [menuShow, setMenuShow] = useState(false);
  const closeMenu=()=>{
      setMenuShow(false)

  }
  return (
    <header className="header">
      <div className="my-container">
        <div className="header-con dp-between">
          <div className="menu-side dp-none">
            <div onClick={() => setMenuShow(true)} className="menu-icon">
              <img src={menuBtnIcon} alt="" />
            </div>
            <div className={menuShow ? "menu active" : "menu dp-none"}>
              <div className="menu-con">
                <div onClick={() => setMenuShow(false)} className="close-btn">
                  <IoCloseCircleOutline />
                </div>
                <ul className="links">
                  <li>
                    <NavLink onClick={closeMenu} to="/" className="link">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={closeMenu} to="/about" className="link">
                      ABOUT
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={closeMenu} to="/product-list" className="link">
                      PRODUCT
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={closeMenu} to="/service" className="link">
                      SERVICE
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={closeMenu} to="/" className="link">
                      CAMPAIGN
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={closeMenu} to="/" className="link">
                      CONTACT
                    </NavLink>
                  </li>
                </ul>
                <div className="menu-bottom">
                  <div className="w-100">
                    <div className="icons dp-between">
                      <Link className="search link ">
                        <div className="icon-con">
                          <IoMdSearch className="icon" />
                        </div>
                      </Link>
                      <Link className="profile link ">
                        <div className="icon-con">
                          <CiUser className="icon" />
                        </div>
                      </Link>
                      <Link className="add-to-cart link">
                        <div className="icon-con">
                          <RiShoppingCart2Line className="icon" />
                        </div>
                      </Link>
                      <Link className="add-to-cart link ">
                        <div className="icon-con">
                          <FaRegHeart className="icon" />
                        </div>
                      </Link>
                    </div>
                    <div className="sign-btn">
                      <Link>
                        <button className="btn btn-danger">Sign Up</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="logo-block">
            <img src={logoImage} alt="" />
          </div>
          <ul className="links dp-between rp-none">
            <li>
              <NavLink  to="/" className="link">
                Home
              </NavLink>
            </li>
            <div className="red-cricle"></div>
            <li >
              <NavLink to="/about" className="link">
                ABOUT
              </NavLink>
            </li>
            <div className="red-cricle"></div>
            <li >
              <NavLink to="/product-list" className="link">
                PRODUCT
              </NavLink>
            </li>
            <div className="red-cricle"></div>
            <li >
              <NavLink to="/service" className="link">
                SERVICE
              </NavLink>
            </li>
            <div className="red-cricle"></div>
            <li >
              <NavLink to="/" className="link">
                CAMPAIGN
              </NavLink>
            </li>
            <div className="red-cricle"></div>
            <li >
              <NavLink to="/" className="link">
                CONTACT
              </NavLink>
            </li>
          </ul>
          <div className="header-right dp-align">
            <Link className="search link rp-none">
              <div className="icon-con">
                <IoMdSearch className="icon" />
              </div>
            </Link>
            <Link className="profile link rp-none">
              <div className="icon-con">
                <CiUser className="icon" />
              </div>
            </Link>
            <Link className="add-to-cart link">
              <div className="icon-con">
                <RiShoppingCart2Line className="icon" />
              </div>
            </Link>
            <Link className="add-to-cart link rp-none">
              <div className="icon-con">
                <FaRegHeart className="icon" />
              </div>
            </Link>
            <Link className="rp-none">
              <button className="btn btn-danger">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
