const mongoose = require('mongoose');
require('dotenv').config();

const connectToMOngoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGOURI, () => {
            console.log("Application connected to MOOngoDb successfully");
        });
    } catch (error) {
        console.error(error.message);
    }
};

module.exports = connectToMOngoDb;