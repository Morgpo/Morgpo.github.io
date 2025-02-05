import React from 'react';

const AccountDetails = ({ accountName, accountData }) => {
    return (
        <div className="container">
            <h1>Account Details</h1>
            <h3>{accountName}</h3>
            <div className="details-list">
                <ul>
                    {Object.entries(accountData).map(([key, value]) => (
                        <li key={key}>
                            <span className="detail-key">{key}:</span> <span className="detail-value">{value}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <br />
            <a href="edit.html">Edit Account</a>
            <br /><br />
            <a href="delete.html">Delete Account</a>
            <br /><br />
            <a href="manage.html">Back to Manage Accounts</a>
        </div>
    );
};

export default AccountDetails;
