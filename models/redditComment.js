const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customSchema = new Schema(
	{
    "_id": {
      "$oid": {
        "type": "ObjectId"
      }
    },
    "postId": {
      "type": "String"
    },
    "comments": {
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

let customModel = mongoose.model('reddit_comment', customSchema,'reddit_comment');

module.exports = customModel;
