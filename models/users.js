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
		},
		profiles: [{
			type: "String",
			default: "null"
		}],
		stage: {
			type: "Number"
		},
		alerts: {
			type: "Boolean",
			default: false
		},
		reports: {
			type: "Boolean",
			default: false
		},
		newsletters: {
			type: "Boolean",
			default: false
		},
	},
	{
		usePushEach: true,
		timestamps: true
	}
);

let user = mongoose.model('user', userSchema);

module.exports = user;
