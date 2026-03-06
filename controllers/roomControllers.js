const db = require("../config/db")

exports.createRoom = (req,res)=>{

const {kos_id,room_number,price,status} = req.body

const sql = "INSERT INTO rooms (kos_id,room_number,price,status) VALUES (?,?,?,?)"

db.query(sql,[kos_id,room_number,price,status],(err,result)=>{
if(err){
return res.status(500).json(err)
}

res.json({
message:"Room berhasil ditambahkan"
})
})

}

exports.getRooms = (req,res)=>{

const {kos_id} = req.query

let sql = "SELECT * FROM rooms"

if(kos_id){
sql += " WHERE kos_id = ?"
db.query(sql,[kos_id],(err,result)=>{
if(err){
return res.status(500).json(err)
}
res.json(result)
})
}else{
db.query(sql,(err,result)=>{
if(err){
return res.status(500).json(err)
}
res.json(result)
})
}

}

exports.getAvailableRooms = (req,res)=>{

const sql = "SELECT * FROM rooms WHERE status='available'"

db.query(sql,(err,result)=>{
if(err){
return res.status(500).json(err)
}

res.json(result)
})

}