import jwt from "jsonwebtoken"
import User from "../models/userModel.js"
import asyncHandler from "express-async-handler"

const protect = asyncHandler( async (req, res, next) => {
  let token

  if(req.headers.authorization && req.headers.authorization.startWith("Bearer")){
    try {
      token = req.headers.authorization.split(' ')[1]
      const decoded = jtw.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(decoded.id).select('-password')
      nest()
    } catch (e) {
      console.error(e)
      res.status(401)
      throw new Error("no authorized, token failed")
    }
  }

  if(!token){
    //not authorized 401
    res.status(401)
    throw new Error("no authorized, no token")
  }

})

export {protect}
