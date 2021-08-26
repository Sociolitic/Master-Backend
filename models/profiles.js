const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customSchema = new Schema(
    {
		users: [{
			type: "String",
		}],
		plan: {
			type: "String"
		},
		brand: {
			type: "String"
		},
		competitors: [{
			type: "String",
		}],
        quota: {
            type: "Number"
        }
	},
	{
		usePushEach: true,
		timestamps: true
	}
);

let customModel = mongoose.model('profile', customSchema,'profile');

module.exports = customModel;
