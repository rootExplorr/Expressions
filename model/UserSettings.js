module.exports = (sequelize,type) => {
	return sequelize.define('UserSettings',{
		loginID: type.STRING,
		password: type.STRING
	})
}