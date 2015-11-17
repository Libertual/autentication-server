'use strict'

//var jsonfy = require('./jsonfy')
import jsonfy from  './jsonfy'

function fail (err, res) {
  res.statusCode = 500
  res.setHeader('Content-Type', 'application/json')
  res.end(jsonfy(err.message))
}

export default fail
