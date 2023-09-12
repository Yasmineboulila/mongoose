const router=require("express").Router()
const userController=require("../controlers/users")
const {registerValidation,validation,loginValidation}=require("../middleware/validator")
 
router.post("/api/createUser",registerValidation,validation,userController.createUser)
router.post("/api/login",loginValidation,validation,userController.login)


module.exports={userRouter:router}