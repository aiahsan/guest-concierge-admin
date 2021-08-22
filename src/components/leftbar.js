import React from 'react';
import Icon from '../style/icon';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Header = ({ showHeader }) => {
  const history = useHistory();
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 991px)',
  });

  const [showDD, setshowDD] = React.useState(false);
  return (
    <nav
      className='sidebar'
      style={
        showHeader == true
          ? { marginLeft: 0 }
          : !isDesktopOrLaptop
          ? { marginLeft: -265 }
          : { marginLeft: 0 }
      }
    >
      <div className='text-center'>
        <a
          onClick={() => history.push('/invites')}
          className='d-flex pr-5 pl-4'
        >
          <img src='images/logo-sm.png' alt='' className='img-fluid' />
          <p className='white-text text-uppercase ml-3 mb-0'>APPLE INC.</p>
        </a>
        <hr className='grey-line ml-4 mr-5'></hr>
        <div className='dropdown pr-5 pl-4 text-center'>
          <button
            className={`transparent-btn d-flex w-100 justify-content-between align-items-center dropleft ${
              showDD ? 'show' : ''
            }`}
            onClick={() => setshowDD(!showDD)}
            type='button'
            id='dropdownMenuButton'
          >
            <div className='d-flex align-items-center'>
              <img
                src='images/avatar.png'
                alt=''
                className='img-fluid mr-2 avatar'
              />{' '}
              Chet Faker
            </div>
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
        <hr className='grey-line ml-4 mr-5'></hr>
      </div>
      <ul className='pl-0 text-left'>
        <li className='w-100'>
          <a
            onClick={() => history.push('/invites')}
            className='text-uppercase pr-0 m-0 active py-3 pl-4'
          >
            <Icon name='dashboard' />
            DASHBOARD
          </a>
        </li>
        <li className='w-100'>
          <a
            onClick={() => history.push('/invites')}
            className='text-uppercase pr-0 m-0 py-3 pl-4'
          >
            <Icon name='invite' />
            Invitations
          </a>
        </li>
        <li className='w-100'>
          <a
            onClick={() => history.push('/transaction')}
            className='text-uppercase pr-0 m-0 py-3 pl-4'
          >
            <Icon name='transaction' />
            transactions
          </a>
        </li>
        <li className='w-100'>
          <a
            onClick={() => history.push('/account')}
            className='text-uppercase pr-0 m-0 py-3 pl-4'
          >
            <Icon name='setting' />
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
