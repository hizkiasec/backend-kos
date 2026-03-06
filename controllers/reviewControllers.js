const db = require("../config/db")

exports.createReview = (req,res)=>{

const {user_id,kos_id,comment} = req.body

const sql = "INSERT INTO reviews (user_id,kos_id,comment) VALUES (?,?,?)"

db.query(sql,[user_id,kos_id,comment],(err,result)=>{
if(err){
return res.status(500).json(err)
}

res.json({
message:"Review berhasil ditambahkan"
})
})

}

exports.getReviews = (req,res)=>{

const {kos_id} = req.params

const sql = `
SELECT reviews.*, users.name
FROM reviews
JOIN users ON reviews.user_id = users.id
WHERE kos_id=?
`

db.query(sql,[kos_id],(err,result)=>{
if(err){
return res.status(500).json(err)
}

res.json(result)
})

}

exports.replyReview = (req,res)=>{

const {id} = req.params
const {owner_reply} = req.body

const sql = "UPDATE reviews SET owner_reply=? WHERE id=?"

db.query(sql,[owner_reply,id],(err,result)=>{
if(err){
return res.status(500).json(err)
}

res.json({
message:"Reply berhasil"
})
})

}