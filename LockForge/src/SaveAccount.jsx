import React, { useState } from 'react';
import useGeneratePassword from './generate_password';

const SaveAccount = () => {
    const [accountName, setAccountName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, generatePassword] = useGeneratePassword();
    const [miscNotes, setMiscNotes] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const accountData = {
            account_name: accountName,
            username: username,
            email: email,
            password: password,
            misc_notes: miscNotes,
        };

        const response = await fetch('https://192.168.4.31:5291/api/lockforge/receive', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(accountData),
        });

        if (response.ok) {
            // Handle successful response
            alert('Account saved successfully!');
        } else {
            // Handle error response
            alert('Failed to save account.');
        }
    };

    return (
        <div className="container">
            <h1>Save Account</h1>
            <form onSubmit={handleSubmit}>
                <label>Account Name:</label>
                <input type="text" name="account_name" value={accountName} onChange={(e) => setAccountName(e.target.value)} required /><br />
                <label>Username:</label>
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
                <label>Email:</label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                <label>Password:</label>
                <input type="text" name="password" value={password} id="password" required /><br />
                <button type="button" onClick={generatePassword}>Generate Password</button><br /><br />
                <label>Misc Notes (Optional):</label>
                <input type="text" name="misc_notes" value={miscNotes} onChange={(e) => setMiscNotes(e.target.value)} /><br />
                <button type="submit">Save</button>
            </form>
            <br />
            <a href="index.html">Back to Main Menu</a>
        </div>
    );
};

export default SaveAccount;
