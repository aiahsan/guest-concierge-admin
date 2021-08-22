import React from 'react';
import { Modal, ModalBody } from 'react-bootstrap';
import InvitesField from '../invitesField';
import Icon from '../../style/icon';
const ManageTemplatesdModal = (props) => {
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
            <h2>Manage Templates</h2>
            <hr></hr>
            <div className='row'>
              <div className='col-lg-8 mt-3'>
                <div className='position-relative w-100'>
                  <div className='left-icon'>
                    <Icon name='backicon' />
                  </div>
                  <input
                    type='text'
                    className='site-input w-100 gray-bg py-2 pl-3 pr-5'
                    placeholder='Search...'
                  />
                </div>
              </div>
              <div className='col-lg-4 mt-3'>
                <button className='site-input semi-bold py-2 w-100'>
                  Add New Template
                </button>
              </div>
            </div>

            <InvitesField />
            <InvitesField />
            <InvitesField />

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
export default ManageTemplatesdModal;
