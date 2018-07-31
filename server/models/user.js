const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  wallet: {
    balance: {
      type: Number,
      default: 50000
    },
    btcBalance: {
      type: Number,
      default: 0
    },
    ethBalance: {
      type: Number,
      default: 0
    },
    ltcBalance: {
      type: Number,
      default: 0
    },
    bchBalance: {
      type: Number,
      default: 0
    }
  },
  id: Schema.Types.ObjectId,
});

const User = mongoose.model('User', userSchema);

module.exports = User;