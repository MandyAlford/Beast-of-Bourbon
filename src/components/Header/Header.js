import React from "react";
import "./Header.css";
import bourbon from "../../assets/bourbon.svg";
import { withRouter } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className='header'>
      <div className='logo-nav' onClick={() => props.history.push(`/`)}>
        <img className='nav-bourbon' src={bourbon} alt='bourbon-logo' />
        <h1 className='nav-title'>Beast of Bourbon</h1>
      </div>
      <div className='greeting'>
        <h2>Welcome, Bourbon Lover!</h2>
          <button
            aria-label = 'Favorites'
            onClick={() => props.history.push(`/favorites`)}
            >
            View Favorites
          </button>
      </div>
    </div>
  )
}

export default withRouter(Header);
