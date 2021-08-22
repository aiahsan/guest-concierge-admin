import React from 'react';
import { Modal, ModalBody } from 'react-bootstrap';
const ManageSaveTemplateModal = (props) => {
  const [invites, setInvites] = React.useState([]);
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
          <div>
            <i
              className='fas fa-times close modal-close'
              data-dismiss='modal'
              aria-label='Close'
            />
            <div className='text-left'>
              <h2>Save a template</h2>
              <div className='row mt-2'>
                <div className='col-12 mt-3'>
                  <label htmlFor>Name</label>
                  <input
                    type='text'
                    placeholder='Invitation for Jon Doe on Jun 3-15 at Apple...'
                    className='site-input py-2 px-3 w-100'
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
                  Save Template
                </button>
              </div>
            </div>
          </div>
        </ModalBody>
      </div>
    </Modal>
  );
};
export default ManageSaveTemplateModal;
