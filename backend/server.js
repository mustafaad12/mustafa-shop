import express from "express"
import dotenv  from "dotenv"
import connectDB from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import {notFound, errorHandler} from "./middleware/errorMiddleware.js"
const app = express()

dotenv.config()

connectDB()

app.use(express.json())

app.get("/", (req,res)=>{
    res.send("app is running")
})

app.use("/api/products", productRoutes)
app.use("/api/users", userRoutes)

app.use(notFound)

app.use(errorHandler)

const port = process.env.PORT || 5000

app.listen(port, console.log(`Server running on  port ${port}`))
