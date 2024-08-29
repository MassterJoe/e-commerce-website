const express = require('express');
const app = express()
const dotenv = require("dotenv");
const products = require('./data/Products');
dotenv.config()
const port = process.env.PORT;


const mongoose = require("mongoose");



// Connect to the database
mongoose.connect(process.env.mongodb_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });


  const databaseSeeder = require('./databaseSeeder')
//database seeder routes
app.use('/api/seed', databaseSeeder)




app.listen(port || 9000, ()=>{
    console.log(`Server listening on port ${port}`);
})






/*test products routes

app.get("/api/products", (req,res)=>{
    res.json(products);
})

app.get("/api/products/:id", (req, res)=>{
    const product = products.find((product=>product.id === req.params.id));
    res.json(product);
})

*/