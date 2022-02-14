import React from 'react';
import './Nav.css';
import { UserCircleIcon, BeakerIcon, ChartPieIcon, MenuIcon } from '@heroicons/react/outline'

const Nav = () => (
  <div className="Nav bg-gray flex-shrink-0 hidden w-24 bg-white border-r dark:border-primary-darker dark:bg-darker md:block">
    <ul>
      <li className="flex justify-center hover:bg-gray-light h-16 w-24 items-center cursor-pointer">
        <MenuIcon className="h-10 w-10 p-2 transition-colors hover:text-orange duration-200 text-gray bg-primary-50 focus:outline-none focus:bg-primary-100 focus:ring-primary-darker"/>
      </li>
      <li className="flex justify-center hover:bg-gray-light h-16 w-24 items-center cursor-pointer">
        <UserCircleIcon className="h-10 w-10 p-2 transition-colors hover:text-orange duration-200 text-gray bg-primary-50 focus:outline-none focus:bg-primary-100 focus:ring-primary-darker"/>
      </li>
      <li className="flex justify-center hover:bg-gray-light h-16 w-24 items-center cursor-pointer">
        <BeakerIcon className="h-10 w-10 p-2 transition-colors hover:text-orange duration-200 text-gray bg-primary-50focus:outline-none focus:bg-primary-100 focus:ring-primary-darker" />
      </li>
      <li className="flex justify-center hover:bg-gray-light h-16 w-24 items-center cursor-pointer">
        <ChartPieIcon className="h-10 w-10 p-2 transition-colors hover:text-orange duration-200 text-gray bg-primary-50focus:outline-none focus:bg-primary-100 focus:ring-primary-darker" />
      </li>
    </ul>
  </div>
);

export default Nav;
