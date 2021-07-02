const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customSchema = new Schema(
	{
    "_id": {
      "$oid": {
        "type": "ObjectId"
      }
    },
    "tag": {
      "type": "String"
    },
    "Total_reviews": {
      "type": "Number"
    },
    "positive": {
      "type": "Number"
    },
    "negative": {
      "type": "Number"
    },
    "neutral": {
      "type": "Number"
    },
    "createdAt": {
      "$date": {
        "type": "Date"
      }
    },
    "updatedAt": {
      "$date": {
        "type": "Date"
      }
    }
  },
	{
		usePushEach: true,
		timestamps: true
	}
);

let customModel = mongoose.model('reddit_count', customSchema,'reddit_count');

module.exports = customModel;
