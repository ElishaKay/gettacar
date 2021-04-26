const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const carSchema = new mongoose.Schema(
    {
        carID: {
            type: String,
            index: true
        },
        make: {
            type: String
        },
        model: {
            type: String
        },
        color: {
            type: String
        },
        imageURL: {
            type: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('car', carSchema);