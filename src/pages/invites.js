import React from 'react';
import LeftBar from '../components/leftbar';
import Nav from '../components/nav';
import Icon from '../style/icon';
import { useHistory } from 'react-router-dom';
export default () => {
  const history = useHistory();

  const [showFilter, setshowFilter] = React.useState(false);
  const [isLoading, setisLoading] = React.useState(true);
  const [showHeader, setshowHeader] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      <LeftBar showHeader={showHeader} />
      <div className='main-body'>
        <Nav
          setshowHeader={setshowHeader}
          showHeader={showHeader}
          title='Dashboard'
        />
        <div className='container-fluid px-lg-5 px-4'>
          {isLoading == true ? (
            <>
              <div className='row'>
                <div className='col-12 p-lg-5 mt-4 p-4 white-card text-center'>
                  <img
                    src='images/invitation-empty.png'
                    alt=''
                    className='img-fluid mt-lg-5'
                  />
                  <h2>Invitations Empty</h2>
                  <div className='row'>
                    <div className='col-lg-6 col-xl-5 mx-auto'>
                      <p className='mt-3 mb-0'>
                        Any invitations don’t exist, please create new invite
                        for ability to see invitation on this page
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => history.push('/invite')}
                    className='site-btn px-4 mt-4 py-2'
                  >
                    Create Invite
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className='row'>
                <div className='col-12 p-lg-5 mt-4 p-4 white-card'>
                  <h1>Invitations</h1>
                  <div className='d-lg-flex align-items-center justify-content-between'>
                    <div className='d-md-flex align-items-center'>
                      <div className='position-relative mt-3 search-barr'>
                        <div className='left-icon'>
                          <Icon name='backicon' />
                        </div>
                        <input
                          type='text'
                          className='site-input py-2 pl-3 pr-5'
                          placeholder='Search...'
                        />
                      </div>
                      <button
                        onClick={() => setshowFilter(!showFilter)}
                        className='site-btn d-inline-block mt-3 px-5 py-2 ml-2'
                      >
                        Filter
                      </button>
                    </div>
                    <button
                      onClick={() => history.push('/invite')}
                      className='site-btn d-inline-block px-4 mt-3 py-2 ml-2'
                    >
                      Create Invite
                    </button>
                  </div>
                  {showFilter == true ? (
                    <div className='l-blue-bg mt-3 px-sm-4 px-3 py-4'>
                      <div className='row'>
                        <div className='col-xl-2 col-sm-6 mt-3'>
                          <label for=''>Start Date</label>
                          <input
                            type='date'
                            name=''
                            id=''
                            className='site-input px-3 py-2 w-100'
                          />
                        </div>
                        <div className='col-xl-2 col-sm-6 mt-3'>
                          <label for=''>End Date</label>
                          <input
                            type='date'
                            name=''
                            id=''
                            className='site-input px-3 py-2 w-100'
                          />
                        </div>
                        <div className='col-xl-4 col-12 mt-3'>
                          <label for=''>Invitee Name</label>
                          <input
                            type='text'
                            name=''
                            id=''
                            className='site-input px-3 py-2 w-100'
                          />
                        </div>
                        <div className='col-xl-2 col-sm-6 mt-3'>
                          <label for=''>Trip Purpose</label>
                          <select
                            name=''
                            id=''
                            className='site-input py-2 px-3 w-100'
                          >
                            <option value=''>All</option>
                          </select>
                        </div>
                        <div className='col-xl-2 col-sm-6 mt-3'>
                          <label for=''>Status</label>
                          <select
                            name=''
                            id=''
                            className='site-input py-2 px-3 w-100'
                          >
                            <option value=''>All</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
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
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
