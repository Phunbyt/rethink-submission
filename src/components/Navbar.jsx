import React from 'react';
import companyLogo from '../assets/logo-wo-subtitle.png';
import Button from '@material-ui/core/Button';
import { faInfo } from '@fortawesome/free-solid-svg-icons/faInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="company_logo">
        <img src={companyLogo} alt="company_logo" />
      </div>
      <div className="nav_items">
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>About us</li>
        </ul>
      </div>
      <div className="call_to_action">
        <Button
          style={{ background: '#3D55DF', padding: '0.5em 1.5em', color: '#FFFFFF' }}
          className="login_btn"
          startIcon={<FontAwesomeIcon icon={faInfo} />}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
