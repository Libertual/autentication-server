'use strict'



import AuthController from '../auth/controller'
import AuthMiddleware from '../auth/middleware'

import jsonBody from 'body/json'
import express from 'express'
import logger from '../utils/logger'
import jsonfy from '../utils/jsonfy'
import fail from '../utils/fail'


const router = express.Router()
const authCtrl = new AuthController()
const middleware = new AuthMiddleware()

router.all((req, res, next) => {
  logger.info(req.method, req.url)
  res.statusCode = 200
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('x-ver', '1.0')
  next()
})

router.get('/', (req, res) => {
  res.end(
  'Welcome to Employee API REST' + req.body
)}
)

router.post('/', (req, res) => {

  jsonBody(req, res, (err, body) => {
    if (err) return fail(err, res)
    console.log('JSON: '+ jsonfy(body))
    console.log('Param' + req.body)
  })
  res.end(
  'Welcome to Employee API REST' + req.body
)}
)

router.post('/auth/login',                 authCtrl.emailLogin)
router.get('/private',                     middleware.ensureAuthenticated, authCtrl.hola) 
router.post('/auth/signup',                authCtrl.emailSignup)
//router.delete('/employees/:employeeId', employeeCtrl.remove)
//router.put('/employees/:employeeId',    employeeCtrl.update)

function onRequest (req, res) {
  router(req, res, (err) => {
    if (err) return fail(err, res)

    res.statusCode = 404
    res.setHeader('Content-Type', 'text/plain')
    res.end(`404 Not Found: ${req.url}`)
  })
}

export default onRequest
