var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var userSchema = new Schema({
    Name : {
        type: String,
        required: true
    },
    Goal: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
});
 
module.exports = mongoose.model('goals', userSchema);