var db = global.db;

//Creates a new user.
exports.createUser = function(user){
  let userModel = db.User;
  userModel.create({
                firstName:user.firstName,
                middleName:user.middleName,
                lastName:user.lastName,
                email:user.email,
                altEmail:user.altEmail,
                phone:user.phone,
                blogURL:user.blogURL,
                nickName:user.nickName,
                language:user.language,
                hobbies:user.hobbies,
                }).then((result)=>console.log("User creation result complete."));
}

//Delete User view or expression.
exports.editUser = function(userID,user){
  let user = db.user;
  user.update({
    userId:userID,
    user
  });
}

//Retrieve expression.
export.retrieveUser = function(userID){
  let user = db.user;
  user.findOne({
    where:{
      userId:userID
    }
  }).then(person=>{return person});
}

//Delete a user.
export.deleteUser = function(userID){
  let userModel = db.user;
  userModel.destroy({
    where:{
      userId:user_ID
    }
  });
}