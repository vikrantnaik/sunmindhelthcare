import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { CiMenuBurger } from "react-icons/ci";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBurger = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <strong className=" text-primary">Sunmind</strong>HealthCares
          </Link>
        </div>

        <div className="menu-icon" onClick={toggleBurger}>
          <CiMenuBurger size={30} />
        </div>
        <ul className={`nav-links ${isOpen ? "open" : ""} `}>
          <li>
            <Link
              to="/"
              smooth={true}
              duration={500}
              activeClass="active"
              onClick={toggleBurger}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/about'
              smooth={true}
              duration={500}
              activeClass="active"
              onClick={toggleBurger}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="products"
              smooth={true}
              duration={500}
              activeClass="active"
              onClick={toggleBurger}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="order"
              smooth={true}
              duration={500}
              activeClass="active"
              onClick={toggleBurger}
            >
              How to Order
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              activeClass="active"
              onClick={toggleBurger}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="faq"
              smooth={true}
              duration={500}
              activeClass="active"
              onClick={toggleBurger}
            >
              FAQ
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
