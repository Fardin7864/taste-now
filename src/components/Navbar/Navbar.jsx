import { useState } from "react";
import "./Navbar.css";
import { FaCartShopping } from "react-icons/fa6";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className=" navbar" style={{ maxWidth: '1280px',}}>
        <div className=" navbar-logo">
          <div className="menu-icon" onClick={toggleMenu}>
            {isOpen ? <CiMenuFries /> : <CiMenuBurger />}
          </div>
          <h3 className="text-praise logo" style={{ width: "50%" }}>
            Taste now
          </h3>
        </div>
        {/* Mobile nav list */}
        <ul className={` mobile-nav-list ${isOpen ? 'block': 'hidden'}`}>
          <li
            style={{
              color: "#F72D57",
              fontWeight: "600",
              marginBottom: '8px'
            }}
          >
            Home
          </li>
          <li style={{marginBottom: '8px'}}>
            <a href="/about" style={{ textDecoration: "none", color: "white", }}>
              About us
            </a>
          </li>
          <li style={{marginBottom: '8px'}}>
            <a href="/blog" style={{ textDecoration: "none", color: "white", }}>
              Blog
            </a>
          </li>
          <li style={{marginBottom: '8px'}}>
            <a
              href="/contact"
              style={{ textDecoration: "none", color: "white", }}
            >
              Contact us
            </a>
          </li>
          <li style={{marginBottom: '8px'}}>
            <button
              style={{
                padding: "8px 20px",
                backgroundColor: "#F72D57",
                border: "none",
                borderRadius: "4px",
                color: "white",
                fontSize: "16px",
              }}
            >
              Sign up
            </button>
          </li>
        </ul>
        <div className="nav-list">
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "30px",
              listStyle: "none",
            }}
          >
            <li
              style={{
                color: "#F72D57",
                fontWeight: "600",
                borderBottom: "3px solid #F72D57",
              }}
            >
              Home
            </li>
            <li>
              <a
                href="/about"
                style={{ textDecoration: "none", color: "black" }}
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="/blog"
                style={{ textDecoration: "none", color: "black" }}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/contact"
                style={{ textDecoration: "none", color: "black" }}
              >
                Contact us
              </a>
            </li>
            <li>
              <FaCartShopping style={{ fontSize: "1.5rem" }} />
            </li>
            <li>
              <button
                style={{
                  padding: "8px 20px",
                  backgroundColor: "#F72D57",
                  border: "none",
                  borderRadius: "4px",
                  color: "white",
                  fontSize: "16px",
                }}
              >
                Sign up
              </button>
            </li>
          </ul>
        </div>
        <div className="mobile-cart">
          <button style={{ backgroundColor: "transparent", border: "none" }}>
            <FaCartShopping style={{ fontSize: "1.5rem" }} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
