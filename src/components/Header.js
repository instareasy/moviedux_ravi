import React from 'react';
import '../styles.css';

export default function Header() {
     return (
          <div className='header'>
               <img className='logo' src='logo.png' alt='moviedux' />
               <h2 className='ap-subtitle'>It's time for popcorn! </h2>
          </div>
     );
}