module.exports = (sequelize,type) => {
	return sequelize.define('View',{
		postId : {
			type: type.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		viewText: type.STRING
	})
}