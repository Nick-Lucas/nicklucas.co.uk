/*eslint-env node*/
/*eslint-disable no-console */

const axios = require('axios').default

const API_KEY = process.env['APIKEY_GITHUB']

const ENDPOINT = 'https://api.github.com/user/repos?visibility=public'

// event:
// {
//   "path": "Path parameter",
//   "httpMethod": "Incoming request's method name"
//   "headers": {Incoming request headers}
//   "queryStringParameters": {query string parameters }
//   "body": "A JSON string of the request payload."
//   "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encode"
// }

// callback(error, response)
// response:
// {
//   "isBase64Encoded": true|false,
//   "statusCode": httpStatusCode,
//   "headers": { "headerName": "headerValue", ... },
//   "body": "..."
// }

exports.handler = function(event, context, callback) {
  axios
    .get(ENDPOINT, {
      headers: {
        accept: 'application/vnd.github.v3+json',
        Authorization: 'token ' + API_KEY,
      },
    })
    .then(response => {
      callback(null, {
        statusCode: response.status,
        body: response.data,
      })
    })
}
