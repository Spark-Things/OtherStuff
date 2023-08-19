import {ApolloServer,gql} from "apollo-server"
import {ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core"
import typeDefs from "./Schema.js";

import mongoose from "mongoose";
import { MONGO_URI } from "./config.js";


//-------- Notes-------------------------
//  query(_parent,arguments)

// mongodb+srv://Spark:0565@cluster0.ufpx9.mongodb.net/graphQldb?retryWrites=true&w=majority

mongoose.connect(MONGO_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on("connected",() =>{
  console.log("Connect to Database");
})

mongoose.connection.on("Error",(err) =>{
  console.log("err connection",err);
})


// import modlle
import './model/quotes.js'
import './model/user.js'

import resolvers from "./Resolvers.js"; 



const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins:[
    ApolloServerPluginLandingPageGraphQLPlayground()
  ]
})

server.listen().then(({url}) =>{
  console.log(`server Ready at ${url}`);
});


