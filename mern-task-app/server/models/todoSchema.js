const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    completed : {
        type : Boolean,
        default : false
    },
    addedOn : {
        type : String,
        default : Date.now()
    }
});


module.exports = mongoose.model("Todo", todoSchema )