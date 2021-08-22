import React from 'react';
import { Modal, ModalBody } from 'react-bootstrap';
const ManageTransportModal = (props) => {
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
          />
          <div className='text-left'>
            <div className='d-flex align-items-center'>
              <img src='images/ground.png' alt='' className='img-fluid mr-3' />
              <h2>Transportation</h2>
            </div>
            <hr />
            <p className='mb-0 medium'>
              What ground transportation choose to/from their home airport?
            </p>
            <div className='row'>
              <div className='col-lg-8'>
                <div
                  className='btn-group-toggle mt-3 pay-check'
                  data-toggle='buttons'
                >
                  <label className='btn w-100 py-2 px-3 h-auto active'>
                    <input type='checkbox' defaultChecked />
                    Personal car
                  </label>
                  <label className='btn w-100 py-2 px-3 h-auto'>
                    <input type='checkbox' />
                    Uber
                  </label>
                </div>
              </div>
            </div>
            <p className='mb-0 mt-4 medium'>What shall we reimburse?</p>
            <div className='row'>
              <div className='col-lg-8'>
                <div
                  className='btn-group-toggle mt-3 pay-check'
                  data-toggle='buttons'
                >
                  <label className='btn w-100 py-2 px-3 h-auto active'>
                    <input type='checkbox' defaultChecked />
                    Mileage from/to their home airport
                  </label>
                  <label className='btn w-100 py-2 px-3 h-auto'>
                    <input type='checkbox' />
                    Airport parking
                  </label>
                </div>
              </div>
            </div>
            <p className='mb-0 mt-4 medium'>
              Where to provide Uber transportation in the city of the event?
            </p>
            <div className='row'>
              <div className='col-12'>
                <div
                  className='btn-group-toggle mt-3 pay-check'
                  data-toggle='buttons'
                >
                  <label className='btn w-100 py-2 px-3 h-auto active'>
                    <input type='checkbox' defaultChecked />
                    Event
                  </label>
                  <label className='btn w-100 py-2 px-3 h-auto'>
                    <input type='checkbox' />
                    Event
                  </label>
                  <label className='btn w-100 py-2 px-3 h-auto'>
                    <input type='checkbox' />
                    Airport
                  </label>
                </div>
              </div>
            </div>
            <p className='mb-0 mt-4 medium'>Which Uber service?</p>
            <div className='row'>
              <div className='col-lg-8'>
                <div
                  className='btn-group-toggle mt-3 pay-check'
                  data-toggle='buttons'
                >
                  <label className='btn w-100 py-2 px-3 h-auto active'>
                    <input type='checkbox' defaultChecked />
                    Uber X
                  </label>
                  <label className='btn w-100 py-2 px-3 h-auto'>
                    <input type='checkbox' />
                    Uber Black
                  </label>
                </div>
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
          </div>
        </ModalBody>
      </div>
    </Modal>
  );
};
export default ManageTransportModal;
