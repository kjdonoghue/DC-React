const express = require('express')
const app = express()
const PORT = 8080
require('dotenv').config()
const connectionString = process.env.CONNECTION_STRING
const pgp = require("pg-promise")()
const db = pgp(connectionString)
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get("/products", async (req, res) => {
   let items = await db.any('SELECT * FROM products')
    res.json(items)
})

app.listen(PORT, () => {console.log("server is running...")})