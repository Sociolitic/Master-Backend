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
      "user_name": {
        "type": "String"
      },
      "user_id": {
        "type": "String"
      },
      "retweet_count": {
        "type": "Number"
      },
      "geo": {
        "type": "Mixed"
      },
      "lang": {
        "type": "String"
      },
      "entities": {
        "hashtags": {
          "type": "Array"
        },
        "symbols": {
          "type": "Array"
        },
        "user_mentions": {
          "type": "Array"
        },
        "urls": {
          "type": [
            "Mixed"
          ]
        }
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

let customModel = mongoose.model('twitter', customSchema,'twitter');

module.exports = customModel;
