import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const Navbar = () => {
    const state = useSelector((state) => state.handleCart);

    const buttonStyles = {
        fontSize: '16px',
        fontWeight: 'normal',
        borderRadius: '5px',
        padding: '10px 20px',
        margin: '0 5px',
        color: 'rgb(7, 14, 50)',
        textDecoration: 'none',
        transition: 'color 0.3s ease-in-out',
    };

    const activeButtonStyles = {
        ...buttonStyles,
        fontWeight: 'bold',
    };

    const iconStyles = {
        marginRight: '5px',
            };

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light py-1 sticky-top" style={{
            borderRadius: '30px', margin: '10px 10px', background: '#fff', boxShadow: '0 0 10px rgba(0, 0, 3, 0.5)'
}}>
            <div className="container">
                <NavLink
                    className="navbar-brand fw-bold fs-1 px-1 d-flex align-items-center"
                    to="/"
                    style={{ ...buttonStyles, marginRight: '1px' }}
                >
                    <img
                        src={process.env.PUBLIC_URL + '/assets/logo1.png'}
                        alt="Logo"
                        height={50}
                        style={iconStyles}
                    />
                    𝓓𝑒𝑒𝑟
                </NavLink>
                <button
                    className="navbar-toggler mx-2"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/"
                                exact
                                style={buttonStyles}
                                activeStyle={activeButtonStyles}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/product"
                                style={buttonStyles}
                                activeStyle={activeButtonStyles}
                            >
                                Products
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/about"
                                style={buttonStyles}
                                activeStyle={activeButtonStyles}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/contact"
                                style={buttonStyles}
                                activeStyle={activeButtonStyles}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center" style={{display: "inherit"}}>
                        <DropdownButton
                            title={<i className="fa fa-user-circle" style={{ ...iconStyles, fontSize: '24px' }}></i>}
                            id="dropdown-menu"
                            show={dropdownOpen}
                            onClick={toggleDropdown}
                            className="m-2"
                            style={buttonStyles}
                            menuAlign="right"
                        >
                            <Dropdown.Item as={NavLink} to="/profile">
                                User Profile
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item as={NavLink} to="/login">
                                Login
                            </Dropdown.Item>
                            <Dropdown.Item as={NavLink} to="/register">
                                Register
                            </Dropdown.Item>
                            
                            
                           
                        </DropdownButton>
                        <NavLink to="/cart" className=" m-3" style={{ ...buttonStyles, position: 'relative' }}>
                            <i className="fa fa-cart-shopping" style={{ ...iconStyles, marginRight: '2px' }}></i>
                           <span style={{
                                position: 'absolute',
                                top: '-1px',
                                right: '7px',
                                borderRadius: '100%',
                                padding: '3px',
                                backgroundColor: 'red',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '12px',
                            }}
>
                            {state.length}
                        </span>
                            Cart
                        </NavLink>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
