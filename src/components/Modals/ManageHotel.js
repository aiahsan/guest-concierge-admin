import React from 'react';
import { Modal, ModalBody } from 'react-bootstrap';
import Icon from '../../style/icon';
const ManageHotel = (props) => {
  const [expand, setexpan] = React.useState(false);
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
          <i className='fas fa-times close modal-close' />
          <div className='text-left'>
            <div className='d-flex align-items-center'>
              <img src='images/hotel.png' alt='' className='img-fluid mr-3' />
              <h2>Hotel</h2>
            </div>
            <p className='mt-4 mb-0 medium'>Who selects the hotel?</p>
            <div className='row'>
              <div className='col-lg-8'>
                <div
                  className='btn-group-toggle mt-3 pay-check'
                  data-toggle='buttons'
                >
                  <label
                    onClick={() => setexpan(false)}
                    className={`${
                      expand == false ? 'active' : ''
                    } btn w-100 py-2 px-3 h-auto `}
                  >
                    <input type='checkbox' defaultChecked />
                    Autoselect hotel using rules
                  </label>
                  <label
                    onClick={() => setexpan(true)}
                    className={`${
                      expand == true ? 'active' : ''
                    } btn w-100 py-2 px-3 h-auto `}
                  >
                    <input type='checkbox' />
                    Guest picks the hotel
                  </label>
                </div>
              </div>
            </div>
            <p className='mt-4 mb-0 medium'>Which hotels should be used?</p>
            <div className='row'>
              <div className='col-lg-8'>
                <div
                  className='btn-group-toggle mt-3 pay-check'
                  data-toggle='buttons'
                >
                  <label className='btn w-100 py-2 px-3 h-auto active'>
                    <input type='checkbox' defaultChecked />
                    Only the hotels I list
                  </label>
                  <label className='btn w-100 py-2 px-3 h-auto'>
                    <input type='checkbox' />
                    Any hotels in the market (subject to certain limits)
                  </label>
                </div>
              </div>
            </div>

            {expand == true ? (
              <>
                {' '}
                <p className='mt-4 mb-0 medium'>
                  What is the maximum hotel cost per night?
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
                        defaultValue={200}
                        className='form-control site-input py-2 px-3'
                        aria-describedby='basic-addon1'
                      />
                    </div>
                  </div>
                </div>
                <p className='mt-4 mb-0 medium'>
                  What is the maximum distance from your event location?
                </p>
                <div className='row'>
                  <div className='col-lg-4 mt-2 col-12'>
                    <div className='input-group mb-0'>
                      <input
                        type='number'
                        defaultValue={200}
                        className='form-control site-input py-2 px-3'
                        aria-describedby='basic-addon1'
                      />
                      <div className='input-group-append'>
                        <span className='input-group-text' id='basic-addon2'>
                          miles
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className='mt-4 mb-0 medium'>
                  What is the minimum star rating?
                </p>
                <div className='d-flex mt-3'>
                  <i className='fas fa-star bg-star yellow-text' />
                  <i className='fas fa-star bg-star yellow-text' />
                  <i className='fas fa-star bg-star yellow-text' />
                  <i className='fas fa-star bg-star yellow-text' />
                  <i className='far fa-star bg-star yellow-text' />
                </div>
                <p className='mt-4 mb-0 medium'>
                  Do you want to pay for additional hotel nights if desired by
                  the guest?
                </p>
                <div className='row'>
                  <div className='col-lg-8'>
                    <div
                      className='btn-group-toggle mt-3 pay-check'
                      data-toggle='buttons'
                    >
                      <label className='btn w-100 py-2 px-3 h-auto active'>
                        <input type='checkbox' defaultChecked />
                        Yes
                      </label>
                      <label className='btn w-100 py-2 px-3 h-auto'>
                        <input type='checkbox' />
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <p className='mt-4 mb-0 medium'>How many nights?</p>
                <div className='row'>
                  <div className='col-lg-4'>
                    <input
                      type='number'
                      defaultValue={200}
                      className='site-input py-2 px-3 w-100 mt-3'
                    />
                  </div>
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
              </>
            ) : (
              <>
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
                    defaultValue={200}
                    className='site-input px-3 py-2 mx-3 w-45'
                  />{' '}
                  miles away
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-lg-flex'>
                    <p className='mb-0 mt-3 mr-3'>
                      <input type='checkbox' id='stopover' name='radio-group' />
                      <label htmlFor='stopover' className='bordered mb-0'>
                        Grand Plaza Hotel (50 m from event)
                      </label>
                    </p>
                    <div className='d-flex mt-3'>
                      <i className='fas fa-star mr-1 yellow-text' />
                      <i className='fas fa-star mr-1 yellow-text' />
                      <i className='fas fa-star mr-1 yellow-text' />
                      <i className='fas fa-star mr-1 yellow-text' />
                      <i className='far fa-star yellow-text' />
                    </div>
                  </div>
                  <button className='transparent-btn mt-3'>
                    <i className='fas grey-text fa-trash' />
                  </button>
                </div>
                <hr />
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-lg-flex'>
                    <p className='mb-0 mt-3 mr-3'>
                      <input type='checkbox' id='stopover' name='radio-group' />
                      <label htmlFor='stopover' className='bordered mb-0'>
                        Victoria Hotel&amp;Spa (50 m from event)
                      </label>
                    </p>
                    <div className='d-flex mt-3'>
                      <i className='fas fa-star mr-1 yellow-text' />
                      <i className='fas fa-star mr-1 yellow-text' />
                      <i className='fas fa-star mr-1 yellow-text' />
                      <i className='fas fa-star mr-1 yellow-text' />
                      <i className='far fa-star yellow-text' />
                    </div>
                  </div>
                  <button className='transparent-btn mt-3'>
                    <i className='fas grey-text fa-trash' />
                  </button>
                </div>
                <hr />
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-lg-flex'>
                    <p className='mb-0 mt-3 mr-3'>
                      <input type='checkbox' id='stopover' name='radio-group' />
                      <label htmlFor='stopover' className='bordered mb-0'>
                        Hillton Hotel (50 m from event)
                      </label>
                    </p>
                    <div className='d-flex mt-3'>
                      <i className='fas fa-star mr-1 yellow-text' />
                      <i className='fas fa-star mr-1 yellow-text' />
                      <i className='fas fa-star mr-1 yellow-text' />
                      <i className='fas fa-star mr-1 yellow-text' />
                      <i className='far fa-star yellow-text' />
                    </div>
                  </div>
                  <button className='transparent-btn mt-3'>
                    <i className='fas grey-text fa-trash' />
                  </button>
                </div>
                <hr />
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-lg-flex'>
                    <p className='mb-0 mt-3 mr-3'>
                      <input type='checkbox' id='stopover' name='radio-group' />
                      <label htmlFor='stopover' className='bordered mb-0'>
                        Saint George Hotel (50 m from event)
                      </label>
                    </p>
                    <div className='d-flex mt-3'>
                      <i className='fas fa-star mr-1 yellow-text' />
                      <i className='fas fa-star mr-1 yellow-text' />
                      <i className='fas fa-star mr-1 yellow-text' />
                      <i className='fas fa-star mr-1 yellow-text' />
                      <i className='far fa-star yellow-text' />
                    </div>
                  </div>
                  <button className='transparent-btn mt-3'>
                    <i className='fas grey-text fa-trash' />
                  </button>
                </div>
                <p className='mt-4 mb-0 medium'>
                  Do you want to pay for additional hotel nights if desired by
                  the guest?
                </p>
                <div className='row'>
                  <div className='col-lg-8'>
                    <div
                      className='btn-group-toggle mt-3 pay-check'
                      data-toggle='buttons'
                    >
                      <label className='btn w-100 py-2 px-3 h-auto active'>
                        <input type='checkbox' defaultChecked />
                        Yes
                      </label>
                      <label className='btn w-100 py-2 px-3 h-auto'>
                        <input type='checkbox' />
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </>
            )}

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

export default ManageHotel;
