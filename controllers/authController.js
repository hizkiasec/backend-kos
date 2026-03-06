const db = require("../config/db")

exports.register = (req,res)=>{
const {name,email,password,phone,role} = req.body

const sql = "INSERT INTO users (name,email,password,phone,role) VALUES (?,?,?,?,?)"

db.query(sql,[name,email,password,phone,role],(err,result)=>{
if(err){
return res.status(500).json(err)
}

res.json({
message:"Register berhasil"
})
})
}

exports.login = (req,res)=>{
const {email,password} = req.body

const sql = "SELECT * FROM users WHERE email=? AND password=?"

db.query(sql,[email,password],(err,result)=>{
if(err){
return res.status(500).json(err)
}

if(result.length === 0){
return res.json({
message:"Email atau password salah"
})
}

res.json({
message:"Login berhasil",
user: result[0]
})
})
}

exports.updateUser = (req,res)=>{

const {id} = req.params
const {name,email,phone} = req.body

const sql = "UPDATE users SET name=?,email=?,phone=? WHERE id=?"

db.query(sql,[name,email,phone,id],(err,result)=>{
if(err){
return res.status(500).json(err)
}

res.json({
message:"User berhasil diupdate"
})
})

}