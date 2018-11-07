import user from 'user.js'
import db from '../db'

const login = (req,res)=>{
    const {username,passsword} = req.body
    db.query('SELECT * FROM user WHERE username = ? and hash = ?',[username,passsword],(err,data)=>{
        if(err){
            res.status(500).json({
                success : false
            })
        }
        else{
            if(data.length > 0){
               req.session.user =  data[0]
               req.session.save(() => {
                   res.json({
                       success : true
                   })
               })
            }
            else{
                res.status(400).json({
                    success : false,
                    msg : 'Wrong username or password'
                })
            }
        }
    })
}


export default{
    login
}