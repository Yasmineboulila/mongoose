const Poste=require('../models/posteModels')

module.exports={
	createPoste:((req,res)=>{
		try {
			const poste=new Poste(req.body)
			poste.save()
			res.status(201).send({msg:"OK",poste})
		} catch (error) {
			res.status(500).send(error)
		}
		
		
	}),
	getPoste:(async(req,res)=>{
		try {
			const data=await Poste.find({})
			res.status(200).send({msg:"OK",data})
		} catch (error) {
			res.status(500).send(error)
		}
	}),
	deletePoste:(async(req,res)=>{
		try {
			const data=await Poste.findByIdAndRemove({_id:req.params.id})
			res.status(201).send({msg:"OK",data})
		} catch (error) {
			res.status(500).send(error)
		}
	}),
	updatePoste:(async(req,res)=>{
		try {
			await Poste.findByIdAndUpdate({_id:req.params.id},{$set:req.body})
			const data=await Poste.findById({_id:req.params.id})
			res.status(202).send({msg:"updated",data})
		} catch (error) {
			res.status(500).send(error)
		}
	})

}
