const express = require("express")
const cors = require("cors")
const restaurantsRouter = require("./router/restaurants.router.js")
require("dotenv").config()

const port = process.env.port

let app = express()

app.use(cors())
app.use(express.json())
app.use(restaurantsRouter)

app.listen(port, ()=>{console.log("Running on port :" + port)})