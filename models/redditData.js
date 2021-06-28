const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customSchema = new Schema(
	{
    "_id": {
      "$oid": {
        "type": "ObjectId"
      }
    },
    "title": {
      "type": "String"
    },
    "score": {
      "type": "Number"
    },
    "id": {
      "type": "String"
    },
    "url": {
      "type": "String"
    },
    "comments_num": {
      "type": "Number"
    },
    "Body": {
      "type": "String"
    },
    "created_time": {
      "type": "Date"
    },
    "comments": {
      "comment": {
        "type": [
          "String"
        ]
      },
      "sentiment": {
        "type": [
          "String"
        ]
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

let customModel = mongoose.model('reddit', customSchema,'reddit');

module.exports = customModel;
