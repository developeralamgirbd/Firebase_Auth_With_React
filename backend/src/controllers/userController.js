const admin = require('../firebase/firebase.config');
const {userCreateService, userFindByIDService, userUpdateService} = require("../services/userService");

exports.login = async (req, res)=>{
    try {

        const token = req.headers.authorization;

        if (!token){
            return res.status(500).json({
                status: 'Fail',
                error: 'Invalid Token'
            });
        }

        const decodedValue = await admin.auth().verifyIdToken(token);

        if (!decodedValue){
            return res.status(400).json({
                status: 'Fail',
                error: 'Unauthorized'
            })
        }

        const isUser = await userFindByIDService(decodedValue.uid);

        let user ;

        if (!isUser){
            user = await userCreateService(decodedValue);
        }else {
           user = await userUpdateService(decodedValue.uid, decodedValue)
        }

        return res.status(200).json({
            status: 'success',
            data: user
        })

    }catch (err) {
        console.log(err);
        return res.status(400).json({
            status: 'fail',
            data: err.message
        })
    }
}