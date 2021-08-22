import logo from './logo.svg';
import './style/style.css';
import ForgotPassword from './pages/auth/forgot-password';
import Login from './pages/auth/login';
import MailConfirm from './pages/auth/mail-confirmation';
import Register from './pages/auth/register';
import AccountPayment from './pages/account-payment';
import Account from './pages/account';
import CreateInvite from './pages/create-invites';
import Invite from './pages/invites';
import Transaction from './pages/transactions';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>

          <Route exact path='/mail-confirm'>
            <MailConfirm />
          </Route>
          <Route exact path='/forgot-password'>
            <ForgotPassword />
          </Route>
          <Route exact path='/account-payment'>
            <AccountPayment />
          </Route>
          <Route exact path='/account'>
            <Account />
          </Route>
          <Route exact path='/invite'>
            <CreateInvite />
          </Route>
          <Route exact path='/invites'>
            <Invite />
          </Route>
          <Route exact path='/transaction'>
            <Transaction />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
