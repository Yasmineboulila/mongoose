const mongoose = require('mongoose')

const Poste = new mongoose.Schema({
    title:String,
    image:String,
    rating:Number
})

module.exports = mongoose.model("Post", Poste)
