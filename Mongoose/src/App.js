const mongoose = require('mongoose');
const validator = require('validator'); 

mongoose.connect('mongodb://localhost:27017/db1')
.then(() => console.log('Connected to database'))
.catch((err) => console.log(err));

const playlistShema = mongoose.Schema({
  name: { 
    type: String,
    required: true,
    lowercase: true 
  },
  age: {
    type: Number,
    required: true,
    validate(value) {
      if(value < 0){
        throw new Error("Age Should be Greteer than 0");
      }
    }
  },
  sex: String,
  virgin: Boolean,
  email: {
    type: String,
    validate(value) {
      if(!validator.isEmail(value)){
        throw new Error("Invalid Email");
      }
    }
  }
})
const data = mongoose.model("data",playlistShema);
const AddDocs = async() =>{
  try{
        const docs = data({
          name: "vraj",
          age: 51,
          sex: "Yes",
          virgin: false,
          email : "vraj@ss"
        })       
        const docs1 = data({
          name: "dilu",
          age: 45,
          sex: "Yes",
          virgin: false
        }) 
        const docs2 = data({
          name: "Yash",
          age: 30,
          sex: "Yes",
          virgin: false
        }) 
        const docs3 = data({
          name: "deep",
          age: 25,
          sex: "Yes",
          virgin: false
        }) 
        const docs4 = data({
          name: "Abhi",
          age: 47,
          sex: "Yes",
          virgin: false
        }) 


        const result = await data.insert({docs});
        // insertMany([docs,docs1,docs2,docs3,docs4]);
        console.log(result);}
  catch(err) {console.log(err);}
}
// AddDocs();

// show datas in database


const getDocuments = async() =>{
  const result = await data
  // .find({age: {$gt : 40}})
  // .find({age: {$lte : 40}})
  .find({sex: {$in : ["No","Yes"]}})
  .sort({name: 1})
  // .select({name: 1,_id: 0});
  console.log(result);
}

// getDocuments();

// update documents

const updateDocuments = async(_id) =>{
  try{const result = await data.updateOne({_id},{
    $set : {
       virgin : true
    }
  });
  console.log(result);
}
 catch(err){console.log(err)}
}

// updateDocuments("62512859492d175a7a751434")

//delete documents

const deleteDocuments = async(_id) =>{
  try{const result = await data.deleteOne({_id},{
    $set : {
       virgin : true
    }
  });
  console.log(result);
}
 catch(err){console.log(err)}
}

// deleteDocuments("62512859492d175a7a751434")