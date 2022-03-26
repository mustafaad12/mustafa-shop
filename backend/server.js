import express from "express"
import dotenv  from "dotenv"
import products from "./data/products.js"
const app = express()

dotenv.config()

app.get("/", (req,res)=>{
    res.send("app is running")
})

app.get("/api/products", (req,res)=>{
    res.json(products)
})

app.get("/api/products/:id", (req,res)=>{
    const id = req.params.id
    const product = products.find((p)=> p._id === id)
    res.json(product)
})

const port = process.env.PORT || 5000

app.listen(port, console.log(`Server running on  port ${port}`))