const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		userId: {
			type: "String"
		  },
		name: {
			type: "String"
		},
		email: {
			type: "String"
		},
		photo: {
			type: "String"
		},
		plan: {
			type: "String"
		}
	},
	{
		usePushEach: true,
		timestamps: true
	}
);

let user = mongoose.model('user', userSchema);

module.exports = user;
