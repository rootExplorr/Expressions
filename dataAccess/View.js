

//Save User view or expression.
exports.saveView = function(userID,userView){
  let view = db.View;
  view.create({
    userId:userID,
    viewText:userView
  });
}

//Delete User view or expression.
exports.editView = function(userID,viewID,userView){
  let view = db.View;
  view.update({
    userId:userID,
    viewId:viewID,
    viewText:userView
  });
}

//Retrieve expression.
export.retrieveView = function(viewId,viewID){
  let view = db.view;
  view.findOne({
    where:{
      userId:userID,
      viewId:viewID
    }
  }).then(person=>{return person});
}

//delete View
exports.deleteView = function(userID,viewID){
  let view = db.view;
  view.destroy({
    where:{
      userId:userID,
      viewId:viewID
    }
  });
}