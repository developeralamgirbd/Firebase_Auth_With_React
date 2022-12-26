const User = require('../models/user');

exports.userCreateService = async (userInfo) =>{

    const user = {
        name: userInfo.name ,
        email: userInfo.email,
        emailVerified: userInfo.email_verified,
        phoneNumber: userInfo.phone_number,
        photoURL: userInfo.picture,
        userID: userInfo.uid,
        authTime: userInfo.auth_time,
        authExpire: userInfo.exp,
        iat: userInfo.iat
    }

    return await User.create(user);
}

exports.userUpdateService = async (userID, decodedValue) =>{

    return await User.findOneAndUpdate({userID: userID}, {$set: { authTime: decodedValue.auth_time}}, {new: true});
}

exports.userFindByIDService = async (userID) =>{
    return await User.findOne({userID: userID});
}