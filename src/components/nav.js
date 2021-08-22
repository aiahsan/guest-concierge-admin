import React from 'react';
import Icon from '../style/icon';
import { useHistory } from 'react-router-dom';

export default function Header({ title, setshowHeader, showHeader }) {
  const [showDD, setshowDD] = React.useState(false);
  const history = useHistory();
  const [openNav, setopenNav] = React.useState(false);
  return (
    <nav className='navbar navbar-expand-lg navbar-light'>
      <button className='navbar-toggler' onClick={() => setopenNav(!openNav)}>
        <span className='navbar-toggler-icon'></span>
      </button>
      <a
        onClick={() => history.goBack()}
        className='navbar-brand d-flex align-items-center bold'
      >
        <img src='images/arrow-left.png' alt='' className='img-fluid mr-2' />{' '}
        {title}
      </a>
      <a onClick={() => setshowHeader(!showHeader)} className='sidebar-toggle'>
        <i className='fas fa-bars'></i>
      </a>
      <div
        className={`${
          openNav == true
            ? 'collapse navbar-collapse'
            : 'navbar-collapse collapse show'
        }`}
        id='navbarNav'
      >
        <ul className='navbar-nav ml-auto'>
          <li
            className='nav-item'
            style={{ margin: 'auto', maxWidth: '470px' }}
          >
            <div className='position-relative mt-1'>
              <div className='left-icon' onClick={() => history.goBack()}>
                <Icon name='backicon' />
              </div>
              <input
                type='text'
                className='site-input gray-bg py-2 pl-3 pr-5'
                placeholder='Search...'
              />
            </div>
          </li>
          <li className='nav-item mx-3 mt-2'>
            <div className={`dropdown dropleft d-flex justify-content-center`}>
              <button
                className='transparent-btn'
                className={`transparent-btn ${showDD ? 'show' : ''}`}
                type='button'
                id='dropdownMenuButton'
                onClick={() => setshowDD(!showDD)}
              >
                <Icon name='bell' />
                <i className='fas fa-caret-down'></i>
              </button>
              <div
                className={`dropdown-menu ${showDD ? 'show' : ''}`}
                aria-labelledby='dropdownMenuButton'
              >
                <a className='dropdown-item' href='#'>
                  Action
                </a>
                <a className='dropdown-item' href='#'>
                  Another action
                </a>
                <a className='dropdown-item' href='#'>
                  Something else here
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
