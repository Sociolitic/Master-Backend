const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customSchema = new Schema(
  {
    "_id": {
      "$oid": {
        "type": "ObjectId"
      }
    },
    "source": {
      "type": "String"
    },
    "text": {
      "type": "String"
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
    "created_time": {
      "$date": {
        "type": "Date"
      }
    },
    "misc": {
      "score": {
        "type": "Number"
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
      "url": {
        "type": "String"
      },
      "comments_num": {
        "type": "Number"
      },
      "body": {
        "type": "String"
      }
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
