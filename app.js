const express = require("express")
const db = require("./config/db")

const authRoutes = require("./routes/authRoutes")
const kosRoutes = require("./routes/kosRoutes")
const roomRoutes = require("./routes/roomRoutes")
const memberRoutes = require("./routes/memberRoutes")
const bookingRoutes = require("./routes/bookingRoutes")
const reviewRoutes = require("./routes/reviewRoutes")
const facilityRoutes = require("./routes/facilityRoutes")

const app = express()

app.use(express.json())

app.use("/api",authRoutes)
app.use("/api",kosRoutes)
app.use("/api",roomRoutes)
app.use("/api",memberRoutes)
app.use("/api",bookingRoutes)
app.use("/api",reviewRoutes)
app.use("/api",facilityRoutes)

app.get("/", (req,res)=>{
res.send("API Kos Hunter Jalan")
})

app.listen(3000,()=>{
console.log("Server running di port 3000")
})