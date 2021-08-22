import React from 'react';
export default () => {
  const [showdelete, setshowdelete] = React.useState(false);
  return (
    <div>
      {showdelete == false ? (
        <>
          <div className='d-flex mt-3 align-items-center justify-content-between'>
            <p className='d-grey-text medium mb-0 mr-3'>
              Cieden international conference
            </p>
            <div className='d-flex align-items-center'>
              <button className='transparent-btn grey-text mr-3'>
                <img src='images/pencil.png' alt='' className='img-fluid' />
              </button>
              <button
                className='transparent-btn grey-text mr-3'
                onClick={() => setshowdelete(true)}
              >
                <i className='fas fa-trash'></i>
              </button>
            </div>
          </div>
          <hr></hr>
        </>
      ) : (
        <>
          <div className='l-red-bg d-lg-flex align-items-center justify-content-between mt-3 p-3'>
            <p className='d-grey-text medium mb-0'>
              Are you sure you want to delete the Google template?
            </p>
            <div className='d-flex align-items-center mt-3 mt-lg-0'>
              <button
                onClick={() => setshowdelete(false)}
                className='transparent-btn d-grey-text semi-bold mr-3'
              >
                Cancel
              </button>
              <button className='transparent-btn red-text semi-bold'>
                Delete
              </button>
            </div>
          </div>
          <hr></hr>
        </>
      )}
    </div>
  );
};
