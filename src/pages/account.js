import React from 'react';
import LeftBar from '../components/leftbar';
import Nav from '../components/nav';
import { useHistory } from 'react-router-dom';
export default () => {
  const [showFilter, setshowFilter] = React.useState(false);
  const [isLoading, setisLoading] = React.useState(true);
  const history = useHistory();
  const [showHeader, setshowHeader] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      <LeftBar showHeader={showHeader} />
      <div className='main-body'>
        <Nav
          setshowHeader={setshowHeader}
          showHeader={showHeader}
          title='settings'
        />
        <div className='container-fluid px-lg-5 px-4'>
          <div className='row'>
            <div className='col-12 p-lg-5 mt-4 p-4 white-card'>
              <div className='row'>
                <div className='col-xl-8 mt-3 col-lg-10 mx-auto'>
                  <form action='#_'>
                    <div className='row'>
                      <div className='col-lg-9 order-2 order-lg-1 mt-2'>
                        <h2>Account Information</h2>
                        <label htmlFor>First Name</label>
                        <input
                          type='text'
                          defaultValue='Chet'
                          className='site-input w-100 py-2 px-3'
                        />
                        <label htmlFor className='mt-3'>
                          Last Name
                        </label>
                        <input
                          type='text'
                          defaultValue='Faker'
                          className='site-input w-100 py-2 px-3'
                        />
                        <label htmlFor className='mt-3'>
                          Email
                        </label>
                        <input
                          type='email'
                          defaultValue='chetfaker@gmail.com'
                          className='site-input w-100 py-2 px-3'
                        />
                        <label htmlFor className='mt-3'>
                          Company Name
                        </label>
                        <input
                          type='text'
                          defaultValue='Apple Inc.'
                          className='site-input w-100 py-2 px-3'
                        />
                        <h2 className='mt-4'>Change Password</h2>
                        <label htmlFor className='mt-3'>
                          Current Password
                        </label>
                        <div className='position-relative'>
                          <input
                            type='password'
                            className='site-input pr-5 py-2 pl-3 w-100'
                          />
                          <i className='fas fa-eye-slash right-icon' />
                        </div>
                        <label htmlFor className='mt-3'>
                          New Password
                        </label>
                        <div className='position-relative'>
                          <input
                            type='password'
                            className='site-input pr-5 py-2 pl-3 w-100'
                          />
                          <i className='fas fa-eye-slash right-icon' />
                        </div>
                        <button
                          className='site-input px-5 py-2 mt-3 semi-bold'
                          onClick={() => history.push('account-payment')}
                        >
                          Confirm
                        </button>
                      </div>
                      <div className='col-lg-3 order-1 order-lg-2 mt-2'>
                        <div className='edit-profile'>
                          <img
                            src='images/profile-pic.png'
                            alt=''
                            className='img-fluid'
                          />
                          <button className='transparent-btn'>
                            <i className='fas fa-trash' />
                          </button>
                        </div>
                        <label
                          htmlFor='change-pic'
                          className='site-input w-100 text-center semi-bold mt-2 py-2'
                        >
                          Change image
                        </label>
                        <div className='d-none'>
                          <input type='file' name id='change-pic' />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='d-sm-flex py-4 align-items-center justify-content-end'>
            <a
              href='#_'
              className='site-input px-5 mr-sm-2 semi-bold mt-3 d-inline-block py-2'
            >
              Cancel
            </a>
            <a href='#_' className='site-btn px-5 mt-3 d-inline-block py-2'>
              Save
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
