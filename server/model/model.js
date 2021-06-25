const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title : {
        type : String,
        required: true
    },
    content : {
        type: String,
        required: true
        
    },
    createdOn:{
        type: Date,
        default: Date.now
    }
    
})

const Notedb = mongoose.model('Notedb', schema);

module.exports = Notedb;