const jwt = require('jsonwebtoken');

module.exports.verifyJwtToken = (req,res,next)=>{
    var token;
    if('authorization' in req.headers)
        token = req.headers['authorization'].split('Bearer')[1];
    console.log(token);
    
    if(!token)
        return res.status(403).send({auth:false,message:"No Token provided"});
    else{
        jwt.verify(token, process.env.JWT_SECRET,
            (err,decoded) => {
                console.log("Inside Callback function of verify");
                if(err){
                    return res.status(500).send({auth:false,message:"Token Authentication Failed"});
                }
                if(decoded) {
                    req._id = decoded._id;
                    next();
                }
            }
        );
    }
}