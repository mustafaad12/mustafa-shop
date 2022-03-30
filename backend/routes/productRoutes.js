import express from "express"
import asyncHandler from "express-async-handler"
const router = express.Router()
import Product from "../models/productModel.js"

// @desc Fetch all products
// @route Get /api/products
// @access public

router.get("/", asyncHandler( async (req,res)=>{
    const products = await Product.find({})
    res.json(products)
}))

// @desc Fetch single product
// @route Get /api/products/:id
// @access public

router.get("/:id", asyncHandler( async (req,res)=>{
    const id = req.params.id
    const product = await Product.findById(id)

    if (product){
        res.json(product)
    } else {
        res.status(404).json({message: "product not found"})
    }
}))

export default router