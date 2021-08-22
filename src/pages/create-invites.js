import React from 'react';
import LeftBar from '../components/leftbar';
import Nav from '../components/nav';
import { useDropzone } from 'react-dropzone';
import ManageTemplatesdModal from '../components/Modals/ManageTemplatesdModal';
import ManageAirFareModal from '../components/Modals/ManageAirFareModal';
import ManageHotel from '../components/Modals/ManageHotel';
import ManageInviteModal from '../components/Modals/ManageInviteModal';
import ManageSaveTemplateModal from '../components/Modals/ManageSaveTemplateModal';
import ManageTransportModal from '../components/Modals/ManageTransportModal';
import Icon from '../style/icon';
const Invites = () => {
  const [showManageTemplates, setshowManageTemplates] = React.useState(false);
  const [showAirfare, setshowAirfare] = React.useState(false);
  const [showHotel, setshowHotel] = React.useState(false);
  const [showTransport, setshowTransport] = React.useState(false);
  const [showInvite, setsshowInvite] = React.useState(false);
  const [showsaveTemplate, setshowsaveTemplate] = React.useState(false);
  const [showHeader, setshowHeader] = React.useState(false);

  const onDrop = React.useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <div>
        <LeftBar showHeader={showHeader} />
        <div className='main-body'>
          <Nav
            setshowHeader={setshowHeader}
            showHeader={showHeader}
            title='Invitaion'
          />
          <div className='container-fluid px-lg-5 px-4'>
            <div className='row'>
              <div className='col-12 p-lg-5 mt-4 p-4 white-card'>
                <a href='#_' className='blue-text'>
                  <i className='fas fa-angle-left'></i> Back
                </a>
                <div className='col-xl-10 col-lg-11 mx-auto'>
                  <div className='row'>
                    <div className='col-md-8'>
                      <h1>General Setup</h1>
                      <label for='' className='mt-3'>
                        Template
                      </label>
                      <select
                        name=''
                        id=''
                        className='site-input px-3 py-2 w-100'
                      >
                        <option value=''>None</option>
                      </select>
                      <label for='' className='mt-3'>
                        Location
                      </label>
                      <input
                        type='text'
                        value='2465 Hempstead Turnpike, East Meadow NY 11554'
                        className='site-input px-3 py-2 w-100'
                      />
                      <img
                        src='images/map.png'
                        alt=''
                        className='img-fluid mt-3 w-100'
                      />
                      <label for='' className='mt-3'>
                        Name
                      </label>
                      <input
                        type='text'
                        value='Conference/Event on March 24th at Apple office'
                        className='site-input px-3 py-2 w-100'
                      />
                      <label for='' className='mt-3'>
                        Arrange and Pay for
                      </label>
                      <div
                        className='btn-group-toggle pay-check'
                        data-toggle='buttons'
                      >
                        <label className='btn active'>
                          <input type='checkbox' checked />
                          <Icon name='t1' />
                          Transportation
                        </label>
                        <label className='btn active'>
                          <input type='checkbox' checked />
                          <Icon name='t2' />
                          Airfare
                        </label>
                        <label className='btn'>
                          <input type='checkbox' />
                          <Icon name='t3' />
                          Hotel
                        </label>
                      </div>
                      <h2 className='mt-3'>Configuration & Rules</h2>
                    </div>
                    <div className='col-md-4'>
                      {isDragActive ? (
                        <>
                          <img
                            src='images/projector.png'
                            alt=''
                            className='img-fluid w-100'
                          />
                          <button className='transparent-btn delete-btn'>
                            <i className='fas fa-trash'></i>
                          </button>
                        </>
                      ) : (
                        <>
                          <div
                            {...getRootProps()}
                            className='dashed-bg w-100 py-5 text-center'
                          >
                            <img
                              src='images/upload.png'
                              alt=''
                              className='img-fluid'
                            />
                            <p className='mb-0 mt-2 medium'>
                              Drag&amp;Drop image here to Upload
                            </p>
                          </div>
                        </>
                      )}

                      <label
                        for='change-img'
                        className='site-input semi-bold w-100 text-center mt-3 py-2'
                      >
                        Change Image
                      </label>
                      <div className='d-none'>
                        <input
                          type='file'
                          {...getRootProps()}
                          name=''
                          id='change-img'
                        />
                      </div>
                    </div>
                    <div className='col-12'>
                      <div className='rules mt-3 air-fare p-4'>
                        <div className='d-flex align-items-center justify-content-between'>
                          <div className='d-flex align-items-center'>
                            <img
                              src='images/air.png'
                              alt=''
                              className='img-fluid mr-2'
                            />
                            <p className='mb-0'>Airfare</p>
                          </div>
                          <button
                            className='transparent-btn'
                            onClick={() => setshowAirfare(true)}
                          >
                            <img
                              src='images/pencil.png'
                              alt=''
                              className='img-fluid'
                            />
                          </button>
                        </div>
                        <div className='d-flex align-items-center justify-content-between flex-wrap'>
                          <p className='mb-0 mt-3 rules-inner'>
                            first class no max price
                          </p>
                          <p className='mb-0 mt-3 rules-inner'>
                            buy new ticket if delayed
                          </p>
                          <p className='mb-0 mt-3 rules-inner'>
                            focus on lowest cost
                          </p>
                          <p className='mb-0 mt-3 rules-inner'>
                            fly to JFK, LGA, EWR
                          </p>
                        </div>
                      </div>
                      <div className='rules mt-3 hotel p-4'>
                        <div className='d-flex align-items-center justify-content-between'>
                          <div className='d-flex align-items-center'>
                            <img
                              src='images/hotel.png'
                              alt=''
                              className='img-fluid mr-2'
                            />
                            <p className='mb-0'>Hotel</p>
                          </div>
                          <button
                            className='transparent-btn'
                            onClick={() => setshowHotel(true)}
                          >
                            <img
                              src='images/pencil.png'
                              alt=''
                              className='img-fluid'
                            />
                          </button>
                        </div>
                        <div className='d-flex align-items-center justify-content-between flex-wrap'>
                          <p className='mb-0 mt-3 rules-inner'>
                            guest selects from 5 properties
                          </p>
                          <p className='mb-0 mt-3 rules-inner'>{`Cost: <$100`}</p>
                          <p className='mb-0 mt-3 rules-inner'>{`Distance < 1 mi`}</p>
                          <p className='mb-0 mt-3 rules-inner'>
                            1 additional paid night permitted
                          </p>
                        </div>
                      </div>
                      <div className='rules mt-3 ground p-4'>
                        <div className='d-flex align-items-center justify-content-between'>
                          <div className='d-flex align-items-center'>
                            <img
                              src='images/ground.png'
                              alt=''
                              className='img-fluid mr-2'
                            />
                            <p className='mb-0'>
                              Ground Transportation to/from origin airport
                            </p>
                          </div>
                          <button
                            className='transparent-btn blue-text semi-bold'
                            onClick={() => setsshowInvite(true)}
                          >
                            +Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='d-sm-flex mt-lg-3 align-items-center justify-content-between'>
                    <h2
                      className='mt-3 mb-0'
                      data-toggle='modal'
                      data-target='.invitePeopleDetails'
                    >
                      Invitees
                    </h2>
                    <a
                      data-target='.addInvitee'
                      data-toggle='modal'
                      className='site-btn d-inline-block px-4 mt-3 py-2 ml-2'
                      onClick={() => setshowManageTemplates(true)}
                    >
                      Add Invitee
                    </a>
                  </div>
                  <div className='table-responsive mt-3'>
                    <table className='table'>
                      <thead>
                        <tr>
                          <th>Start Date</th>
                          <th>End date</th>
                          <th>Invited</th>
                          <th>Email</th>
                          <th>Trip Purpose</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>08-01-2019</td>
                          <td>06-06-2019</td>
                          <td>Lacara Jones</td>
                          <td>lacara@gmail.com</td>
                          <td>Event/Conference</td>
                          <td>
                            <span className='pending'></span> Pending
                          </td>
                        </tr>
                        <tr>
                          <td>08-01-2019</td>
                          <td>06-06-2019</td>
                          <td>Lacara Jones</td>
                          <td>lacara@gmail.com</td>
                          <td>Event/Conference</td>
                          <td>
                            <span className='pending in-process'></span> In
                            Process
                          </td>
                        </tr>
                        <tr>
                          <td>08-01-2019</td>
                          <td>06-06-2019</td>
                          <td>Lacara Jones</td>
                          <td>lacara@gmail.com</td>
                          <td>Event/Conference</td>
                          <td>
                            <span className='pending completed'></span>{' '}
                            Completed
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className='d-lg-flex align-items-center justify-content-between'>
                    <p className='mb-0 mt-3'>Showing 1 to 10 of 42 entries</p>
                    <nav className='mt-3' aria-label='Page navigation example'>
                      <ul className='pagination justify-content-end'>
                        <li className='page-item disabled'>
                          <a
                            className='page-link'
                            href='#'
                            tabindex='-1'
                            aria-disabled='true'
                          >
                            Previous
                          </a>
                        </li>
                        <li className='page-item active'>
                          <a className='page-link pagi-pages' href='#'>
                            1
                          </a>
                        </li>
                        <li className='page-item'>
                          <a className='page-link pagi-pages' href='#'>
                            2
                          </a>
                        </li>
                        <li className='page-item'>
                          <a className='page-link pagi-pages' href='#'>
                            3
                          </a>
                        </li>
                        <li className='page-item'>
                          <a className='page-link' href='#'>
                            Next
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className='d-sm-flex align-items-center justify-content-end'>
                  <a
                    onClick={() => setshowsaveTemplate(true)}
                    className='site-input px-4 mr-sm-2 semi-bold mt-3 d-inline-block py-2'
                  >
                    Save as Template
                  </a>
                  <a
                    href='#_'
                    className='site-btn px-5 mt-3 d-inline-block py-2'
                  >
                    Create
                  </a>
                </div>
              </div>
            </div>
          </div>{' '}
        </div>
      </div>
      <ManageTemplatesdModal
        show={showManageTemplates}
        onHide={() => setshowManageTemplates(false)}
      />
      <ManageAirFareModal
        show={showAirfare}
        onHide={() => setshowAirfare(false)}
      />
      <ManageHotel show={showHotel} onHide={() => setshowHotel(false)} />
      <ManageTransportModal
        show={showTransport}
        onHide={() => setshowTransport(false)}
      />
      <ManageInviteModal
        show={showInvite}
        onHide={() => setsshowInvite(false)}
      />
      <ManageSaveTemplateModal
        show={showsaveTemplate}
        onHide={() => setshowsaveTemplate(false)}
      />
    </>
  );
};

export default Invites;
