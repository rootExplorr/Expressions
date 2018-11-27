module.exports = (sequelize,type) => {
	return sequelize.define('Relation',{
		relationId : {
			type: type.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		fromUserID: type.INTEGER,
		toUserID: type.INTEGER,
		relation: type.STRING
	})
}