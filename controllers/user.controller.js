 const user=require('../models/user.model')
 
 
 exports.signup =async ( req , res) => {

   console.log(req.body)

     const data = {
    firstname : req.body.firstname,
    lastname : req.body.laststname,
    email : req.body.email,
    password : req.body.password,
    bio: req.body.bio ,
    picture : req.body.picture,
    birthdate : req.body.birthdate

     }
     const  _user = await  new user(data) 
     
     await  _user.save().then(
        (createdUser)=>{
            res.status(200).json({message:"user added successfully"})
        }
      )
      .catch(
        (err)=>{
            res.status(400).send(err)
        }
      )
 }