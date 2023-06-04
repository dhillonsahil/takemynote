const mongoose = require('mongoose')
const mongooseUrl = "mongodb://127.0.0.1:27017/takemynote"
const connectToMongo = () => {
    mongoose.connect(mongooseUrl,()=>{
        console.log("connected to mongo sucessfully")
    })
}

module.exports = connectToMongo;