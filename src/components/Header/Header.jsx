import React from 'react';
import { Link } from 'react-router-dom';
import user from '../../images/user-96.png'
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <div className='logo'>
          Movie App
        </div>
      </Link>
      <img className='user-image' src={user} alt='user' />

    </div>
  );
};

export default Header;