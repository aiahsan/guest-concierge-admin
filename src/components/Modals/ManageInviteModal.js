import React from 'react';
import { Modal, ModalBody } from 'react-bootstrap';
import AddmoreInviteLabel from '../addmoreInviteLabel';

const ManageInviteModal = (props) => {
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
              <h2>Invite People</h2>
              {invites.map((x, i) => (
                <AddmoreInviteLabel key={i} />
              ))}
              <div className='row mt-2'>
                <div className='col-lg-6 mt-3'>
                  <label htmlFor>First Name</label>
                  <input
                    type='text'
                    defaultValue='Sarah'
                    className='site-input py-2 px-3 w-100'
                  />
                </div>
                <div className='col-lg-6 mt-3'>
                  <label htmlFor>Last Name</label>
                  <input
                    type='text'
                    defaultValue='Hamilton'
                    className='site-input py-2 px-3 w-100'
                  />
                </div>
                <div className='col-12 mt-3'>
                  <label htmlFor>Email</label>
                  <input
                    type='email'
                    defaultValue='sarahhamilton@gmail.com'
                    className='site-input py-2 px-3 w-100'
                  />
                </div>
                <div className='col-lg-6 mt-3'>
                  <label htmlFor>From</label>
                  <input type='date' className='site-input py-2 px-3 w-100' />
                </div>
                <div className='col-lg-6 mt-3'>
                  <label htmlFor>To</label>
                  <input type='date' className='site-input py-2 px-3 w-100' />
                </div>
                <div className='col-12 mt-3'>
                  <a
                    onClick={() => {
                      const invitesOld = invites;
                      invitesOld.push('1');
                      setInvites([...invitesOld]);
                    }}
                    className='blue-text'
                  >
                    Add More
                  </a>
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
                  Send Invitation
                </button>
              </div>
            </div>
          </div>
        </ModalBody>
      </div>
    </Modal>
  );
};

export default ManageInviteModal;
