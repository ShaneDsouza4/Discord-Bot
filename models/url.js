const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
//Schema
const urlSchema = new mongoose.Schema({
    shortID:{
        type: String,
        required: true,
        unique: true
    },
    redirectURL:{
        type:String,
        required: true
    },
    visitHistory:[{
        timestamp: {type: Number}
    }],
    createdBy:{
        type: String
    }
}, {timestamps: true});

//Model
const URL = mongoose.model('url', urlSchema);

//Exports
module.exports = URL;