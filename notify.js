import db from '../db'
import room from './room';

const editData = (req, res) => {
    console.log(req.body);
    // res.send(req.body);
    const {building, room, cleaning} = req.body
    // console.log(building);
    // console.log(room);
    // console.log(repair.electricity);
    // UPDATE notify SET electricity = 'true' ,  water = 'true' ,  airconditioner = 'true' ,  door = 'true' , other = 'true' where  building = 'A'and room = '101' ;
    let query = db.query('UPDATE notify SET bedroom = ? ,  toilet = ? ,  airconditioner = ?  where  building = ? and room = ? ', 
    [cleaning.bedroom , cleaning.toilet , cleaning.air , building , room ], 
    (err, data) => {
        //console.log(query.sql)
        if (err) {
            console.log("fail");
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

const repairData = (req, res) => {
    console.log(req.body);
    // res.send(req.body);
    const {building, room, repair} = req.body
    // console.log(building);
    // console.log(room);
    // console.log(repair.electricity);
    // UPDATE notify SET electricity = 'true' ,  water = 'true' ,  airconditioner = 'true' ,  door = 'true' , other = 'true' where  building = 'A'and room = '101' ;
    let query = db.query('UPDATE notify SET electricity = ? ,  water = ? ,  airconditionerRe = ? ,  door = ? , other = ? where  building = ? and room = ? ', 
    [repair.electricity , repair.water , repair.air , repair.door , repair.other._value , building , room ], 
    (err, data) => {
        //console.log(query.sql)
        if (err) {
            console.log("fail");
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

const getData = (req, res) => {
    // console.log("eiei");
    //room = '101';
    // db.query('SELECT * FROM dormitory.notify where room = 101', (err, data) => {
    db.query('SELECT * FROM dormitory.notify', (err, data) => {

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
            console.log(data.room)
        }
    })
}


const doordt = (req, res) => {
    console.log(req.body);
    const {date, room, time} = req.body
    let query = db.query('UPDATE notify SET doortime = ?,doordate = ? where  room = ? ', 
    [time,date , room ], 
    (err, data) => {
        //console.log(query.sql)
        if (err) {
            console.log("fail");
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
const bedroomdt = (req, res) => {
    console.log(req.body);
    const {date, room, time} = req.body
    let query = db.query('UPDATE notify SET bedroomtime = ?,bedroomdate = ? where  room = ? ', 
    [time,date , room ], 
    (err, data) => {
        //console.log(query.sql)
        if (err) {
            console.log("fail");
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
const toiletdt = (req, res) => {
    console.log(req.body);
    const {date, room, time} = req.body
    let query = db.query('UPDATE notify SET toilettime = ?,toiletdate = ? where  room = ? ', 
    [time,date , room ], 
    (err, data) => {
        //console.log(query.sql)
        if (err) {
            console.log("fail");
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
const elecdt = (req, res) => {
    console.log(req.body);
    const {date, room, time} = req.body
    let query = db.query('UPDATE notify SET electricitytime = ?, electricitydate = ? where  room = ? ', 
    [time,date , room ], 
    (err, data) => {
        //console.log(query.sql)
        if (err) {
            console.log("fail");
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
const waterdt = (req, res) => {
    console.log(req.body);
    const {date, room, time} = req.body
    let query = db.query('UPDATE notify SET watertime = ?, waterdate = ? where  room = ? ', 
    [time,date , room ], 
    (err, data) => {
        //console.log(query.sql)
        if (err) {
            console.log("fail");
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
const airredt = (req, res) => {
    console.log(req.body);
    const {date, room, time} = req.body
    let query = db.query('UPDATE notify SET airconditionerRetime = ?, airconditionerRedate = ? where  room = ? ', 
    [time,date , room ], 
    (err, data) => {
        //console.log(query.sql)
        if (err) {
            console.log("fail");
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
const otherdt = (req, res) => {
    console.log(req.body);
    const {date, room, time} = req.body
    let query = db.query('UPDATE notify SET othertime = ?, otherdate = ? where  room = ? ', 
    [time,date , room ], 
    (err, data) => {
        //console.log(query.sql)
        if (err) {
            console.log("fail");
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
const airdt = (req, res) => {
    console.log(req.body);
    const {date, room, time} = req.body
    let query = db.query('UPDATE notify SET airconditionertime = ?, airconditionerdate = ? where  room = ? ', 
    [time,date , room ], 
    (err, data) => {
        //console.log(query.sql)
        if (err) {
            console.log("fail");
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






export default{
    editData,
    getData,
    repairData,
    doordt,
    bedroomdt,
    toiletdt,
    airdt,
    elecdt,
    waterdt,
    airredt,
    otherdt
}