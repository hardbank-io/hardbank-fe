import React from 'react';
import './Header.css';
import Login from '../Login/Login';

interface HeaderProps {}

const Header = () => (
  <div className="Header h-16 flex justify-between items-center justify-between p-2 border-b dark:border-primary-darker">
    <span className='inline-block text-white text-2xl font-bold tracking-wider uppercase'>HARDBANK</span>
    <Login />
  </div>
);

export default Header;
