import React from 'react';
import useFetchAccounts from './fetch_accounts';

const ManageAccounts = () => {
    const accounts = useFetchAccounts();

    return (
        <div className="container">
            <h1>Manage Accounts</h1>
            <div className="account-list">
                <ul>
                    {accounts.map((account) => (
                        <li key={account}>
                            <a href="retrieve.html">{account}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <br />
            <a href="index.html">Back to Main Menu</a>
        </div>
    );
};

export default ManageAccounts;
