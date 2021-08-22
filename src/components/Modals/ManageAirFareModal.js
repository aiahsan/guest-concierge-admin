import React from 'react';
import { Modal, ModalBody } from 'react-bootstrap';
import Icon from '../../style/icon';
const ManageAirFareModal = (props) => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      className=''
    >
      <div className='admin-modal'>
        <ModalBody>
          <i
            className='fas fa-times close modal-close'
            data-dismiss='modal'
            aria-label='Close'
          ></i>
          <div className='text-left'>
            <div className='d-flex align-items-center'>
              <img src='images/plane.png' alt='' className='img-fluid mr-3' />
              <h2>Airfare</h2>
            </div>
            <p className='mt-4 mb-0 medium'>
              What class of air service?{' '}
              <i className='fas fa-info-circle grey-text'></i>
            </p>
            <div
              className='btn-group-toggle mt-3 pay-check'
              data-toggle='buttons'
            >
              <label className='btn w-100 py-2 h-auto active'>
                <input type='checkbox' checked />
                Economy
              </label>
              <label className='btn w-100 py-2 h-auto'>
                <input type='checkbox' />
                Premium Economy
              </label>
              <label className='btn w-100 py-2 h-auto'>
                <input type='checkbox' />
                First Class
              </label>
            </div>
            <p className='mt-4 mb-0 medium'>
              Maximum airfare without approval?{' '}
              <i className='fas fa-info-circle grey-text'></i>
            </p>
            <div className='row'>
              <div className='col-lg-4 mt-2 col-12'>
                <div className='input-group mb-0'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text' id='basic-addon1'>
                      $
                    </span>
                  </div>
                  <input
                    type='number'
                    value='200'
                    className='form-control site-input py-2 px-3'
                    aria-describedby='basic-addon1'
                  />
                </div>
              </div>
            </div>
            <p className='mt-4 mb-0 medium'>
              If we notice the possibility of a flight cancellation or delay, do
              you want us to proactively move this traveler's flight to get them
              there or home quicker?
            </p>
            <div
              className='btn-group-toggle mt-3 pay-check'
              data-toggle='buttons'
            >
              <label className='btn w-100 py-2 h-auto active'>
                <input type='checkbox' checked />
                Yes
              </label>
              <label className='btn w-100 py-2 h-auto'>
                <input type='checkbox' />
                No
              </label>
            </div>
            <p className='mt-4 mb-0 medium'>
              By default, we will search the following airports. Please adjust
              any expected drive times.{' '}
            </p>
            <div className='position-relative mt-2 w-100'>
              <div className='left-icon'>
                <Icon name='backicon' />
              </div>
              <input
                type='text'
                className='site-input w-100 py-2 pl-3 pr-5'
                placeholder='Add another airport...'
              />
            </div>
            <img
              src='images/map-bg.png'
              alt=''
              className='img-fluid mt-3 w-100'
            />
            <div className='d-flex mt-3 align-items-center justify-content-end'>
              Showing airports{' '}
              <input
                type='number'
                value='200'
                className='site-input px-3 py-2 mx-3 w-45'
              />{' '}
              miles away
            </div>
            <div className='d-flex mt-3 justify-content-between align-items-center'>
              <p className='mb-0 mr-3'>
                <input type='checkbox' id='stopover' name='radio-group' />
                <label for='stopover' className='bordered mb-0'>
                  JFK (John F Kennedy International)
                </label>
              </p>
              <button className='transparent-btn'>
                <i className='fas grey-text fa-trash'></i>
              </button>
            </div>
            <hr></hr>
            <div className='d-flex justify-content-between align-items-center'>
              <p className='mb-0 mr-3'>
                <input type='checkbox' id='stopover' name='radio-group' />
                <label for='stopover' className='bordered mb-0'>
                  LGA (LaGuardia Airport)
                </label>
              </p>
              <button className='transparent-btn'>
                <i className='fas grey-text fa-trash'></i>
              </button>
            </div>
            <hr></hr>
            <div className='d-flex justify-content-between align-items-center'>
              <p className='mb-0 mr-3'>
                <input type='checkbox' id='stopover' name='radio-group' />
                <label for='stopover' className='bordered mb-0'>
                  EWR (Newark Liberty Intl)
                </label>
              </p>
              <button className='transparent-btn'>
                <i className='fas grey-text fa-trash'></i>
              </button>
            </div>
            <hr></hr>
            <div className='d-flex justify-content-between align-items-center'>
              <p className='mb-0 mr-3'>
                <input type='checkbox' id='stopover' name='radio-group' />
                <label for='stopover' className='bordered mb-0'>
                  HPN (Westchester County)
                </label>
              </p>
              <button className='transparent-btn'>
                <i className='fas grey-text fa-trash'></i>
              </button>
            </div>
            <hr></hr>
            <div className='d-flex justify-content-between align-items-center'>
              <p className='mb-0 mr-3'>
                <input type='checkbox' id='stopover' name='radio-group' />
                <label for='stopover' className='bordered mb-0'>
                  ISP (Long Island MacArthur Islip)
                </label>
              </p>
              <button className='transparent-btn'>
                <i className='fas grey-text fa-trash'></i>
              </button>
            </div>
            <div className='d-sm-flex align-items-center justify-content-end'>
              <button
                className='site-input mr-sm-3 mt-3 px-5 py-2'
                data-dismiss='modal'
                aria-label='Close'
              >
                Cancel
              </button>
              <button
                className='site-btn px-4 py-2 mt-3'
                data-dismiss='modal'
                aria-label='Close'
              >
                Save Changes
              </button>
            </div>
          </div>
        </ModalBody>
      </div>
    </Modal>
  );
};

export default ManageAirFareModal;
