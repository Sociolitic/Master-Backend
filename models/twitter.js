const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customSchema = new Schema(
	{
    "_id": {
      "$oid": {
        "type": "ObjectId"
      }
    },
    "text": {
      "type": "String"
    },
    "tweet_id": {
      "type": "String"
    },
    "user_id": {
      "type": "String"
    },
    "geo": {
      "type": "Mixed"
    },
    "lang": {
      "type": "String"
    },
    "retweet_count": {
      "type": "Number"
    },
    "created_time": {
      "$date": {
        "type": "Date"
      }
    },
    "tag": {
      "type": "String"
    },
    "sentiment": {
      "type": "String"
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

let customModel = mongoose.model('twitter', customSchema,'twitter');

module.exports = customModel;
