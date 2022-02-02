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
    "profiles": {
        "type": [
            "String"
        ]
    },
    "years": {
        "type": [
            "Mixed"
        ]
    },
    "months": {
        "type": [
        "Mixed"
        ]
    },
    "days": {
        "type": [
        "Mixed"
        ]
    },
    "hours": {
        "type": [
        "Mixed"
        ]
    },
    "mins": {
        "type": [
        "Mixed"
        ]
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
    }
);

let customModel = mongoose.model('ner_aggregate', customSchema,'ner_aggregate');

module.exports = customModel;