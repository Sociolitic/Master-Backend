const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const youTubeSchema = new Schema(
	{
    "_id": {
      "$oid": {
        "type": "ObjectId"
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
    "created_time": {
      "$date": {
        "type": "Date"
      }
    },
    "misc": {
      "tags": {
        "type": [
          "String"
        ]
      },
      "channelId": {
        "type": "String"
      },
      "channelTitle": {
        "type": "String"
      },
      "categoryId": {
        "type": "Number"
      },
      "category": {
        "type": "String"
      },
      "viewCount": {
        "type": "Number"
      },
      "likeCount": {
        "type": "Number"
      },
      "dislikeCount": {
        "type": "Number"
      },
      "commentCount": {
        "type": "Number"
      },
      "favoriteCount": {
        "type": "Number"
      },
      "comments": {
        "Comment": {
          "type": [
            "String"
          ]
        },
        "Author_name": {
          "type": [
            "String"
          ]
        },
        "Date": {
          "type": [
            "String"
          ]
        },
        "Author_channel_id": {
          "type": [
            "String"
          ]
        },
        "Likes": {
          "type": [
            "Number"
          ]
        },
        "totalReplyCount": {
          "type": [
            "Number"
          ]
        },
        "Sentiment": {
          "type": [
            "String"
          ]
        }
      }
    }
  },
	{
		usePushEach: true,
		timestamps: true
	}
);

let youTube = mongoose.model('youTube', youTubeSchema,'youTube');

module.exports = youTube;
