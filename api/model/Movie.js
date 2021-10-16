const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title : {type : String , required : true , unique : true},
    desc : {type : String , },
    image : {type : String , },
    thumbnail : {type : String , },
    trailer : {type : String , },
    video : {type : String , },
    year : {type : String , },
    limit : {type : String , },
    genre : {type : String , },
    isSeries : {type : Boolean , default : false },
}, {
    timestamps : true
});

module.export = mongoose.model('Movie',MovieSchema); 