const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const connectToMOngoDb = require('./config/db');

connectToMOngoDb();

app.use(express.json({ extended: true }));
app.use(cors());

app.use('/api/', require('././routes/messageRoute'));


app.listen(PORT, () => {
    console.log(`Trendies app is running at http://${process.env.HOST}${PORT}`)
})