const jwt=require('jsonwebtoken')
const dotEnv=require("dotenv");
dotEnv.config();

exports.EncodeToken=(email,user_id)=>{
    let key=process.env.TOKEN_KEY
    let Expire={expiresIn:'48h'}
    let Payload={email:email,user_id:user_id}
    return jwt.sign(Payload,key,Expire)
}

exports.DecodeToken=(token)=>{
    try{
        let key=process.env.TOKEN_KEY
        return jwt.verify(token,key)
    }catch(e){
        return e.toString()
    }
}