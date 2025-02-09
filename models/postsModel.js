const { type } = require("express/lib/response");
const { required } = require("joi");
const mongoose = require( "mongoose");

const postSchema = mongoose.Schema({
    title: {
        type:String,
        required: [true, 'title is required'],
        trim: true,
 
    },
description:{
    type:String,
    required: [true, 'description is required'],
    trim: true,

},
UserId: {
type: mongoose.Schema.Types.ObjectId,
ref: 'User',
required: true,
},
    
},
{timeStamp: true});

module.exports = mongoose.model('post', postSchema);