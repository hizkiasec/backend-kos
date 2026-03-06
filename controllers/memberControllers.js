const db = require("../config/db")

exports.createMember = (req,res)=>{

const {name,email,phone,room_id,check_in} = req.body

const sql = "INSERT INTO members (name,email,phone,room_id,check_in) VALUES (?,?,?,?,?)"

db.query(sql,[name,email,phone,room_id,check_in],(err,result)=>{
if(err){
return res.status(500).json(err)
}

const updateRoom = "UPDATE rooms SET status='occupied' WHERE id=?"

db.query(updateRoom,[room_id])

res.json({
message:"Member berhasil ditambahkan"
})
})

}

exports.getMembers = (req,res)=>{

const sql = `
SELECT members.*, rooms.room_number, kos.name AS kos_name
FROM members
JOIN rooms ON members.room_id = rooms.id
JOIN kos ON rooms.kos_id = kos.id
`

db.query(sql,(err,result)=>{
if(err){
return res.status(500).json(err)
}

res.json(result)
})

}