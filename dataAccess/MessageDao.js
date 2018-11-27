
//Save Message.
exports.saveMessage = function(fromUserId,toUserId,userMessage){
  let message = db.Message;
  message.create({
    fromUserID:fromUserId
    toUserID: toUserId,
    message: userMessage
  });
}

//Edit message.
exports.editMessage = function(fromUserId,toUserId,userMessage){
  let message = db.Message;
  message.update({
    fromUserID:fromUserId,
    toUserID: toUserId,
    message: userMessage
  });
}

//Retrieve message.
exports.retrieveMessage = function(fromUserId,toUserId){
  let message = db.Message;
  message.findOne({
    where:{
      fromUserID:fromUserId,
      toUserId:toUserID
    }
  });
}

//Delete message.
exports.deleteMessage = function(fromUserId,toUserId){
  let message = db.Message;
  message.destroy({
    fromUserID:fromUserId,
    toUserID: toUserId
  });
}