module.exports = (sequelize,type) => {
	return sequelize.define('Messages',{
		messageId : {
			type: type.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		message: type.STRING,
		fromUserID: type.INTEGER,
		toUserID: type.INTEGER
	})
}