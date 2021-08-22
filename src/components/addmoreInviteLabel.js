import React from 'react';
export default () => {
  return (
    <>
      <div className='grey-bg mt-4 p-3'>
        <div className='row'>
          <div className='col-9'>
            <div className='row'>
              <div className='col-lg-4 mt-2'>
                <p className='mb-0'>Full Name</p>
              </div>
              <div className='col-lg-8 mt-2'>
                <p className='medium mb-0'>Sarah Hamilton</p>
              </div>
              <div className='col-lg-4 mt-2'>
                <p className='mb-0'>Email</p>
              </div>
              <div className='col-lg-8 mt-2'>
                <p className='medium mb-0'>hamilton@gmail.com</p>
              </div>
              <div className='col-lg-4 mt-2'>
                <p className='mb-0'>Dates</p>
              </div>
              <div className='col-lg-8 mt-2'>
                <p className='medium mb-0'>17 Sep 2019 - 27 Sep 2019</p>
              </div>
            </div>
          </div>
          <div className='col-3 text-right'>
            <button className='transparent-btn'>
              <i className='fas fa-trash grey-text' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
