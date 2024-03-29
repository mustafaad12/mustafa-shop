import Product from "../models/productModel.js"
import asyncHandler from "express-async-handler"

// @desc Fetch all products
// @route Get /api/products
// @access public

const getProducts = asyncHandler( async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

// @desc Fetch single product
// @route Get /api/products/:id
// @access public

const getProductById = asyncHandler( async (req, res) => {
  const id = req.params.id
  const product = await Product.findById(id)

  if (product){
      res.json(product)
  } else {
      res.status(404)
      throw new Error("Product not found")
  }
})

export {getProducts, getProductById}
