import axios from 'axios';


//http(s)://api.qrserver.com/v1/create-qr-code/?data=[URL-encoded-text]&size=[pixels]x[pixels]

export const generateCode = url => {
    const size = 250;
    const data = url;
    const api = `http://api.qrserver.com/v1/create-qr-code/?data=${data}&size=${size}x${size}`;

    try {
        return api;
    } catch (error) {
        console.error(error);
    }

}