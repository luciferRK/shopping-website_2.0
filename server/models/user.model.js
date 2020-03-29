const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: "Name cannot be empty"
    },
    email:{
        type:String,
        required: "Email cannot be empty",
        unique:true
    },
    phone:{
        type: String,
        required: "Phone cannot be empty",
        minlength:[10,'Invalid Phone number']
    },
    country:{
        type:String,
        required: "Country cant be empty"
    },
    state:{
        type: String
    },
    city:{
        type: String
    },
    street:{
        type: String
    },
    h_no:{
        type: String
    },
    zip:{
        type: String
    },
    password:{
        type:String,
        required:"Password cannot be empty",
        minlength:[5,"Password is too short"]
    },
    saltSecret:String
});

userSchema.pre('save',function(next){
    console.log("Inside Save inside user Schema");
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(this.password,salt,(err,hash)=>{
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

userSchema.methods.verifyPassword = function(password){
    return bcrypt.compareSync(password,this.password);
}

userSchema.methods.generateJwt = function(){
    return jwt.sign({_id:this._id},
        process.env.JWT_SECRET,
        {
            algorithm:'HS256',
            expiresIn: process.env.JWT_EXP
        });
}

mongoose.model('User',userSchema);