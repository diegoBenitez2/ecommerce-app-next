import React from 'react';
import { FaLinkedin, FaFacebook, FaTwitter, FaSkype }
from 'react-icons/fa';
import SignUpMail from '@molecules/SignUpMail/SignUpMail';
import styles from  './Footer.module.scss';

function Footer() {
  return (
    <footer className={`${styles.Footer} bg-dark-primary pt-[53px] px-6  md:px-[80px]`}>
      <div className='md:flex block mb-6'>
        <div className='w-full md:flex md:w-50  '>
          <div className="w-full m-0 text-white text-center md:text-left">
            <h1 className='text-base mb-2'>Avion</h1>
            <p className="text-sm mb-2">
            21 New York Street
            </p>
            <p className="text-sm mb-2">
            New York City
            </p>
            <p className="text-sm mb-2">
            United States of America
            </p>
            <p className="text-sm mb-2">
            432 34
            </p>
          </div>
          <div className="w-full mb-[26px] text-center md:text-left mt-4 md:mt-0  color-white">
            <p className='mb-3'>
              Social links
            </p>
            <div className={`${styles.Menu}__icons flex align-center justify-center md:justify-start color-white`}>
              <FaLinkedin  />
              <FaFacebook  />
              <FaTwitter  />
              <FaSkype  />
            </div>
          </div>
          <div className="text-white text-center w-full md:w-50 md:text-left">
            <p className='text-base mb-2'>
              Menú
            </p>
            <p className="text-sm mb-2">
              New arrivals
            </p>
            <p className="text-sm mb-2">
              Best sellers
            </p>
            <p className="text-sm mb-2">
              Recently viewed
            </p>
            <p className="text-sm mb-2">
              Popular this week
            </p>
            <p className="text-sm mb-2">
              All products
            </p>
          </div>
        </div>
        <div className="w-full mx-auto md:w-50 text-center mt-4 md:mt-0 md:text-left ">
          <p className='text-white mb-2'>
            Join our mailing list
          </p>
          <SignUpMail 
            name={'signUp'}
            theme={['fourtiary', 'primary']} />
        </div>
      </div>
      <div className="text-white py-[20px]  border-t border-primary text-center md:text-left">
        <p className='text-base text-white mb-0'>Copyright 2022 Avion LTD</p>
      </div>
    </footer>
  );
}

export default Footer;