import db from '../db'

const getUserList = (req, res) => {
    db.query('SELECT * FROM user', (err, data) => {
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

const getUserByIndex = (req, res) => {
    const { index } = req.params
    db.query('SELECT * FROM user where id = ?', [index], (err, data) => {
        if (err) {
            console.error(err)
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

const editData = (req, res) => {
    console.log(req.body)
    const { name, sername, Tel, passportnumber, roomid } = req.body
    let query = db.query('UPDATE user SET name = ?, sername = ?,Tel = ?,passportnumber = ? WHERE roomid = ?', [name, sername, Tel, passportnumber,roomid], (err, data) => {
        console.log(query.sql)
        if (err) {
            res.status(500).json({
                success: false
            })
        }
        else {
            if (data.length > 0) {
                req.session.user = data[0]
                req.session.save(() => {
                    res.json({
                        success: true,
                    })
                })
            }
            else {
                res.status(400).json({
                    success: false,
                    msg: 'Wrong username or password'
                })
            }
        }
    })
}

//   const createUser = (req, res) => {
//     const { username, password, name } = req.body
//     db.query('INSERT INTO users (username,password,name) VALUES (?,?,?)', [username, password, name], (err) => {
//       if (err) {
//         console.error(err)
//         res.status(500).json({
//           success: false
//         })
//       } else {
//         res.json({
//           success: true
//         })
//       }
//     })

//   }

export default {
    getUserList,
    // createUser,
    getUserByIndex,
    //Userlist
    editData
}