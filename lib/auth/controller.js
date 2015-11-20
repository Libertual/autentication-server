// auth.js

import mongoose from 'mongoose'
import User from './model'
import AuthServices from './services'
import jsonBody from 'body/json'
import jsonfy from '../utils/jsonfy'
import fail from '../utils/fail'

class AuthController {



emailSignup(req, res) {
  jsonBody(req, res, (err, body) => {
    if (err) return fail(err, res)
  let service = new AuthServices()
    User
      .create(body)
      .then((user) => {
        console.log('aqui')
        res.statusCode = 201
        res.end({token: service.createToken(user)})
      })
      .then((err) => {
        console.log("aqui 2")
        fail(err, res)
      })
  })
}

emailLogin(req, res){
  console.log('Aqui')


  jsonBody(req, res, (err, body) => {
    if (err) return fail(err, res)
    console.log('JSON: '+ jsonfy(body))
    let service = new AuthServices()
    User
      .findOne({email: body.email.toLowerCase()})
      .then((user) => {

        if(user) {
          res.statusCode = 200
          console.log('SI GET')
          res.end(JSON.stringify(user))
        } else {
          res.statusCode = 404
          res.end(jsonfy(`Employee ${body.email} does not exists`))
        }
    // {token: service.createToken(user)}

    })
  })
 }
}
export default AuthController
