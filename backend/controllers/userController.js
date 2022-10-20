import User from "../models/userModel.js"
import asyncHandler from "express-async-handler"
import generateToken from "../utils/generateToken.js"

// @desc authenticate user && get token
// @route Post /api/users/login
// @access public

const authUser = asyncHandler ( async (req, res) => {
  const {email, password} = req.body
  const user = await User.findOne({email})

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user._email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    })
  } else {
    res.status(404)
    throw new Error("invalid email or password")
  }
})

// @desc register a new user
// @route Post /api/users
// @access public

const registerUser = asyncHandler( async (req, res) => {
  const {name, email, password} = req.body

  const existUser = await User.findOne({email})

  //bad request
  if(existUser){
    res.status(400)
    throw new Error('user alreade exist')
  }

  const user = await user.create({
    name,
    email,
    password
  })

  if(user){
    //something created
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user._email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error('invalid user data')
  }
})


// @desc get user profile
// @route Post /api/users/profile
// @access private

const getUserProfile = asyncHandler( async (req, res) => {
  const user = await User.findBtId(req.user._id)

  if(user){
    res.json({
      _id: user._id,
      name: user.name,
      email: user._email,
      isAdmin: user.isAdmin
    })
  } else {
    res.status(404)
    throw new Error("user not found")
  }
})

export {authUser, registerUser, getUserProfile}
