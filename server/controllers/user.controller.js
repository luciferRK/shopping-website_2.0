const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const User = mongoose.model('User');

module.exports.register = (req,res,next) => {
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.phone = req.body.phone;
    user.country = req.body.country;
    user.state = req.body.state;
    user.city = req.body.city;
    user.street = req.body.street;
    user.h_no = req.body.h_no;
    user.zip = req.body.zip;
    user.password = req.body.password;
    user.save((err,doc) => {
        if(!err)
            res.send(doc);
        else
            if (err.code==11000)
                res.status(422).send(["Duplicate Email found"]);
            else
                return next(err);
    });
}

module.exports.authenticate = (req,res,next)=>{
    console.log("Inside Authenticate");
    console.log(req);
    passport.authenticate('local',(err,user,info)=>{
        if (err) {
            console.log("Inside Err");
            // console.log(res.status(400).json(err));
            return res.status(400).json(err);
        }
        else if(user) {
            console.log("Inside User");
            // console.log(res.status(200).json({'token':user.generateJwt()}));
            return res.status(200).json({'token':user.generateJwt()});
        }
        else {
            console.log("Inside Info");
            // console.log(res.status(404).json(info));
            return res.status(404).json(info);
        }
    })(req,res);
}

module.exports.Profile = (req,res,next)=>{
    User.findOne({_id:req._id},
        (err,user)=>{
            if(!user)
                return res.status(404).json({status:false,message:"User not found"});
            else   
                return res.status(200).json({status:true,user:_.pick(user,['fullName','email','phone','country','state','city','street','h_no','zip'])});
        }
    );
}