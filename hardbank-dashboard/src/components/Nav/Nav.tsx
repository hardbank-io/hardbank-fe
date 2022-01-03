import React from 'react';
import './Nav.css';

const Nav = () => (
  <div className="Nav bg-gray w-24">
    <ul>
      <li className="rounded-full bg-pink">
        Account
      </li>
      <li className="rounded-full bg-pink">
        Dashboard
      </li>
      <li className="rounded-full bg-pink">
        Info
      </li>
    </ul>
  </div>
);

export default Nav;
