import express from "express"
const router = express.Router()
import {authUser} from "../controllers/userController.js"

router.post("/", authUser)

export default router
