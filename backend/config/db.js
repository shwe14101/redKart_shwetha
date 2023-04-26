const mongoose = require('mongoose');
const config = require('config')
const db= config.get('mongoURI');

 //const db="mongodb+srv://shwethasrikanth:VJxu23aZMEtf5aeb@cluster0.w0uvamc.mongodb.net/?retryWrites=true&w=majority";
const connectDB = async ()=>{
    try{
        mongoose.set('strictQuery',true);
        await mongoose.connect(db,{
            useNewUrlParser: true
        });
        console.log("Mongo db connected");
    }catch(err){
        console.error(err.message);
        process.exit(1)
    }
}

module.exports = connectDB;
