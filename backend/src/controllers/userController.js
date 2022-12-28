const admin = require('../firebase/firebase.config');
const {userCreateService, userFindByIDService, userUpdateService} = require("../services/userService");

exports.login = async (req, res)=>{
    try {
       /* console.log(req.currentUser);
        res.send(req.currentUser)*/

      /*  const token = req.headers.authorization;

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
        }*/

        const userInfo = req.currentUser;

        const isUser = await userFindByIDService(userInfo.uid);

        let user ;

        if (!isUser){
            user = await userCreateService(userInfo);
        }else {
            user = await userUpdateService(userInfo.uid, userInfo)
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

exports.test = async (req, res)=>{
    try {

        res.send('Hello world');

    }catch (err){
        res.status(500).json({
            status: 'fail',
            error: err
        })
    }
}