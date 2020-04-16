import React from "react";
import "./Header.css";
import bourbon from "../../assets/bourbon.svg";

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-nav'>
        <img className='nav-bourbon' src={bourbon} alt='bourbon-logo' />
        <h1 className='nav-title'>Beast of Bourbon</h1>
      </div>
      <div className='greeting'>
        <h2>Welcome, Bourbon Lover!</h2>
      </div>
      <div>
          <button
            aria-label = 'Favorites'
            className = 'nav-button'
            >
            View Favorites
          </button>
      </div>    
    </div>
  )
}

export default Header;
