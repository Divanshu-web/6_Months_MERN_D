require('dotenv').config()
const express = require("express")
var cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extends: false }))
app.use(express.static("server/public"))
const db = require("./server/config/db")
const seed = require("./server/config/seed")
const PORT = process.env.PORT

app.get("/", (req, res) => {
    res.send("welcome to my server")
})

const adminRoutes = require("./server/routes/adminRoutes")
const customerRoutes = require("./server/routes/customerRoutes")

app.use("/admin", adminRoutes)
app.use("/customer", customerRoutes)

app.listen(PORT, (err) => {
    if (err) {
        console.log("Error in Server", err);
    }
    else {
        console.log(`Server is running on http://localhost:${PORT}`)
    }
})