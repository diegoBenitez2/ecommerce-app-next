import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { BsCart3, BsSearch } from 'react-icons/bs';
import { HiBars4 } from 'react-icons/hi2';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={`py-6 px-3 bg-white flex align-center justify-between`}>
      <p className='text-primary-light'>Avion</p>
      <div className={`${styles.Header__nav} flex align-center justify-between text-sm text-primary-light`}>
        <div className="hidden align-center justify-between text-primary-light   sm:flex">
          <a className='no-underline' href="#about-us">About us</a>
          <a className='no-underline' href="#contact">Contact</a>
          <a className='no-underline' href="#blog">Blog</a>
        </div>
        <div className={`ml-[72px] flex items-center justify-between`}>
          <BsSearch className={`${styles.Header__icons_icon} fill-dark-primary cursor-pointer hover:fill-border-dark`} />
          <BsCart3 className={`${styles.Header__icons_icon} fill-dark-primary cursor-pointer hover:fill-border-dark`} />
          <FaUserCircle className={`${styles.Header__icons_icon} fill-dark-primary cursor-pointer hover:fill-border-dark`} />
          <HiBars4 className={`${styles.Header__icons_icon} fill-primary-light cursor-pointer hover:fill-border-dark sm:hidden w-[1.5rem] h-[1.5rem] ml-4`} />

        </div>
      </div>
    </header>
  );
}

export default Header;