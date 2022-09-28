import bcrypt from 'bcrypt'
const SALT_ROUND = 10

const signup = async (req,res) =>{
    const {username, email, password} = req.body

    let hasPassword = password;
    hasPassword = await bcrypt.hash(hasPassword,SALT_ROUND)
    try {
        const result = await req.context.models.users.create({
            user_name : username,
            user_email : email,
            user_password : hasPassword
        })
        const {user_name, user_email} = result.dataValues
        return res.send({user_name,user_email})
    } catch (error) {
        return res.status(404).send(error)
    }
}

export default {
    signup
}