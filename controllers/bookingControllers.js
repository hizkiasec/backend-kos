const db = require("../config/db")

exports.createBooking = (req,res)=>{

const {user_id,room_id,booking_date} = req.body

const sql = "INSERT INTO bookings (user_id,room_id,booking_date) VALUES (?,?,?)"

db.query(sql,[user_id,room_id,booking_date],(err,result)=>{
if(err){
return res.status(500).json(err)
}

res.json({
message:"Booking berhasil dibuat"
})
})

}

exports.getBookings = (req,res)=>{

const sql = `
SELECT bookings.*, users.name AS user_name, rooms.room_number
FROM bookings
JOIN users ON bookings.user_id = users.id
JOIN rooms ON bookings.room_id = rooms.id
`

db.query(sql,(err,result)=>{
if(err){
return res.status(500).json(err)
}

res.json(result)
})

}

exports.updateBookingStatus = (req,res)=>{

const {id} = req.params
const {status} = req.body

const sql = "UPDATE bookings SET status=? WHERE id=?"

db.query(sql,[status,id],(err,result)=>{
if(err){
return res.status(500).json(err)
}

res.json({
message:"Status booking diupdate"
})
})

}


exports.getBookingHistory = (req,res)=>{

const {month} = req.query

const sql = `
SELECT * FROM bookings
WHERE MONTH(booking_date)=?
`

db.query(sql,[month],(err,result)=>{
if(err){
return res.status(500).json(err)
}

res.json(result)
})

}