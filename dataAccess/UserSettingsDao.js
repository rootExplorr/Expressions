
//Save UserSettings.
exports.saveUserSettings = function(userId,userSettings){
  let userSettings = db.UserSettings;
  userSettings.create({
    userId:userID,
    loginID: userSettings.loginID,
    password: userSettings.password
  });
}

//Edit UserSettings.
exports.editUserSettings = function(userId,userSettings){
  let userSettings = db.UserSettings;
  userSettings.update({
    userId:userID,
    loginID: userSettings.loginID,
    password: userSettings.password
  });
}

//Retrieve expression.
export.retrieveUserSettings = function(userId){
  let userSettings = db.UserSettings;
  userSettings.findOne({
    where:{
      userId:userID
    }
  }).then(userSettings=>{return userSettings});
}

//Delete UserSettings.
exports.deleteUserSettings = function(userId){
  let userSettings = db.UserSettings;
  userSettings.destroy({
    userId:userID
  });
}