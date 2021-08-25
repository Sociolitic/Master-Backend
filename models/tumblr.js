const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customSchema = new Schema(
  {
    "_id": {
      "$oid": {
        "type": "ObjectId"
      }
    },
    "id": {
      "type": "String"
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
    },
    "source": {
      "type": "String"
    },
    "text": {
      "type": "String"
    },
    "created_time": {
      "$date": {
        "type": "Date"
      }
    },
    "misc": {
      "blog_name": {
        "type": "String"
      },
      "body": {
        "type": "String"
      },
      "tags": {
        "type": [
          "String"
        ]
      },
      "url": {
        "type": "String"
      },
      "summary": {
        "type": "String"
      }
    }
  },
	{
		usePushEach: true,
		timestamps: true
	}
);

let customModel = mongoose.model('tumblr', customSchema,'tumblr');

module.exports = customModel;
