const Strategy = require('passport-local').Strategy
import jwt from 'jsonwebtoken'
import passport from 'passport'
import bcrypt from 'bcrypt'
import sequelize from 'sequelize'

const jwtSecret = process.env.JWT_SECRET || 'myjwt'
const jwtOpts = {algorithm : 'HS256', expiresIn:'30d'}
import models from '../server/models/init-models'

passport.use(adminStrategy())
const authenticate = passport.authenticate('local',{session:false})

module.exports = {
    authenticate,
    login : login,
}

async function login (req,res,next){
    const token = await sign({username:req.user.username,roleType:req.user.roleType});
    const {userId,username,email,roleType} = req.user
    res.cookie('jwt',token, {httpOnly:true})

    res.json({profile:{userId,username,email,roleType},success:true,token:token})
}

async function sign(payload){
    const token  = await jwt.sign(payload,jwtSecret,jwtOpts)
    return token
}

function adminStrategy() {
    return new Strategy(async function (username, password, cb){
        try {
            const result = await models.users.findOne({
                where :sequelize.or({user_name:username},{user_email:username})
            })
            const {user_name,user_id,user_password,user_email} = result.dataValues;
            const compare  = await bcrypt.compare(password, user_password)

            if (compare) return cb(null, {username:user_name,userId:user_id,email:user_email})
        } catch (error) {
            console.log(error);
        }
        cb(null, false)
    })
}