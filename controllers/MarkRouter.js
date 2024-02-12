const express=require("express")
const markModel=require("../model/MarkModel")

const router=express.Router()

router.post("/addmark",async(req,res)=>{
    let data=req.body
    let mark=new markModel(data)
    let result=await mark.save()
    res.json({
        status:"success"
    })
})
module.exports=router