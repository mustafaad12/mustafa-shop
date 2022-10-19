import User from "../models/userModel.js"
import asyncHandler from "express-async-handler"

// @desc authenticate user && get token
// @route Post /api/users/login
// @access public

const authUser = asyncHandler ( async (req, res) => {
  const {email, password} = req.body
  const user = await User.findOne({email})

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      email: user._email,
      isAdmin: user.isAdmin,
      token: null
    })
  } else {
    res.status(404)
    throw new Error("invalid email or password")
  }
})

export {authUser}
