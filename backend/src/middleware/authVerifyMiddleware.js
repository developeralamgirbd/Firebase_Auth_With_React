const admin = require("../firebase/firebase.config");

exports.authVerifyMiddleware = async (req, res, next)=>{
    try {
        const token = req.headers.authorization;

        if (!token){
            return res.status(400).json({
                status: 'fail',
                error: 'Invalid Token'
            })
        }

        const userInfo = await admin.auth().verifyIdToken(token);

        if (userInfo){
            req.currentUser = userInfo;
            next();
        }

    }catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'fail',
            error: err.message
        })
    }
}