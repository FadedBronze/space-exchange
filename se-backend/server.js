require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const { MongoClient } = require("mongodb");
const uri = process.env.URI;

const client = new MongoClient(uri);
const myDatabase = "test";
const myCollection = "test";
let data = [];

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

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
    const db = client.db(myDatabase);
    const col = db.collection(myCollection);
    const p = await col.insertOne(data);
};

const readData = async () => {
    const db = client.db(myDatabase);
    const collection = db.collection(myCollection);
    try {
        data = await collection.find({}).toArray();
    } catch (err) {
        console.error("Error reading data from MongoDB:", err);
    }
};

readData();

app.post("/add", (req, res) => {
    saveData(req.body).then(() => res.status(200).json({}));
});

app.get("/home", (req, res) => {
    readData().then(() => res.status(200).json(data));
});

app.post("/filter", (req, res) => {
    readData().then(() => res.status(200).json(data));
});


app.post('/search', (req, res) => {
    let projects = []
    console.log(req.body.search)
    readData()
    for (let i = 0; i < data.length; i++) {
        if ("hi") {
            projects.push(data[i])
        }

    }
    res.status(200).json(projects)
})


app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// {
//     "tags": [
//              "#space",
//              "#exploration"
//          ],
//      "skills": ["Python"]
//  }
