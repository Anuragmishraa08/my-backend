const mongoose =require ("mongoose");




//Schema 
const userschema = new mongoose.Schema({
    firstname:{
        type :String,
        required :true,

    },
    lastname:{
        type:String,


    },
    email:{
        type:String,
        required :true,
        unique:true,
    },
})


const user = mongoose.model(user, userschema);


//connection 

.connect("mongodb://127.0.0.1:27017/youtube-app-1")
.then(()=> console.log("mongodb connected"))
.catch((error)=> console.log("mongodb error", error));
