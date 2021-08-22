import React from 'react';
import Nav from '../../components/auth/nav';
export default function Signup() {
  return (
    <div>
      <Nav />
      <section className='login'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 col-lg-8 mx-auto'>
              <div className='login-inner p-md-5 p-4'>
                <div className='text-center'>
                  <h1>Forgot Password</h1>
                  <p className='l-grey-text'>
                    It happens ;) Enter your email address and we’ll send you a
                    link to reset your password.
                  </p>
                </div>
                <form>
                  <label for='' className='mt-3'>
                    Email
                  </label>
                  <input type='email' className='site-input py-2 px-3 w-100' />
                  <button
                    type='submit'
                    className='site-btn mt-4 px-4 py-2 w-100'
                  >
                    Send me the link
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
