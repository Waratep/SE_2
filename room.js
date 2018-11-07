import db from '../db'

const add = (req,res)=>{
   const{ id,waterBill,electBill,alert} = req.body

   db.query('SELECT * FROM room WHERE waterBill = ? and electBill = ? and alert = ? and id = ?',[waterBill,electBill,alert],(err,data) => {
     if(err){
         res.status(500).json({
             success: false
         })
     }
     else{
        req.session.room = data[0]
        req.session.save(() => {
            res.json({
                success: true
            })
        })
     }
   })
}

const getDetailByIndex = (req,res) => {
    const{ index } = req.params
    db.query('SELECT * FROM room WHERE id = ?',[index],(err,data) => {
        if (err) {
            console.error(err);
            res.status(500).json({
                success: false
            })
        } else {
            res.json({
                success: true,
                data
            })
        }
    })
}



export default{
    add,
    getDetailByIndex
}