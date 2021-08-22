import React from 'react';
import Nav from '../../components/auth/nav';
import { useHistory } from 'react-router-dom';

export default function Signup() {
  const history = useHistory();
  return (
    <div>
      <Nav />
      <section className='login'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 col-lg-8 mx-auto'>
              <div className='login-inner p-md-5 p-4'>
                <div className='text-center'>
                  <h1>Sign up</h1>
                  <p className='l-grey-text'>
                    The easiest way to do your business
                  </p>
                  <a href='#_' className='mt-4 d-block'>
                    <img
                      src='images/facebook-btn.png'
                      alt=''
                      className='img-fluid w-100'
                    />
                  </a>
                  <a href='#_' className='mt-4 d-block'>
                    <img
                      src='images/google-btn.png'
                      alt=''
                      className='img-fluid w-100'
                    />
                  </a>
                  <div className='d-flex w-100 align-items-center mt-3'>
                    <img
                      src='images/line.png'
                      alt=''
                      className='img-fluid w-100'
                    />
                    <p className='mb-0 mx-4 l-grey-text'>or</p>
                    <img
                      src='images/line.png'
                      alt=''
                      className='img-fluid w-100'
                    />
                  </div>
                </div>

                <div>
                  <div className='row'>
                    <div className='col-lg-6 mt-3'>
                      <label for='' className='mt-3'>
                        First Name
                      </label>
                      <input
                        type='text'
                        className='site-input py-2 px-3 w-100'
                      />
                    </div>
                    <div className='col-lg-6 mt-3'>
                      <label for='' className='mt-3'>
                        Last Name
                      </label>
                      <input
                        type='text'
                        className='site-input py-2 px-3 w-100'
                      />
                    </div>
                    <div className='col-12 mt-3'>
                      <label for=''>Email</label>
                      <input
                        type='email'
                        className='site-input py-2 px-3 w-100'
                      />
                    </div>
                    <div className='col-12 mt-3'>
                      <label for='' className='mt-3'>
                        Company Name
                      </label>
                      <input
                        type='text'
                        className='site-input py-2 px-3 w-100'
                      />
                    </div>
                    <div className='col-12 mt-3'>
                      <label for=''>Password</label>
                      <div className='position-relative'>
                        <input
                          type='password'
                          className='site-input pr-5 py-2 pl-3 w-100'
                        />
                        <i className='fas fa-eye-slash right-icon'></i>
                      </div>
                    </div>
                  </div>
                  <p className='mt-3 mb-0'>
                    By creating an account, you agree to our <br></br>{' '}
                    <a href='#_' className='blue-text'>
                      Term and Conditions{' '}
                    </a>
                  </p>
                  <button
                    onClick={() => history.push('/mail-confirm')}
                    className='site-btn mt-4 px-4 py-2 w-100'
                  >
                    Sign Up
                  </button>
                  <p className='text-center mt-3 mb-0'>
                    Already have an account?{' '}
                    <a onClick={() => history.push('/')} className='blue-text'>
                      Log in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
