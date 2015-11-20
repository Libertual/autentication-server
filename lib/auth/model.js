'use strict'

import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  userName  : { type: String },
  password  : { type: String },
  fullName  : { type: String },
  picture   : { type: String },
  email     : { type: String },
  title     : { type: String },
  phone     : { type: String },
  country   : { type: String }
})

let User = mongoose.model('User', userSchema)

export default User
