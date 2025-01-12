//get backend ip from config.js
const config = require('../../static/config.js');

//call backend to fetch account names
const fetch_accounts = async () => {
    const response = await fetch(config.backendUrl + '/api/fetch_accounts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data.accounts;
};