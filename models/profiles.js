const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customSchema = new Schema(
    {
		users: [{
			type: "String",
		}],
		creator: {
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
        },
		analysis: {
			type: "Boolean",
			default: false
		}
	},
	{
		usePushEach: true,
		timestamps: true
	}
);

let customModel = mongoose.model('profile', customSchema,'profile');

module.exports = customModel;
