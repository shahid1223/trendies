const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
});

const message = mongoose.model('message', messageSchema);

module.exports = message;