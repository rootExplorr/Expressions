module.exports = (sequelize,type) => {
	return sequelize.define('User',{
		userId : {
			type: type.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		firstName: type.STRING,
		middleName: type.STRING,
		lastName: type.STRING,
		email: type.STRING,
		altEmail: type.STRING,
		phone: type.INTEGER,
		blogURL: type.STRING,
		nickName: type.STRING,
		language: type.STRING,
		hobbies: type.STRING,
		profilePic : type.BLOB,
		backgroundPic: type.BLOB
	})
}