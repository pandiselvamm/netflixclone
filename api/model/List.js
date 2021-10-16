const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    title : {type : String , required : true , unique : true},
    type : {type : String , },
    genre : {type : String , },
    content : {type : String , },
    type : {type : Array , },
}, {
    timestamps : true
});

module.export = mongoose.model('List',ListSchema); 