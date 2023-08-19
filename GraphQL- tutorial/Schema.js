import {ApolloServer,gql} from "apollo-server"
const typeDefs = gql`

   type Query{
     users: [user]
     User(_id: ID!):user
     quotes: [Quote]
     iquote(by:ID!):[Quote]
   }
    type user{
      _id:ID!
      firstname:String
      lastname:String
      email:String
      password:String
      quotes: [Quote]
    }
    type Quote{
      name:String
      by:ID
    }

    type Token{
      token:String
    }
    type Mutation{
      SignupUser(newUser:Userinput!):user,
      signinUser(userSignin:UserSignininput!):Token
    }

    input Userinput{
      firstname:String!,
      lastname:String!,
      email:String!,
      password:String!
    }

    input UserSignininput{
      email:String!
      password:String!
    }
`
export default typeDefs