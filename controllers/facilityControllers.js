const db = require("../config/db")

exports.createFacility = (req,res)=>{

const {kos_id,name} = req.body

const sql = "INSERT INTO facilities (kos_id,name) VALUES (?,?)"

db.query(sql,[kos_id,name],(err,result)=>{
if(err){
return res.status(500).json(err)
}

res.json({
message:"Fasilitas berhasil ditambahkan"
})
})

}

exports.getFacilities = (req,res)=>{

const {kos_id} = req.params

const sql = "SELECT * FROM facilities WHERE kos_id=?"

db.query(sql,[kos_id],(err,result)=>{
if(err){
return res.status(500).json(err)
}

res.json(result)
})

}