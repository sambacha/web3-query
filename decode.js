var RPCError = require('eth-rpc-errors');
const isObject = require('./src/isObject.js');

function parseEthereumResponse(response, callback) {
  if (!isObject(response)) return callback(new Error(JSON.stringify(response)));
  if (response.error != null) return callback(new RPCError(response.error));
  callback(null, response.result);
}

module.exports = parseEthereumResponse;
