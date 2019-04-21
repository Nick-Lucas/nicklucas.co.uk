/*eslint-env node*/
/*eslint-disable no-console */

const axios = require('axios').default
const _ = require('underscore')

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
      console.log(response)

      const data = _.sortBy(
        response.data.filter(
          it => it.fork === false && it.stargazers_count > 0
        ),
        it => -Date.parse(it.pushed_at)
      ).map(it => ({
        name: it.name,
        fullname = it.full_name,
        description: it.description,
        url: it.html_url,
        language: it.language,
        stars: it.stargazers_count,
        last_updated: it.pushed_at,
      }))

      callback(null, {
        statusCode: response.status,
        body: JSON.stringify(data),
      })
    })
    .catch(err => {
      console.error('Error: ' + err)
      callback('internal server error', {
        statusCode: 500,
        body: 'internal server error',
      })
    })
}
