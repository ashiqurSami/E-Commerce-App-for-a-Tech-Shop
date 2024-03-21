const TokenHelper=require('../utility/TokenHelper')

module.exports=(req,res,next)=>{
    let token=req.headers['token']
    if (!token){
        token=req.cookies['token']
    }
    let decodeToken=TokenHelper.DecodeToken(token)
    if (decodeToken===null){
        return res.status(401).json({status:"fail", message:"Unauthorized"})
    }
    else{
        let email=decodeToken['email'];
        let user_id=decodeToken['user_id'];
        req.headers.email=email;
        req.headers.user_id=user_id;
    }
    next()
}