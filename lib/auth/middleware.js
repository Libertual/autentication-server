// middleware.js

import jwt from 'jwt-simple'
import moment from 'moment'
import config from './config'
import jsonfy from '../utils/jsonfy'

class AuthMiddleware {

ensureAuthenticated(req, res, next) {
  if(!req.headers.authorization) {
    res.statusCode = 403
    return res.end(jsonfy("Tu petición no tiene cabecera de autorización"))
  }

  var token = req.headers.authorization.split(" ")[1]
  var payload = jwt.decode(token, config.TOKEN_SECRET, "HS256")
  console.log("token:" + token)

  if(payload.exp <= moment().unix()) {
     res.statusCode = 401
     return res.end(jsonfy("El token ha expirado"))
  }

  req.user = payload.sub
  next()
}
}
export default AuthMiddleware
