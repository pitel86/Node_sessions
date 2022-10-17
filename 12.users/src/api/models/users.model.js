const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
});

// UsersSchema.pre("save", function(next){
//     this.password = bcrypt.hashSync(this.password, 10);
//     next();
// })

const User = mongoose.model('User', UsersSchema);

module.exports = User;