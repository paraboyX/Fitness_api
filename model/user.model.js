const mongoose = require( 'mongoose' );

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "can't be blank"],
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: [true, "can't be blank"],
  },
  password: {
    type: String,
    minLength: 8,
    required: [true, "can't be blank"]  
  },
  age:{
    type: Number,
    required: true
  }
});

const userModel = mongoose.model('users', userSchema);
module.exports = userModel;