const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

const UserModel = mongoose.model("users", UserSchema) //two properties first database name users and second which we create schema
module.exports = UserModel