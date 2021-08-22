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
                  <h1>Check your email</h1>
                </div>
                <p className='mt-3'>
                  To activate your account, please follow the instructions we
                  just sent to email@gmail.com if you’re having trouble finding
                  your email, check your Spam folder and make sure the email you
                  provided is correct.
                </p>
                <p className='mb-0 mt-3'>Email Address</p>
                <p className='mb-0'>email@gmail.com</p>
                <p className='mt-3 mb-0'>
                  Haven’t recieved the confirmatioon email? Please check your
                  junk or spam folder or{' '}
                  <a href='#_' className='blue-text'>
                    Resend Email
                  </a>
                </p>
                <a
                  onClick={() => history.push('')}
                  className='site-btn d-block text-center mt-4 px-4 py-2 w-100'
                >
                  Back to Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>{' '}
    </div>
  );
}
