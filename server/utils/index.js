// const {to} = require('await-to-js');
// const pe = require('parse-error');

// module.exports.to = async (promise) => {
//     let err, res;
//     [err, res] = await to(promise);
//     if(err) return [pe(err)];

//     return [null, res];
// };

// module.exports.TE = TE = function(err_message, log){ // TE stands for Throw Error
//     if(log === true){
//         console.error(err_message);
//     }

//     throw new Error(err_message);
// };


const respError = (res, err, code) => { // Error Web Response
    let error = err;
    if (typeof err === 'object' && typeof err.message !== 'undefined') {
        error = err.message;
    }

    if (typeof code !== 'undefined') res.statusCode = code;

    return res.json({ success: false, error });
};

const respSuccess = (res, data, code) => { // Success Web Response
    let sendData = { success: true };

    if (typeof data === 'object') {
        sendData = Object.assign(data, sendData);// merge the objects
    }

    if (typeof code !== 'undefined') res.statusCode = code;

    return res.json(sendData);
};

module.exports = { respSuccess, respError };
