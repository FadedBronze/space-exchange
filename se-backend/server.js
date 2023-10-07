require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const { MongoClient } = require('mongodb');
const uri = process.env.URI
const client = new MongoClient(uri);

let personDocument = {
    "hi": "test"
}

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
}));

async function connectToMongoDB() {
    try {
        // Connect to the Atlas cluster
        await client.connect();
    } catch (err) {
        console.log(err.stack);
    }
}
connectToMongoDB().catch(console.dir);

const saveData = async (data) => {
    const db = client.db("main");
    const col = db.collection("main");
    const p = await col.insertOne(personDocument);
}
saveData(personDocument);

app.post('/home', (req, res) => {
    const requestData = req.body;
    console.log('Received POST data:', requestData);

    res.status(200).json({});
});

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

