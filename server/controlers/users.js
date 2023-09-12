const users=require("../models/userModel")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

module.exports={
    createUser:(async(req,res)=>{
        const {email,password}=req.body
try {
    const found=await users.findOne({email})
    if (found){
        res.status(404).send({msg:"user exist"})
    }
    else {
        const oneUser=new users(req.body)
        const salt=10
        const hashPassword=await bcrypt.hash(password,salt)
        oneUser.password=hashPassword
        const data={id:oneUser._id}
        const token = jwt.sign(data, "jwtSecretKey")
        await oneUser.save()
        res.status(200).send({msg:"user created",user:oneUser,token:token})
    }
} catch (error) {
    res.status(500).send(error)
}
    }),
    login:(async(req,res)=>{
        const {email,password}=req.body
        try {
            const check=await users.findOne({email})
            if(!check){
                res.status(404).send({msg:"user doesn't exist"})
            }
            else {
                const compare=bcrypt.compareSync(password,check.password)
                if(!compare){
                    res.status(404).send({msg:"password wrong"})
                }
                else{
                    const payload={id:check._id}
                    const token= jwt.sign(payload, "jwtSecretKey")
                    res.status(200).send({msg:"login succes",user:check,token:token})
                }
            }
        } catch (error) {
            res.status(500).send(error)
            
            
        }
        
    })

}