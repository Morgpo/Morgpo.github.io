//get backend ip from config.js
const config = require('../../static/config.js');

//call backend to generate password
const generate_password = async () => {
    const response = await fetch(config.backendUrl + '/api/generate_password', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data.password;
};