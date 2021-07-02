const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customSchema = new Schema(
	{
    "_id": {
      "$oid": {
        "type": "ObjectId"
      }
    },
    "publishedTime": {
      "type": "Date"
    },
    "postId": {
      "type": "String"
    },
    "userId": {
      "type": "String"
    },
    "caption": {
      "type": "String"
    },
    "url": {
      "type": "String"
    },
    "shortcode": {
      "type": "String"
    },
    "likes": {
      "type": "Number"
    },
    "views": {
      "type": "String"
    },
    "is_video": {
      "type": "Boolean"
    },
    "accessibility_caption": {
      "type": "String"
    },
    "comment_count": {
      "type": "Number"
    },
    "tag": {
      "type": "String"
    }
  },
	{
		usePushEach: true,
		timestamps: true
	}
);

let customModel = mongoose.model('instagram', customSchema,'instagram');

module.exports = customModel;
