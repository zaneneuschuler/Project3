var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
   userName: {
       type: String,
       unique: true,
        required: true
   },
   name: String,
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        required: true
    },
     password: {
         type: String,
         required: true,
         bcrypt: true
     },
     yardSales: [{
         type: Schema.Types.ObjectId,
         ref: 'YardSale'
     }]
});

UserSchema.plugin(require('mongoose-bcrypt'));
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;
