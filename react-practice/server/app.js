const express = require('express')
const app = express()
const PORT = 8080
require('dotenv').config()
const connectionString = process.env.CONNECTION_STRING
const pgp = require("pg-promise")()
const db = pgp(connectionString)
const cors = require('cors')
// stripe info
const stripe = require('stripe')('sk_test_51Hrk26I9tG0sloo8T6Dn8gb31mbenFiebqL3vyRNs4BUZPlgQ5OviIdjjpTqk8bqHM7GWLxd9gr1g65q8BXxndtG00CMBccM4Q');
const YOUR_DOMAIN = 'http://localhost:3000/checkout';
const fileUpload = require("express-fileupload")

app.use(cors())
app.use(express.json())
//stripe
app.use(express.static('.'));
app.use(fileUpload())

// photo upload
app.post("/upload", (req, res) => {
  
  if(req.files === null) {
    return res.status(400).json({msg: "no file was uploaded"})
  }

  const file = req.files.file

  file.mv(`../client/public/uploads/${file.name}`, err => {
  // file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if(err) {
      console.error(err)
      return res.status(500).send(err)
    }
    console.log(file.name)
    res.json({fileName: file.name, filePath: `/uploads/${file.name}`})
  })
})



//stripe
app.post('/create-session', async (req, res) => {
    console.log("fired")
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Stubborn Attachments',
            images: ['https://i.imgur.com/EHyR2nP.png'],
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.json({ id: session.id });
});





// print all info

app.get("/products", async (req, res) => {
   let items = await db.any('SELECT name, description, price_unit, unit, company_name, vendor_id FROM products JOIN vendors ON vendors.id = products.vendor_id WHERE (products.active = TRUE)')
    res.json(items)
})

app.listen(PORT, () => {console.log("server is running...")})