import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import SaveAccount from './SaveAccount';
import ManageAccounts from './ManageAccounts';
import AccountDetails from './AccountDetails';

const App = () => {
    return (
        <Router>
            <div className="container">
                <div className="lockforge">LockForge</div>
                <div className="password-manager">Password Manager</div>
                <div className="main-menu">
                    <Link to="/save">Save Account</Link>
                </div>
                <div className="main-menu">
                    <Link to="/manage">Manage Accounts</Link>
                </div>
                <div className="main-menu">
                    <a href="../index.html">Project Hub</a>
                </div>
            </div>
            <Route path="/save" component={SaveAccount} />
            <Route path="/manage" component={ManageAccounts} />
            <Route path="/retrieve" component={AccountDetails} />
        </Router>
    );
};

export default App;
