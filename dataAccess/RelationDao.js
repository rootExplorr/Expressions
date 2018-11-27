

//Save Relationship.
exports.saveRelation = function(fromUserId,toUserId,userRelation){
  let relation = db.Relation;
  relation.create({
    fromUserID:fromUserId
    toUserID: toUserId,
    relation:userRelation
  });
}

//Edit Relationship.
exports.editRelation = function(fromUserId,toUserId,userRelation){
  let relation = db.Relation;
  relation.update({
    fromUserID:fromUserId
    toUserID: toUserId,
    relation:userRelation
  });
}

//Retrieve Relationship.
exports.retrieveRelationship = function(fromUserId,toUserId){
  let relation = db.Relation;
  relation.findOne({
    where:{
      fromUserID:fromUserId,
      toUserId:toUserID
    }
  });
}

//Delete Relationship.
exports.deleteRelationship = function(fromUserId,toUserId){
  let relation = db.Relation;
  relation.destroy({
    fromUserID:fromUserId,
    toUserID: toUserId
  });
}