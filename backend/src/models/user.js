const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        unique: [true, 'Email is unique']
    },
    emailVerified: {
        type: Boolean,
        default: false
    },
    phoneNumber: {
        type: String
    },
    photoURL: {
        type: String
    },
    userID: {
        type: String,
    },
    authTime: {
        type: String
    },

    authExpire: {
        type: String
    },
    iat: {
        type: String
    }

}, {timestamps: true, versionKey: false});

const userModel = model('User', userSchema);

module.exports = userModel;

