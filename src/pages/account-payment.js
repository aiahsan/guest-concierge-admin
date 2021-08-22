import React from 'react';
import LeftBar from '../components/leftbar';
import Nav from '../components/nav';
export default () => {
  const [showFilter, setshowFilter] = React.useState(false);
  const [isLoading, setisLoading] = React.useState(true);
  const [showDD1, setshowDD1] = React.useState(false);
  const [showHeader, setshowHeader] = React.useState(false);
  const [showDD, setshowDD] = React.useState(false);

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
          title='Payment'
          setshowHeader={setshowHeader}
          showHeader={showHeader}
        />
        <div className='container-fluid px-lg-5 px-4'>
          <div className='row'>
            <div className='col-12 p-lg-5 mt-4 p-4 white-card'>
              <div className='row'>
                <div className='col-xl-3 col-lg-5 mt-3'>
                  <ul className='setting-links'>
                    <li>
                      <a href='#_'>General</a>
                    </li>
                    <li className='mt-3 active'>
                      <a href='#_'>Payment Methods</a>
                    </li>
                    <li className='mt-3'>
                      <a href='#_'>Notifications</a>
                    </li>
                    <li className='mt-3'>
                      <a href='#_'>Change Password</a>
                    </li>
                  </ul>
                </div>
                <div className='col-lg-6 col-xl-4 mt-3'>
                  <h2>Payment Method</h2>
                  <p className='l-grey-text'>
                    Please select your payment method
                  </p>
                  <p className='d-grey-text mb-0 medium'>
                    Prefered payment method
                  </p>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex mt-3 align-items-center'>
                      <input type='radio' name id />
                      <label htmlFor className='mb-0 ml-2'>
                        Card
                      </label>
                      <img
                        src='images/master-card.png'
                        alt=''
                        className='img-fluid ml-2'
                      />
                      <p className='mb-0 ml-2'>******7603</p>
                    </div>
                    <div className='dropdown mt-3'>
                      <button
                        className={`transparent-btn ${showDD ? 'show' : ''}`}
                        type='button'
                        id='dropdownMenuButton'
                        onClick={() => setshowDD(!showDD)}
                      >
                        <i className='fas m-grey-text fa-ellipsis-v' />
                      </button>
                      <div
                        className={`dropdown-menu ${showDD ? 'show' : ''}`}
                        aria-labelledby='dropdownMenuButton'
                      >
                        <a className='dropdown-item' href='#'>
                          Edit
                        </a>
                        <a className='dropdown-item' href='#'>
                          Remove
                        </a>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <p className='d-grey-text mb-0 medium'>Other methods</p>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex mt-3 align-items-center'>
                      <input type='radio' name id />
                      <label htmlFor className='mb-0 ml-2'>
                        ACH
                      </label>
                      <p className='mb-0 ml-2'>Roating code</p>
                      <p className='mb-0 ml-2'>********89</p>
                    </div>
                    <div className='dropdown mt-3'>
                      <button
                        type='button'
                        id='dropdownMenuButton'
                        className={`transparent-btn ${showDD1 ? 'show' : ''}`}
                        onClick={() => setshowDD1(!showDD1)}
                      >
                        <i className='fas m-grey-text fa-ellipsis-v' />
                      </button>
                      <div
                        className={`dropdown-menu ${showDD1 ? 'show' : ''}`}
                        aria-labelledby='dropdownMenuButton'
                      >
                        <a className='dropdown-item' href='#'>
                          Edit
                        </a>
                        <a className='dropdown-item' href='#'>
                          Remove
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='d-sm-flex mt-3 align-items-center'>
                    <button className='site-input py-2 px-3 mt-3 semi-bold mr-sm-3'>
                      Add Method
                    </button>
                    <button className='site-btn py-2 px-4 mt-3'>Save</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
