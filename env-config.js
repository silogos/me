/* eslint-disable prettier/prettier */
const production = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.BACKEND_URL': production ? '/me' : '',
}
