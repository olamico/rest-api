
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email:{
        type: String,
        required: [true, 'email is required'],
        trim: true,
        unique: [true, 'email must be unique'],
        lowercase: true,
        minLength:[5, 'email must not be less than 5']
    },
    password: {
        type: String,
        required: [true, 'email is required'],
        trim: true,
        select: false
    },
    verified: {
        type: Boolean,
        Default: false,
    },
    verificationCode: {
        type: String,
        select: false,
    },
    verificationCodeValidation: {
        type: Number,
        select: false,
    },
    forgotPasswordCode: {
        type: String,
        select: false,
    },
    forgotPasswordCodeValidation: {
        type: Number,
        select: false,
    },

},
{
    timestamps: true,
});

module.exports = mongoose.model( "User", userSchema);