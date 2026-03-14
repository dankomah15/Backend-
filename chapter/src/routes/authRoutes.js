import express from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import db from "../db.js"


const router = express.Router()
//Register user endpoint /auth/regiter
router.post("/register", (req, res) => {
  const { username, password } = req.body;
  //save the username and irreversibly encrypted password
  //save gilgamesh@gmail.com | askinfasdfkd...hsggd...dsaa..dsa
  console.log(username, password)
  res.sendStatus(201)
})

router.post('/login', (req, res) => {
  //we get the email and we look up the password associated with email in the database
  //but we get it back and see it`s ecrypted,which means that we cannot compare it to them one the user just used trying to login
  //is what we can do,is agin, one way to encrypt the password the user just entered
  

})

export default router
