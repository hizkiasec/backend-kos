const db = require("../config/db")

exports.createKos = (req,res)=>{
const {owner_id,name,address,price,gender,description} = req.body

const sql = "INSERT INTO kos (owner_id,name,address,price,gender,description) VALUES (?,?,?,?,?,?)"

db.query(sql,[owner_id,name,address,price,gender,description],(err,result)=>{
if(err){
return res.status(500).json(err)
}

res.json({
message:"Kos berhasil ditambahkan"
})
})
}

exports.getKos = (req,res)=>{

const gender = req.query.gender

let sql = "SELECT * FROM kos"

if(gender){

sql += " WHERE gender = ?"

db.query(sql,[gender],(err,result)=>{
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