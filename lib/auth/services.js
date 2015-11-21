// services.js

import jwt from 'jwt-simple'
import moment from 'moment'
import config from './config'

class AuthServices{
createToken(user) {
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, "days").unix(),
  };
  console.log('aqui 3')
  let token = jwt.encode(payload, "config.TOKEN_SECRET")

  console.log('Token:' + token)
  return token
}
}

export default AuthServices
