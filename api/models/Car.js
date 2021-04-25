const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const carSchema = new mongoose.Schema(
    {
        CarID: {
            type: String,
            index: true
        },
        Make: {
            type: String
        },
        Model: {
            type: String
        },
        Color: {
            type: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('car', carSchema);